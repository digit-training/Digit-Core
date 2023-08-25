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

  var Digit = window.Digit || {};
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();
  const newConfig = [
    {
      "head": "Organisation Details",
      "subHead": "",
      "body": [
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
              "max": new Date().toISOString().split("T")[0]
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

        {
          "label": "Valid From",
          "isMandatory": true,
          "key": "funDetails_validFrom",
          "type": "date",
          "disable": false,
          "preProcess": {
            "updateDependent": [
              "populators.validation.max"
            ]
          },
          "populators": {
            "name": "funDetails_validFrom",
            "error": "WORKS_REQUIRED_ERR",
            "validation": {
              "max": new Date().toISOString().split("T")[0]
            }
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
              "populators.validation.min"
            ]
          },
          "populators": {
            "name": "funDetails_validTo",
            "validation": {
              "min": new Date().toISOString().split("T")[0]
            }
          }
        }
      ]
    },
    {
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
