const SearchWageSeekerConfig = () => {
  return {
    label: "QA_SEARCH_PROPERTY",
    type: "search",
    actionLabel: "WORKS_ADD_WAGESEEKER",
    actionRole: "INDIVIDUAL_CREATOR",
    actionLink: "",
    apiDetails: {
      serviceName: "/property-services/property/_search",
      requestParam: {
        tenantId: "",
      },
      requestBody: {
        apiOperation: "SEARCH",
        Individual: {},
      },
      minParametersForSearchForm: 1,
      masterName: "commonUiConfig",
      moduleName: "SearchWageSeekerConfig2",
      tableFormJsonPath: "requestParam",
      filterFormJsonPath: "requestParam",
      searchFormJsonPath: "requestParam",
    },
    sections: {
      search: {
        uiConfig: {
          headerStyle: null,
          formClassName: "custom-both-clear-search",
          primaryLabel: "ES_COMMON_SEARCH",
          secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
          minReqFields: 1,
          defaultValues: {
            mobileNumber: "",
            propertyIds: "",
          },
          fields: [
            {
              label: "PROPERTY_ID",
              type: "text",
              isMandatory: false,
              disable: false,
              populators: {
                name: "propertyIds",
                error: `PROJECT_PATTERN_ERR_MSG`,
                validation: { minlength: 2 },
              },
            },
            {
              label: "MOBILE NUMBER",
              type: "mobileNumber",
              isMandatory: false,
              disable: false,
              populators: {
                name: "mobileNumber",
                error: `PROJECT_PATTERN_ERR_MSG`,
                validation: { pattern: /^[a-z0-9\/-@# ]*$/i, minlength: 2 },
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
              label: "ID",
              jsonPath: "accountId",
            },
            {
              label: "PROPERTY_ID",
              jsonPath: "propertyId",
            },
            {
              label: "ACKNOWLEDGEMENT_NUMBER",
              jsonPath: "acknowldgementNumber",
            },
            {
              label: "OWNER_NAME",
              jsonPath: "owners[0].name",
            },
            {
              label: "PROPERTY_TYPE",
              jsonPath: "propertyType",
            },
            {
              label: "LAND_AREA",
              jsonPath: "landArea",
            },
            {
              label: "status",
              jsonPath: "status",
            },
            {
              label: "MOBILE_NUMBER",
              jsonPath: "owners[0].mobileNumber",
            },
            { label: "View", additionalCustomization: true },
          ],
          enableGlobalSearch: false,
          enableColumnSort: true,
          resultsJsonPath: "Properties",
        },
        children: {},
        show: true,
      },
    },
    additionalSections: {},
  };
};

export default SearchWageSeekerConfig;
