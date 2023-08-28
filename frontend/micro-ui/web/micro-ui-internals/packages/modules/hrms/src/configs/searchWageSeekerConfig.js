const SearchHRMSConfig = () => {
  return {
    label: "SEARCH EMPLOYEE",
    type: "search",
    actionLabel: "WORKS_ADD_WAGESEEKER",
    actionRole: "EMPLOYEE",
    actionLink: "masters/create-wageseeker",
    apiDetails: {
      serviceName: "/egov-hrms/employees/_search",
      requestParam: {},
      requestBody: {
        apiOperation: "SEARCH",
        Individual: {},
      },
      minParametersForSearchForm: 1,
      masterName: "commonUiConfig",
      moduleName: "SearchHRMSConfig",
      tableFormJsonPath: "requestParam",
      filterFormJsonPath: "requestBody.Individual",
      searchFormJsonPath: "requestBody.Individual",
    },
    sections: {
      search: {
        uiConfig: {
          headerStyle: null,
          formClassName:"custom-both-clear-search",
          primaryLabel: "ES_COMMON_SEARCH",
          secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
          minReqFields: 1,
          defaultValues: {
            wardCode: "",
            individualId: "",
            name: "",
            socialCategory: "",
            mobileNumber: "",
            createdFrom: "",
            createdTo: "",
          },
          fields: [
          //   {
          //     "label": "COMMON_WARD",
          //     "type": "locationdropdown",
          //     "isMandatory": false,
          //     "disable": false,
          //     "populators": {
          //         "name": "wardCode",
          //         "type": "ward",
          //       "optionsKey": "i18nKey",
          //         "defaultText": "COMMON_SELECT_WARD",
          //         "selectedText": "COMMON_SELECTED",
          //         "allowMultiSelect": false
          //     }
          // },
            {
              inline: true,
              label: "Employee Name",
              isMandatory: false,
              type: "text",
              disable: false,
              populators: { name: "name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
              label: "Mobile number",
              isMandatory: false,
              type: "mobileNumber",
              disable: false,
              populators: { name: "phNumber", error: "error message", validation: { min: 5999999999, max: 9999999999 } },
              description: "The mobile number entered must be unique",
            },
            // {
            //   label: "MASTERS_WAGESEEKER_ID",
            //   type: "text",
            //   isMandatory: false,
            //   disable: false,
            //   populators: {
            //     name: "individualId",
            //     error: `PROJECT_PATTERN_ERR_MSG`,
            //     validation: {  minlength: 2 },
            //   },
            // },
            {
              label: "Employee ID",
              isMandatory: false,
              key: "additionalDetails",
              type: "text",
              disable: false,
              populators: { name: "additionalDetails", error: "error" },
            },
            // {
            //   label: "CORE_COMMON_PROFILE_MOBILE_NUMBER",
            //   type: "mobileNumber",
            //   isMandatory: false,
            //   disable: false,
            //   populators: {
            //     name: "mobileNumber",
            //     error: `PROJECT_PATTERN_ERR_MSG`,
            //     validation: { pattern: /^[a-z0-9\/-@# ]*$/i, minlength: 2 },
            //   },
            // },
            // {
            //   label: "MASTERS_SOCIAL_CATEGORY",
            //   type: "dropdown",
            //   isMandatory: false,
            //   disable: false,
            //   populators: {
            //     name: "socialCategory",
            //     optionsKey: "code",
            //     optionsCustomStyle: {
            //       top: "2.3rem",
            //     },
            //     mdmsConfig: {
            //       masterName: "SocialCategory",
            //       moduleName: "common-masters",
            //       localePrefix: "MASTERS",
            //     },
            //   },
            // },
            // {
            //   label: "CREATED_FROM_DATE",
            //   type: "date",
            //   isMandatory: false,
            //   disable: false,
            //   key : "createdFrom",
            //   preProcess : {
            //     updateDependent : ["populators.max"]
            //   },
            //   populators: {
            //     name: "createdFrom",
            //     max : "currentDate"
            //   },
            // },
            // {
            //   label: "CREATED_TO_DATE",
            //   type: "date",
            //   isMandatory: false,
            //   disable: false,
            //   key : "createdTo",
            //   preProcess : {
            //     updateDependent : ["populators.max"]
            //   },
            //   populators: {
            //     name: "createdTo",
            //     error: "DATE_VALIDATION_MSG",
            //     max : "currentDate"
            //   },
            //   additionalValidation: {
            //     type: "date",
            //     keys: { start: "createdFrom", end: "createdTo" },
            //   },
            // },
            // {
            //   isMandatory: false,
            //   type: "dropdown",
            //           key: "type4",
            //   label: "ULB",
            //   disable: false,
            //   populators: {
            //     name: "type4",
            //     optionsKey: "name",
            //     error: "Required",
            //     required: true,
            //     options: [
            //       {
            //         name: "City A",
            //         code: "citya"
            //       },
            //       {
            //         name: "City B",
            //         code: "cityb"
            //       },
            //       {
            //         name: "City C",
            //         code: "cityc"
            //       },
            //     ],
      
            //   },
            // },
            {
              isMandatory: false,
              type: "dropdown",
              key: "type5",
              label: "Role",
              disable: false,
              populators: {
                name: "type5",
                optionsKey: "code",
                error: "Required",
                required: true,
                mdmsConfig: {
                  masterName: "roles",
      
                  moduleName: "ACCESSCONTROL-ROLES",
                  localePrefix: "",
                },
              },
            },
            {
              isMandatory: false,
              type: "dropdown",
                      key: "type6",
              label: "Department",
              disable: false,
              populators: {
                name: "type6",
                optionsKey: "code",
                error: "sample required message",
                required: true,
                mdmsConfig: {
                  masterName: "Department",
                  moduleName: "common-masters",
                  localePrefix: "",
                },
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
              label: "Employee ID",
              jsonPath: "id",
            },
            {
              label: "Employee Name",
              jsonPath: "user.userName",
              // additionalCustomization: true,
            },
            
            // {
            //   label: "ULB",
            //   jsonPath: "additionalFields.fields[0].value",
            //   additionalCustomization: true,
            // },
            {
              label: "No of Roles",
              jsonPath: "address[0].tenantId",
              additionalCustomization: true,
            },
            {
              label: "Designation",
              jsonPath: "assignments[0].designation",
              // additionalCustomization: true,
            },
            {
              label: "Department",
              jsonPath: "assignments[0].department",
              // additionalCustomization: true,
            },
            {
              label: "Status",
              jsonPath: "user.active",
              // additionalCustomization: true,
            },
          ],
          enableGlobalSearch: false,
          enableColumnSort: true,
          resultsJsonPath: "Employees",
        },
        children: {},
        show: true,
      },
    },
    additionalSections: {},
  };
};

export default SearchHRMSConfig;
