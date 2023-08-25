const searchProjectConfig = () => {
    return {
      "label": "WORKS_SEARCH_PROJECTS",
      "type": "search",
      "actionLabel": "WORKS_CREATE_PROJECT",
      "actionRole": "PROJECT_CREATOR",
      "actionLink": "project/create",
      "apiDetails": {
        "serviceName": "/project/v1/_search",
        "requestParam": {},
        "requestBody": {
          "apiOperation": "SEARCH",
          "Projects": [
            {}
          ]
        },
        "minParametersForSearchForm": 1,
        "masterName": "commonUiConfig",
        "moduleName": "SearchProjectConfig",
        "tableFormJsonPath": "requestParam",
        "filterFormJsonPath": "requestBody.Projects[0]",
        "searchFormJsonPath": "requestBody.Projects[0]"
      },
      "sections": {
        "search": {
          "uiConfig": {
            "headerStyle": null,
            "primaryLabel": "ES_COMMON_SEARCH",
            "secondaryLabel": "ES_COMMON_CLEAR_SEARCH",
            "minReqFields": 1,
            "showFormInstruction": "PROJECT_SELECT_ONE_PARAM_TO_SEARCH",
            "defaultValues": {
              "projectNumber": "",
              "ward": "",
              "name": "",
              "projectType": "",
              "createdFrom": "",
              "createdTo": ""
            },
            "fields": [
              {
                "label": "Ward",
                "type": "locationdropdown",
                "isMandatory": false,
                "disable": false,
                "populators": {
                  "name": "ward",
                  "type": "ward",
                  "optionsKey": "i18nKey",
                  "allowMultiSelect": false,
                  "optionsCustomStyle": {
                    "top": "2.3rem"
                  }
                }
              },
              {
                "label": "Project Type",
                "type": "dropdown",
                "isMandatory": false,
                "disable": false,
                "populators": {
                  "name": "projectType",
                  "optionsKey": "name",
                  "optionsCustomStyle": {
                    "top": "2.3rem"
                  },
                  "mdmsConfig": {
                    "masterName": "ProjectType",
                    "moduleName": "works",
                    "localePrefix": "COMMON_MASTERS"
                  }
                }
              },
              {
                "label": "Project Name",
                "type": "text",
                "isMandatory": false,
                "disable": false,
                "preProcess": {
                  "convertStringToRegEx": [
                    "populators.validation.pattern"
                  ]
                },
                "populators": {
                  "name": "name",
                  "error": "PROJECT_PATTERN_ERR_MSG",
                  "validation": { pattern: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;""'']{1,50}$/i, maxlength: 140 }
                }
              },
              {
                "label": "Project ID",
                "type": "text",
                "isMandatory": false,
                "disable": false,
                "preProcess": {
                  "convertStringToRegEx": [
                    "populators.validation.pattern"
                  ]
                },
                "populators": {
                  "name": "projectNumber",
                  "error": "PROJECT_PATTERN_ERR_MSG",
                  "validation": {
                      "pattern": "PJ\\/[0-9]+-[0-9]+\\/[0-9]+\\/[0-9]+",
                      "minlength": 2
                  }
                }
              },
              {
                "label": "Created from",
                "type": "date",
                "isMandatory": false,
                "disable": false,
                "key" : "createdFrom",
                "preProcess" : {
                  "updateDependent" : ["populators.max"]
                },
                "populators": {
                  "name": "createdFrom",
                  "max" : "currentDate"
                }
              },
              {
                "label": "Created to",
                "type": "date",
                "isMandatory": false,
                "disable": false,
                "key" : "createdTo",
                "preProcess" : {
                  "updateDependent" : ["populators.max"]
                },
                "populators": {
                  "name": "createdTo",
                  "error": "DATE_VALIDATION_MSG",
                  "max" : "currentDate"
                },
                "additionalValidation": {
                  "type": "date",
                  "keys": {
                    "start": "createdFrom",
                    "end": "createdTo"
                  }
                }
              }
            ]
          },
          "label": "",
          "children": {},
          "show": true
        },
        "searchResult": {
          "label": "",
          "uiConfig": {
            "columns": [
              {
                "label": "WORKS_PROJECT_ID",
                "jsonPath": "projectNumber",
                "additionalCustomization": true
              },
              {
                "label": "WORKS_PROJECT_NAME",
                "jsonPath": "name",
                "maxLength": 40,
                "additionalCustomization": true
              },
              {
                "label": "ES_COMMON_LOCATION",
                "jsonPath": "address.boundary",
                "additionalCustomization": true
              },
              {
                "label": "PROJECT_ESTIMATED_COST_IN_RS",
                "jsonPath": "additionalDetails.estimatedCostInRs",
                "additionalCustomization": true,
              }
            ],
            "enableGlobalSearch": false,
            "enableColumnSort": true,
            "resultsJsonPath": "Project"
          },
          "children": {},
          "show": true
        }
      },
      "additionalSections": {}
    };
  };
  
  export default searchProjectConfig;
  