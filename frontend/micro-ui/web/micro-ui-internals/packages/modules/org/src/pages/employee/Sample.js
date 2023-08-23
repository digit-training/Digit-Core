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
        isMandatory: false,
        type: "text",
        disable: false,
        populators: {
          name: "applicationStatus",
          error: "Required",
        },
      },
      {
        label: "External Reference Number",
        isMandatory: false,
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
        isMandatory: false,
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
        isMandatory: false,
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
        isMandatory: false,
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
        isMandatory: false,
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
  var Digit = window.Digit || {};
  console.log(Digit, " ddddddddddddddddd")
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data, "data");
    const transformedData = {
      organisations: [
        {
          tenantId: tenantId,
          name: data.name,
          applicationStatus: data.applicationStatus,
          externalRefNumber: data.externalRefNumber,
          dateOfIncorporation: new Date().getTime(), // Replace with actual date

          orgAddress: [
            {
              tenantId: tenantId,
              doorNo: data.doorNo,
              plotNo: data.plotNo,
              landmark: data.landmark,
              city: data.city,
              district: data.district,
              region: data.region,
              state: data.state,
              country: data.country,
              pincode: data.pincode,
              additionDetails: data.additionDetails,
              buildingName: data.buildingName,
              street: data.street,
              boundaryType: data.boundaryType,
              boundaryCode: data.boundaryCode,
              geoLocation: {
                latitude: parseFloat(data.latitude),
                longitude: parseFloat(data.longitude),
                additionalDetails: {
                  geoLocation: "test-additionalDetails",
                },
              },
            },
          ],

          contactDetails: [
            {
              contactName: data.contactName,
              contactMobileNumber: data.contactMobileNumber,
              contactEmail: data.contactEmail,
            },
          ],

          identifiers: [
            {
              type: data.identifierType,
              value: data.identifierValue,
              additionalDetails: {
                identifiers: "test-additionalDetails",
              },
            },
          ],

          functions: [
            {
              type: data.functionType,
              category: data.functionCategory,
              class: data.functionClass,
              validFrom: new Date().getTime(), // Replace with actual date
              validTo: new Date().getTime() + 86400000, // Replace with actual date + 1 day
              wfStatus: "string",
              documents: [
                {
                  documentType: "PDF",
                  fileStore: data.funcFileStore,
                  documentUid: data.funcDocumentUid,
                  additionalDetails: {
                    "documents-func": "test-additionalDetails",
                  },
                },
              ],
              additionalDetails: {
                func: "test-additionalDetails",
              },
            },
          ],

          jurisdiction: [
            {
              code: data.jurisdictionCode,
              additionalDetails: {
                jurisdiction: "test-additionalDetails",
              },
            },
          ],

          isActive: true,

          documents: [
            {
              documentType: "PDF",
              fileStore: data.orgFileStore,
              documentUid: data.orgDocumentUid,
              additionalDetails: {
                "documents-org": "test-additionalDetails",
              },
            },
          ],

          additionalDetails: {
            org: "test-additionalDetails",
          },
        },
      ],
    };
    console.log(transformedData, " tttttttttttttttttttttt")

    /* use customiseCreateFormData hook to make some chnages to the Employee object */
    Digit.ORGService.create(transformedData, tenantId).then((result, err) => {
      let getdata = { ...transformedData, get: result }
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
