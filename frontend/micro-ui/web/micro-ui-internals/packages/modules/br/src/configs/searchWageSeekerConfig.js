const searchBrConfig = () => {
    return {
      label: "Birth Registration Search",
      type: "search",
      actionLabel: "WORKS_ADD_WAGESEEKER",
      actionRole: "INDIVIDUAL_CREATOR",
      actionLink: "masters/create-wageseeker",
      apiDetails: {
        serviceName: "/birth-death-services/birth/_search",
        requestParam: {},
        requestBody: {
          apiOperation: "SEARCH",
          Individual: {},
        },
        minParametersForSearchForm: 1,
        masterName: "commonUiConfig",
        moduleName: "SearchBrConfig",
        tableFormJsonPath: "requestParam",
        filterFormJsonPath: "requestBody.Individual",
        searchFormJsonPath: "requestParam",
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
            //   {
            //     label: "MASTERS_WAGESEEKER_NAME",
            //     type: "text",
            //     isMandatory: false,
            //     disable: false,
            //     populators: { name: "name", validation: { pattern: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i, maxlength: 140 } },
            //   },
              // {
              //   label: "TennantId",
              //   type: "text",
              //   isMandatory: true,
              //   disable: false,
              //   populators: {
              //     name: "TennantId",
              //     error: `PROJECT_PATTERN_ERR_MSG`,
              //     validation: {  minlength: 2 },
              //   },
              // },
              // {
              //   isMandatory: true,
              //   key: "genders",
              //   type: "radioordropdown",
              //   label: "Enter Gender",
              //   disable: false,
              //   populators: {
              //     name: "GEenders",
              //     optionsKey: "name",
              //     error: "sample required message",
              //     required: true,
              //     mdmsConfig: {
              //       masterName: "GenderType",
              //       moduleName: "common-masters",
              //       localePrefix: "COMMON_GENDER",
              //     },
              //   }
              // },
            //   {
            //     label: "CORE_COMMON_PROFILE_MOBILE_NUMBER",
            //     type: "mobileNumber",
            //     isMandatory: false,
            //     disable: false,
            //     populators: {
            //       name: "mobileNumber",
            //       error: `PROJECT_PATTERN_ERR_MSG`,
            //       validation: { pattern: /^[a-z0-9\/-@# ]*$/i, minlength: 2 },
            //     },
            //   },
            //   {
            //     label: "MASTERS_SOCIAL_CATEGORY",
            //     type: "dropdown",
            //     isMandatory: false,
            //     disable: false,
            //     populators: {
            //       name: "socialCategory",
            //       optionsKey: "code",
            //       optionsCustomStyle: {
            //         top: "2.3rem",
            //       },
            //       mdmsConfig: {
            //         masterName: "SocialCategory",
            //         moduleName: "common-masters",
            //         localePrefix: "MASTERS",
            //       },
            //     },
            //   },
              {
                label: "FROM_DATE",
                type: "date",
                isMandatory: true,
                disable: false,
                key : "createdFrom",
                preProcess : {
                  updateDependent : ["populators.max"]
                },
                populators: {
                  name: "fromDate",
                  max : "currentDate"
                },
              },
              {
                label: "TO_DATE",
                type: "date",
                isMandatory: true,
                disable: false,
                key : "createdTo",
                preProcess : {
                  updateDependent : ["populators.max"]
                },
                populators: {
                  name: "toDate",
                  error: "DATE_VALIDATION_MSG",
                  max : "currentDate"
                },
                additionalValidation: {
                  type: "date",
                  keys: { start: "fromDate", end: "toDate" },
                },
              },
              {
                label: "RegistrationNo",
                type: "text",
                isMandatory: false,
                disable: false,
                populators: {
                  name: "registrationNo",
                  error: `PROJECT_PATTERN_ERR_MSG`,
                  validation: {  minlength: 2 },
                },
              },
              // {
              //   isMandatory: true,
              //   key: "genders",
              //   type: "radioordropdown",
              //   label: "Enter Gender",
              //   disable: false,
              //   populators: {
              //     name: "genders",
              //     optionsKey: "name",
              //     error: "sample required message",
              //     required: true,
              //     mdmsConfig: {
              //       masterName: "GenderType",
              //       moduleName: "common-masters",
              //       localePrefix: "COMMON_GENDER",
              //     },
              //   }
              // }
              
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
                label: "RegistrationNo",
                jsonPath: "birthCerts[*].registrationno",
                additionalCustomization: true,
              },
              {
                label: "Name",
                jsonPath: "birthCerts[*].fullName",
                additionalCustomization: true,
              },
              {
                label: "Gender",
                jsonPath: "birthCerts[*].genderStr",
                 additionalCustomization: true,
              },
              {
                label: "HospitalName",
                jsonPath: "birthCerts[*].hospitalname",
                additionalCustomization: true,
              },
              {
                label: "FathersName",
                jsonPath: "birthCerts[*].birthFatherInfo.fullName",
                additionalCustomization: true,
              },
              {
                label: "MothersName",
                jsonPath: "birthCerts[*].birthMotherInfo.fullName",
                additionalCustomization: true,
              },
            ],
            enableGlobalSearch: false,
            enableColumnSort: true,
            resultsJsonPath: "birthCerts",
          },
          children: {},
          show: true,
        },
      },
      additionalSections: {},
    };
  };
  
  export default searchBrConfig;
  