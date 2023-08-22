import { Loader, FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export const newConfig = [
  {
    head: "Organisation Details",
    body: [
      {
        label: "Name",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "name",
          error: "Required",
          validation: { pattern: /^[A-Za-z]+$/i },
        },
      },
      {
        label: "Application Status",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "applicationStatus",
          error: "Required",
        },
      },
      {
        label: "External Reference Number",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "externalRefNumber",
          error: "Required",
        },
      },
      {
        label: "Date of Incorporation",
        isMandatory: true,
        type: "date",
        disable: false,
        populators: {
          name: "dateOfIncorporation",
          error: "Required",
          validation: { required: true },
        },
      },
      // Add more fields based on the JSON structure
    ],
  },
  {
    head: "Organisation Address",
    body: [
      {
        label: "Door No",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "doorNo",
          error: "Required",
          validation: { pattern: /^[A-Za-z0-9\s]+$/i },
        },
      },
      {
        label: "Plot No",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "plotNo",
          error: "Required",
          validation: { pattern: /^[A-Za-z0-9\s]+$/i },
        },
      },
      {
        label: "Landmark",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "landmark",
          error: "Required",
        },
      },
      {
        label: "City",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "city",
          error: "Required",
        },
      },
      {
        label: "District",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "district",
          error: "Required",
        },
      },
      {
        label: "Region",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "region",
          error: "Required",
        },
      },
      {
        label: "State",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "state",
          error: "Required",
        },
      },
      {
        label: "Country",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "country",
          error: "Required",
        },
      },
      {
        label: "Pincode",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "pincode",
          error: "Required",
        },
      },
      {
        label: "Additional Details",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "additionDetails",
          error: "Required",
        },
      },
      {
        label: "Building Name",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "buildingName",
          error: "Required",
        },
      },
      {
        label: "Street",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "street",
          error: "Required",
        },
      },
      {
        label: "Boundary Type",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "boundaryType",
          error: "Required",
        },
      },
      {
        label: "Boundary Code",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "boundaryCode",
          error: "Required",
        },
      },
      {
        label: "Latitude",
        isMandatory: true,
        type: "number",
        disable: false,
        populators: {
          name: "latitude",
          error: "Required",
        },
      },
      {
        label: "Longitude",
        isMandatory: true,
        type: "number",
        disable: false,
        populators: {
          name: "longitude",
          error: "Required",
        },
      },
      // Add more fields based on the JSON structure
    ],
  },
  {
    head: "Contact Details",
    body: [
      {
        label: "Contact Name",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "contactName",
          error: "Required",
          validation: { pattern: /^[A-Za-z\s]+$/i },
        },
      },
      {
        label: "Contact Mobile Number",
        isMandatory: true,
        type: "mobileNumber",
        disable: false,
        populators: {
          name: "contactMobileNumber",
          error: "Required",
          validation: { min: 5999999999, max: 9999999999 },
        },
      },
      {
        label: "Contact Email",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "contactEmail",
          error: "Required",
          validation: {
            required: true,
            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
          },

        },
      },
      // Add more fields based on the JSON structure
    ],
  },
];

const Create = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data, "data");
  };

  const configs = newConfig ? newConfig : [];

  return (
    <div>
      <FormComposerV2
        label={t("Submit Bar")}
        config={configs.map((config) => {
          return {
            ...config,
            body: config.body.filter((field) => field.isMandatory), // Filter only mandatory fields
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
