import { Loader, FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const navConfig = [
  {
    name: "location_details",
    code: "ES_COMMON_LOCATION_DETAILS",
  },
  {
    name: "contact_Details",
    code: "ES_COMMON_CONTACT_DETAILS",
  },
  {
    name: "financial_Details",
    code: "MASTERS_FINANCIAL_DETAILS",
  }
];







const Create = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // State to hold current date

  useEffect(() => {
    setCurrentDate(new Date()); // Update the current date when the component mounts
    console.log(currentDate, " cccccccccccccc")
  }, []);
  var Digit = window.Digit || {};
  // console.log(Digit, " ddddddddddddddddd")
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();
  const newConfig = [
    // {
    //   head: "Organisation Details",
    //   body: [
    //     {
    //       label: "Name",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "name",
    //         error: "Required",
    //         validation: { pattern: /^[A-Za-z]+$/i },
    //       },
    //     },
    //     {
    //       label: "Application Status",
    //       isMandatory: false,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "applicationStatus",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "External Reference Number",
    //       isMandatory: false,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "externalRefNumber",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "Date of Incorporation",
    //       isMandatory: true,
    //       type: "date",
    //       disable: false,
    //       populators: {
    //         name: "dateOfIncorporation",
    //         error: "Required",
    //         validation: { required: true },
    //       },
    //     },
    //     // Add more fields based on the JSON structure
    //   ],
    // },
    // {
    //   head: "Organisation Address",
    //   body: [
    //     {
    //       label: "Door No",
    //       isMandatory: false,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "doorNo",
    //         error: "Required",
    //         validation: { pattern: /^[A-Za-z0-9\s]+$/i },
    //       },
    //     },
    //     {
    //       label: "Plot No",
    //       isMandatory: false,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "plotNo",
    //         error: "Required",
    //         validation: { pattern: /^[A-Za-z0-9\s]+$/i },
    //       },
    //     },
    //     {
    //       label: "Landmark",
    //       isMandatory: false,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "landmark",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "City",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "city",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "District",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "district",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "Region",
    //       isMandatory: false,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "region",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "State",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "state",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "Country",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "country",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "Pincode",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "pincode",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "Additional Details",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "additionDetails",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "Building Name",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "buildingName",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "Street",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "street",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "Boundary Type",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "boundaryType",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       "label": "CORE_COMMON_CITY",
    //       "isMandatory": true,
    //       "key": "locDetails_city",
    //       "type": "radioordropdown",
    //       "disable": true,
    //       "preProcess": {
    //         "updateDependent": [
    //           "populators.options"
    //         ]
    //       },
    //       "populators": {
    //         "name": "locDetails_city",
    //         "optionsKey": "i18nKey",
    //         "error": "WORKS_REQUIRED_ERR",
    //         "optionsCustomStyle": {
    //           "top": "2.3rem"
    //         },
    //         "options": []
    //       }
    //     },
    //     {
    //       label: "Boundary Code",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "boundaryCode",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "Latitude",
    //       isMandatory: true,
    //       type: "number",
    //       disable: false,
    //       populators: {
    //         name: "latitude",
    //         error: "Required",
    //       },
    //     },
    //     {
    //       label: "Longitude",
    //       isMandatory: true,
    //       type: "number",
    //       disable: false,
    //       populators: {
    //         name: "longitude",
    //         error: "Required",
    //       },
    //     },
    //     // Add more fields based on the JSON structure
    //   ],
    // },
    // {
    //   head: "Contact Details",
    //   body: [
    //     {
    //       label: "Contact Name",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "contactName",
    //         error: "Required",
    //         validation: { pattern: /^[A-Za-z\s]+$/i },
    //       },
    //     },
    //     {
    //       label: "Contact Mobile Number",
    //       isMandatory: true,
    //       type: "mobileNumber",
    //       disable: false,
    //       populators: {
    //         name: "contactMobileNumber",
    //         error: "Required",
    //         validation: { min: 5999999999, max: 9999999999 },
    //       },
    //     },
    //     {
    //       label: "Contact Email",
    //       isMandatory: true,
    //       type: "text",
    //       disable: false,
    //       populators: {
    //         name: "contactEmail",
    //         error: "Required",
    //         validation: {
    //           required: true,
    //           pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
    //         },

    //       },
    //     },
    //     // Add more fields based on the JSON structure
    //   ],
    // },
    {
      "head": "Organisation Details",
      "subHead": "",
      "body": [
        // {
        //   "label": "MASTERS_ORGANISATION_ID",
        //   "isMandatory": false,
        //   "key": "basicDetails_orgId",
        //   "type": "text",
        //   "disable": true,
        //   "preProcess": {
        //     "updateDependent": [
        //       "populators.customStyle.display"
        //     ]
        //   },
        //   "populators": {
        //     "name": "basicDetails_orgId",
        //     "customStyle": {
        //       "display": "none"
        //     },
        //     "customClass": "field-value-no-border"
        //   }
        // },
        {
          "label": "Organisation Name",
          "isMandatory": true,
          "key": "basicDetails_orgName",
          "type": "text",
          "disable": false,
          "preProcess": {
            "convertStringToRegEx": [
              "populators.validation.pattern"
            ]
          },
          "populators": {
            "name": "basicDetails_orgName",
            "error": "MASTERS_PATTERN_ERR_MSG_ORG_DETAILS",
            "validation": {
              "pattern": "^[a-zA-Z0-9 .\\-_@\\\/']*$",
              "minlength": 2,
              "maxlength": 128
            }
          }
        },
        // {
        //   "label": "MASTERS_REGISTERED_BY_DEPT",
        //   "isMandatory": false,
        //   "key": "basicDetails_regDept",
        //   "type": "text",
        //   "disable": false,
        //   "preProcess": {
        //     "convertStringToRegEx": ["populators.validation.pattern"]
        //   },
        //   "populators": {
        //     "name": "basicDetails_regDept",
        //     "error": "ORG_VALIDATION_ERROR_DEPT",
        //     "validation": { "pattern": "^[a-zA-Z0-9 .\\-_@\\']*$", "minlength": 2, "maxlength": 64 }
        //   }
        // },
        // {
        //   "label": "MASTERS_REGISTRATION_NUMBER",
        //   "isMandatory": false,
        //   "key": "basicDetails_regDeptNo",
        //   "type": "text",
        //   "disable": false,
        //   "preProcess": {
        //     "convertStringToRegEx": [
        //       "populators.validation.pattern"
        //     ]
        //   },
        //   "populators": {
        //     "name": "basicDetails_regDeptNo",
        //     "error": "MASTERS_PATTERN_ERR_MSG_ORG_DETAILS",
        //     "validation": {
        //       "pattern": "^[a-zA-Z0-9 .\\-_@\\']*$",
        //       "minlength": 2,
        //       "maxlength": 64
        //     }
        //   }
        // },
        {
          "label": "Date Of Incorporation",
          "isMandatory": true,
          "key": "basicDetails_dateOfIncorporation",
          "type": "date",
          "disable": false,
          "preProcess": {
            "updateDependent": [
              "populators.validation.max"
            ]
          },
          "populators": {
            "name": "basicDetails_dateOfIncorporation",
            "error": "WORKS_REQUIRED_ERR",
            "validation": {
              "max": currentDate
            }
          }
        }
      ]
    },
    {
      "head": "Functional Details",
      "subHead": "",
      "body": [
        {
          "key": "funDetails_orgType",
          "label": "Organisation Type",
          "isMandatory": true,
          "type": "dropdown",
          "disable": false,
          "preProcess": {
            "updateDependent": [
              "populators.options"
            ]
          },
          "populators": {
            "name": "funDetails_orgType",
            "optionsKey": "name",
            "error": "WORKS_REQUIRED_ERR",
            "optionsCustomStyle": {
              "top": "2.3rem"
            },
            "options": [
              { "name": "VEN.CMS" },
              { "name": "VEN.NA" },
              { "name": "CBO.MSG" },
              { "name": "CBO.SDA" },
              { "name": "CBO.ALF" },
              { "name": "CBO.CLF" }
            ]
          }
        },

        // {
        //   "key": "funDetails_orgSubType",
        //   "label": "MASTERS_ORGANISATION_SUB_TYPE",
        //   "isMandatory": true,
        //   "type": "dropdown",
        //   "disable": false,
        //   "preProcess": {
        //     "updateDependent": [
        //       "populators.options"
        //     ]
        //   },
        //   "populators": {
        //     "name": "funDetails_orgSubType",
        //     "optionsKey": "name",
        //     "error": "WORKS_REQUIRED_ERR",
        //     "optionsCustomStyle": {
        //       "top": "2.3rem"
        //     },
        //     "options": []
        //   }
        // },
        {
          "key": "funDetails_category",
          "label": "Category",
          "isMandatory": true,
          "type": "dropdown",
          "disable": false,
          "preProcess": {
            "updateDependent": [
              "populators.options"
            ]
          },
          "populators": {
            "name": "funDetails_category",
            "optionsKey": "name",
            "error": "WORKS_REQUIRED_ERR",
            "optionsCustomStyle": {
              "top": "2.3rem"
            },
            "options": [
              { "name": "VEN.CW" },
              { "name": "VEN.EW" },
              { "name": "CBO.NA" }
            ]
          }
        },
        // {
        //   "key": "funDetails_classRank",
        //   "label": "MASTERS_CLASS_RANK",
        //   "isMandatory": true,
        //   "type": "dropdown",
        //   "disable": false,
        //   "populators": {
        //     "name": "funDetails_classRank",
        //     "optionsKey": "name",
        //     "error": "WORKS_REQUIRED_ERR",
        //     "optionsCustomStyle": {
        //       "top": "2.3rem"
        //     },
        //     "mdmsConfig": {
        //       "masterName": "OrgFunctionClass",
        //       "moduleName": "common-masters",
        //       "localePrefix": "COMMON_MASTERS_CLASS"
        //     }
        //   }
        // },
        {
          "label": "Valid From",
          "isMandatory": true,
          "key": "funDetails_validFrom",
          "type": "date",
          "disable": false,
          "preProcess": {
            "updateDependent": [
              "populators.max"
            ]
          },
          "populators": {
            "name": "funDetails_validFrom",
            "error": "WORKS_REQUIRED_ERR",
            "max": "currentDate"
          }
        },
        {
          "label": "Valid To",
          "isMandatory": false,
          "key": "funDetails_validTo",
          "type": "date",
          "disable": false,
          "preProcess": {
            "updateDependent": [
              "populators.min"
            ]
          },
          "populators": {
            "name": "funDetails_validTo",
            "min": "currentDate"
          }
        }
      ]
    },
    {
      // "navLink": "location_details",
      "head": "Organisation Address",
      "body": [
        {
          "label": "CORE_COMMON_CITY",
          "isMandatory": true,
          "key": "locDetails_city",
          "type": "radioordropdown",
          "disable": false,
          "preProcess": {
            "updateDependent": [
              "populators.options"
            ]
          },
          "populators": {
            "name": "locDetails_city",
            "optionsKey": "i18nKey",
            "error": "WORKS_REQUIRED_ERR",
            "optionsCustomStyle": {
              "top": "2.3rem"
            },
            "options": [{ "i18nKey": "CityA" }]
          }
        },
        {
          "label": "COMMON_WARD",
          "isMandatory": true,
          "key": "locDetails_ward",
          "type": "radioordropdown",
          "disable": false,
          "preProcess": {
            "updateDependent": [
              "populators.options"
            ]
          },
          "populators": {
            "name": "locDetails_ward",
            "optionsKey": "i18nKey",
            "error": "WORKS_REQUIRED_ERR",
            "optionsCustomStyle": {
              "top": "2.3rem"
            },
            "options": [{ "i18nKey": "Ward 1" }, { "i18nKey": "Ward 2" }, { "i18nKey": "Ward 3" }, { "i18nKey": "Ward 4" }]
          }
        },
        {
          "label": "COMMON_LOCALITY",
          "isMandatory": true,
          "key": "locDetails_locality",
          "type": "radioordropdown",
          "disable": false,
          "preProcess": {
            "updateDependent": [
              "populators.options"
            ]
          },
          "populators": {
            "name": "locDetails_locality",
            "optionsKey": "i18nKey",
            "error": "WORKS_REQUIRED_ERR",
            "optionsCustomStyle": {
              "top": "2.3rem"
            },
            "options": [{ "i18nKey": "SUN01" }, { "i18nKey": "SUN02" }, { "i18nKey": "SUN03" }]
          }
        },
        {
          "label": "ES_COMMON_STREET_NAME",
          "isMandatory": false,
          "key": "locDetails_streetName",
          "type": "text",
          "disable": false,
          "preProcess": {
            "convertStringToRegEx": [
              "populators.validation.pattern"
            ]
          },
          "populators": {
            "name": "locDetails_streetName",
            "error": "WORKS_PATTERN_ERR",
            "validation": {
              "pattern": "^[a-zA-Z0-9 .,\\/\\-_@#\\']*$",
              "minlength": 2,
              "maxlength": 64
            }
          }
        },
        {
          "label": "ES_COMMON_DOOR_NO",
          "isMandatory": false,
          "key": "locDetails_houseName",
          "type": "text",
          "disable": false,
          "preProcess": {
            "convertStringToRegEx": [
              "populators.validation.pattern"
            ]
          },
          "populators": {
            "name": "locDetails_houseName",
            "error": "WORKS_PATTERN_ERR",
            "validation": {
              "pattern": "^[a-zA-Z0-9 .,\\/\\-_@#\\']*$",
              "minlength": 2,
              "maxlength": 8
            }
          }
        }
      ]
    },
    {
      // "navLink": "contact_Details",
      // "sectionFormCategory": "contactDetails",
      "head": "Contact Details",
      "body": [
        {
          "label": "CORE_COMMON_NAME",
          "isMandatory": true,
          "key": "contactDetails_name",
          "type": "text",
          "disable": false,
          "preProcess": {
            "convertStringToRegEx": [
              "populators.validation.pattern"
            ]
          },
          "populators": {
            "name": "contactDetails_name",
            "error": "MASTERS_PATTERN_ERR_MSG_ORG_DETAILS",
            "validation": {
              "pattern": "^[a-zA-Z0-9 .\\-_@\\']*$",
              "minlength": 1,
              "maxlength": 50
            }
          }
        },
        {
          "label": "CORE_COMMON_PROFILE_MOBILE_NUMBER",
          "isMandatory": true,
          "key": "contactDetails_mobile",
          "type": "mobileNumber",
          "disable": false,
          "populators": {
            "name": "contactDetails_mobile",
            "error": "PHONE_VALIDATION",
            "validation": {
              "min": 5999999999,
              "max": 9999999999
            }
          }
        },
        {
          "label": "CORE_COMMON_PROFILE_EMAIL",
          "isMandatory": false,
          "key": "contactDetails_email",
          "type": "text",
          "disable": false,
          "preProcess": {
            "convertStringToRegEx": [
              "populators.validation.pattern"
            ]
          },
          "populators": {
            "name": "contactDetails_email",
            "error": "EMAIL_VALIDATION",
            "validation": {
              "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(?:[a-zA-Z]{2,6})$",
              "minlength": 2,
              "maxlength": 64
            }
          }
        }
      ]
    }
    // {
    //   // "navLink": "financial_Details",
    //   // "sectionFormCategory": "termsAndConditions",
    //   "head": "",
    //   "body": [
    //     {
    //       "label": "ES_COMMON_ACCOUNT_HOLDER_NAME",
    //       "isMandatory": true,
    //       "key": "financeDetails_accountHolderName",
    //       "type": "text",
    //       "disable": false,
    //       "preProcess": {
    //         "convertStringToRegEx": [
    //           "populators.validation.pattern"
    //         ]
    //       },
    //       "populators": {
    //         "name": "financeDetails_accountHolderName",
    //         "error": "WORKS_REQUIRED_ERR",
    //         "validation": {
    //           "pattern": "^[a-zA-Z0-9 .\\-_@\\']*$",
    //           "minlength": 2,
    //           "maxlength": 64
    //         }
    //       }
    //     },
    //     {
    //       "label": "MASTERS_BANK_ACCOUNT_TYPE",
    //       "isMandatory": true,
    //       "key": "financeDetails_accountType",
    //       "type": "radioordropdown",
    //       "populators": {
    //         "name": "financeDetails_accountType",
    //         "optionsKey": "name",
    //         "error": "WORKS_REQUIRED_ERR",
    //         "optionsCustomStyle": {
    //           "top": "2.3rem"
    //         },
    //         "mdmsConfig": {
    //           "masterName": "BankAccType",
    //           "moduleName": "works",
    //           "localePrefix": "MASTERS"
    //         }
    //       }
    //     },
    //     {
    //       "label": "MASTERS_ACC_NO",
    //       "isMandatory": true,
    //       "key": "financeDetails_accountNumber",
    //       "type": "text",
    //       "disable": false,
    //       "preProcess": {
    //         "convertStringToRegEx": [
    //           "populators.validation.pattern"
    //         ]
    //       },
    //       "populators": {
    //         "name": "financeDetails_accountNumber",
    //         "error": "BANK_ACCOUNT_VALIDATION",
    //         "validation": {
    //           "pattern": "^[0-9]{9,18}$",
    //           "minlength": 9,
    //           "maxlength": 18
    //         }
    //       }
    //     },
    //     // {
    //     //   "type": "component",
    //     //   "component": "TransferCodeTable",
    //     //   "withoutLabel": true,
    //     //   "key": "transferCodes",
    //     //   "customProps": {
    //     //     "isMandatory": true
    //     //   }
    //     // },
    //     {
    //       "label": "MASTERS_BANK_NAME",
    //       "isMandatory": false,
    //       "key": "financeDetails_bankName",
    //       "type": "text",
    //       "disable": true,
    //       "populators": {
    //         "name": "financeDetails_bankName",
    //         "validation": {
    //           "minlength": 2
    //         }
    //       }
    //     },
    //     {
    //       "label": "MASTERS_BRANCH_NAME",
    //       "isMandatory": false,
    //       "key": "financeDetails_branchName",
    //       "type": "text",
    //       "disable": true,
    //       "populators": {
    //         "name": "financeDetails_branchName",
    //         "validation": {
    //           "minlength": 2
    //         }
    //       }
    //     },
    //     // {
    //     //   "type": "component",
    //     //   "component": "TransferCodeTable",
    //     //   "withoutLabel": true,
    //     //   "key": "taxIdentifier",
    //     //   "customProps": {
    //     //     "isMandatory": false
    //     //   }
    //     // }
    //   ]
    // }
  ];
  const onSubmit = (input_data) => {
    // Handle form submission
    console.log(input_data, "data");
    const ward_mapping = {
      "Ward 1": "B1",
      "Ward 2": "B2",
      "Ward 3": "B3",
      "Ward 4": "B4"
    }

    var transformed_data = {
      "organisations": [{
        "tenantId": "pg." + input_data["locDetails_city"]["i18nKey"].toLowerCase(),
        "name": input_data["basicDetails_orgName"],
        "applicationStatus": "ACTIVE",
        "dateOfIncorporation": Date.parse(input_data["basicDetails_dateOfIncorporation"]),
        "orgAddress": [
          {
            "tenantId": "pg." + input_data["locDetails_city"]["i18nKey"].toLowerCase(),
            "city": input_data["locDetails_city"]["i18nKey"],
            "district": ward_mapping[input_data["locDetails_ward"]["i18nKey"].toLowerCase()] || "",
            "state": "Punjab",
            "country": "India",
            "pincode": "",
            "street": input_data["locDetails_streetName"] || "",
            "boundaryType": "WARD",
            "boundaryCode": ward_mapping[input_data["locDetails_ward"]["i18nKey"]] || "",
            "geoLocation": {
              "latitude": 0,
              "longitude": 0,
              "additionalDetails": {
                "geoLocation": "test-additionalDetails"
              }
            }
          }
        ],
        "contactDetails": [
          {
            "contactName": input_data["contactDetails_name"],
            "contactMobileNumber": input_data["contactDetails_mobile"],
            "contactEmail": input_data["contactDetails_email"]
          }
        ],
        "functions": [
          {
            "validFrom": Date.parse(input_data["funDetails_validFrom"]) || 0,
            "validTo": Date.parse(input_data["funDetails_validTo"]) || 0,
            "type": input_data["funDetails_orgType"]["name"],
            "category": input_data["funDetails_category"]["name"]
          }
        ],
        "isActive": true
      }
      ]
    };

    console.log(transformed_data, " tttttttttttttttttttttt")

    /* use customiseCreateFormData hook to make some chnages to the Employee object */
    Digit.ORGService.create(transformed_data, tenantId).then((result, err) => {
      let getdata = { ...transformed_data, get: result }
      console.log("daaaa", getdata);
      history.push({
        pathname: "/works-ui/employee/works/response",
        state: { responseData: getdata }, // Pass the responseData to the state
      });

    })
  };

  const configs = newConfig ? newConfig : [];

  return (
    <div>
      <FormComposerV2
        label={t("Submit Bar")}
        config={configs.map((config) => {
          if (config.head === "Functional Details") {
            // Update the max value for "Valid From" field
            const validFromField = config.body.find(
              (field) => field.key === "funDetails_validFrom"
            );
            if (validFromField?.populators?.validation) {
              validFromField.populators.validation.max = currentDate; // Set the max value to the current date
            }
          }
          return {
            ...config,
          };
        })}
        defaultValues={{}}
        onSubmit={onSubmit}
        fieldStyle={{ marginRight: 0 }}
      />
    </div>
  );
};

export default Create;
