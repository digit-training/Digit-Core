import { Loader, FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { createOrganisationConfig } from "../../configs/createOrgConfig";


const Create = () => {
  const defaultValues = {
    "locDetails_city": { "i18nKey": "City A" },
  }
  const [selectedWard, setSelectedWard] = useState('default');
  const localityOptionsByWard = {
    "default": [],
    "Ward 1": [
      {
        i18nKey: "Ajit Nagar - Area1"
      },
      {
        i18nKey: "Back Side 33 KVA Grid Patiala Road"
      },
      {
        i18nKey: "Bharath Colony"
      }
    ],
    "Ward 2": [
      {
        i18nKey: "Backside Brijbala Hospital - Area3"
      },
      {
        i18nKey: "Bigharwal Chowk to Railway Station - Area2"
      },
      {
        i18nKey: "Chandar Colony Biggarwal Road - Area2"
      }
    ],
    "Ward 3": [
      {
        i18nKey: "Aggarsain Chowk to Mal Godown - Both Sides - Area3"
      },
      {
        i18nKey: "ATAR SINGH COLONY - Area2"
      },
      {
        i18nKey: "Back Side Naina Devi Mandir - Area2"
      }
    ],
    "Ward 4": [
      {
        i18nKey: "Aggarsain Chowk to Mal Godown - Both Sides - Area3"
      },
      {
        i18nKey: "ATAR SINGH COLONY - Area2"
      },
      {
        i18nKey: "Back Side Naina Devi Mandir - Area2"
      }
    ]
  };
  var Digit = window.Digit || {};
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();
  var newLocalityOptions = localityOptionsByWard[selectedWard];
  const onSubmit = (input_data) => {
    // Handle form submission
    const ward_mapping = {
      "Ward 1": "B1",
      "Ward 2": "B2",
      "Ward 3": "B3",
      "Ward 4": "B4"
    }

    var transformed_data = {
      "organisations": [{
        "tenantId": Digit.ULBService.getCurrentTenantId(),
        "name": input_data["basicDetails_orgName"],
        "applicationStatus": "ACTIVE",
        "dateOfIncorporation": Date.parse(input_data["basicDetails_dateOfIncorporation"]),
        "orgAddress": [
          {
            "tenantId": Digit.ULBService.getCurrentTenantId(),
            "city": input_data["locDetails_city"]["i18nKey"],
            "district": ward_mapping[input_data["locDetails_ward"]["i18nKey"].toLowerCase()] || "",
            "state": "Punjab",
            "country": "India",
            "pincode": "",
            "street": input_data["locDetails_streetName"] || "",
            "boundaryType": "WARD",
            "locality": input_data["locDetails_locality"]["i18nKey"] || "",
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
        "additionalDetails": {
          "locality": input_data["locDetails_locality"]["i18nKey"] || "",
          "registeredByDept": "",
          "deptRegistrationNum": ""
        },
        "isActive": true
      }
      ]
    };


    /* use customiseCreateFormData hook to make some chnages to the Employee object */
    Digit.ORGService.create(transformed_data, tenantId).then((result, err) => {
      let getdata = { ...transformed_data, get: result }
      history.push({
        pathname: "/works-ui/employee/works/response",
        state: { responseData: getdata }, // Pass the responseData to the state
      });

    })
  };
  const configs = createOrganisationConfig(newLocalityOptions)
  const onFormValueChange = (setValue, formData, formState, reset, setError, clearErrors, trigger, getValues) => {
    if (formData.locDetails_ward) {
      const selectedWardKey = formData.locDetails_ward.i18nKey;

      // Get the previously stored selected ward value from local storage
      const previouslySelectedWard = localStorage.getItem('selectedWard');

      // Compare with the current value and print a message if changed
      if (previouslySelectedWard !== selectedWardKey) {
        setValue("locDetails_locality", '');
      }

      setSelectedWard(selectedWardKey);

      // Save the selectedWardKey in local storage
      localStorage.setItem('selectedWard', selectedWardKey);
    }
  }


  return (
    <div>
      <h1 style={{ fontSize: "35px", fontWeight: "bold", margin: "10px" }}>Create Organisation</h1>
      <FormComposerV2
        // heading={t("Application Heading")}
        label={t("Submit Application")}
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
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        onFormValueChange={onFormValueChange}
        fieldStyle={{ marginRight: 0, maxWidth: '540px' }}
      />
    </div>
  );
};

export default Create;
