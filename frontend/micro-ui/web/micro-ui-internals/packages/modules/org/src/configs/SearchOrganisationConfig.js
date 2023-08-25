var Digit = window.Digit || {};
const searchOrganisationConfig = () => {
  return {
    label: "WORKS_SEARCH_ORGANISATION",
    type: "search",
    actionLabel: "MASTERS_ADD_NEW_ORGANISATION",
    actionRole: "MUKTA_ADMIN",
    actionLink: "masters/create-organization",
    apiDetails: {
      serviceName: "/org-services/organisation/v1/_search",
      requestParam: {},
      requestBody: {
        apiOperation: "SEARCH",
        SearchCriteria: {
          // tenantId: Digit.ULBService.getCurrentTenantId()
        },
      },
      minParametersForSearchForm: 1,
      masterName: "commonUiConfig",
      moduleName: "SearchOrganisationConfig",
      tableFormJsonPath: "requestBody.Pagination",
      filterFormJsonPath: "requestBody.SearchCriteria",
      searchFormJsonPath: "requestBody.SearchCriteria",
    },
    sections: {
      search: {
        uiConfig: {
          headerStyle: null,
          primaryLabel: "ES_COMMON_SEARCH",
          secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
          minReqFields: 1,
          defaultValues: {
            boundaryCode: "",
            orgNumber: "",
            name: "",
            type: "",
            applicationStatus: "",
            createdFrom: "",
            createdTo: "",
          },
          fields: [
            {
              label: "COMMON_WARD",
              type: "locationdropdown",
              isMandatory: false,
              disable: false,
              populators: {
                name: "boundaryCode",
                type: "ward",
                optionsKey: "i18nKey",
                optionsCustomStyle: {
                  top: "2.3rem",
                },
                defaultText: "COMMON_SELECT_WARD",
                selectedText: "COMMON_SELECTED",
                allowMultiSelect: false
                // options: [{ "i18nKey": "Ward 1" }]
              },
            },
            {
              label: "Organisation Type",
              type: "dropdown",
              isMandatory: false,
              disable: false,
              populators: {
                name: "type",
                optionsKey: "name",
                optionsCustomStyle: {
                  top: "2.3rem",
                },
                mdmsConfig: {
                  masterName: "OrgType",
                  moduleName: "common-masters",
                  filter: "[?(@.active==true)].parent",
                  localePrefix: "COMMON_MASTERS_ORG",
                  select:
                    "(data)=>{ return Array.isArray(data['common-masters'].OrgType) && Digit.Utils.getUnique(data['common-masters'].OrgType).map(ele=>({code:ele,name:'COMMON_MASTERS_ORG_'+ele}))}",
                },
              },
            },

            {
              label: "Organisation Name",
              type: "text",
              isMandatory: false,
              disable: false,
              populators: { name: "name", validation: { pattern: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i, maxlength: 140 } },
            },

            // {
            //   label: "Tenant Id",
            //   type: "text",
            //   isMandatory: false,
            //   disable: false,
            //   populators: {
            //     name: "tenantId",

            //     // error: `PROJECT_PATTERN_ERR_MSG`
            //     // validation: { minlength: 2 },
            //   },
            // },
            {
              label: "Organisation Number",
              type: "text",
              isMandatory: false,
              disable: false,
              populators: {
                name: "orgNumber",
                error: `PROJECT_PATTERN_ERR_MSG`,
                validation: { minlength: 2 },
              },
            },

            {
              label: "Created From Date",
              type: "date",
              isMandatory: false,
              disable: false,
              key: "createdFrom",
              preProcess: {
                updateDependent: ["populators.max"]
              },
              populators: {
                name: "createdFrom",
                max: "currentDate"
              },
            },
            {
              label: "Created To Date",
              type: "date",
              isMandatory: false,
              disable: false,
              key: "createdTo",
              preProcess: {
                updateDependent: ["populators.max"]
              },
              populators: {
                name: "createdTo",
                error: "DATE_VALIDATION_MSG",
                max: "currentDate"
              },
              additionalValidation: {
                type: "date",
                keys: { start: "createdFrom", end: "createdTo" },
              },
            },
          ],
        },
        label: "",
        children: {},
        show: true,
      },
      searchResult: {
        label: "",
        uiConfig: {
          columns: [
            {
              label: "Orgnisation Number",
              jsonPath: "orgNumber",
              // additionalCustomization: true,
            },
            {
              label: "Organisation Name",
              jsonPath: "name",
            },
            {
              label: "Organisation Type",
              jsonPath: "functions[0].type",
              // additionalCustomization: true,
            },
            {
              label: "Organisation Subtype",
              jsonPath: "functions[0].category",
              // additionalCustomization: true,
            },
            {
              label: "Boundary Code",
              jsonPath: "orgAddress[0].boundaryCode",
              // additionalCustomization: true,
            },
            {
              label: "Application Status",
              jsonPath: "applicationStatus",
              // additionalCustomization: true,
            },
          ],
          enableGlobalSearch: false,
          enableColumnSort: true,
          resultsJsonPath: "organisations",
        },
        children: {},
        show: true,
      },
    },
    additionalSections: {},
  };
};

export default searchOrganisationConfig;
