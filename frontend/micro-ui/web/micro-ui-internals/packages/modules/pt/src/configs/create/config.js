export const newConfig = [
  {
    head: "Property Assembly Details",
    body: [
      {
        isMandatory: true,
        type: "dropdown",
        key: "PropertyType",
        label: "Property Type",
        disable: false,
        populators: {
          name: "propertyType",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          mdmsConfig: {
            masterName: "PropertyType",
            moduleName: "PropertyTax",
            localePrefix: "PT",
          },
        },
      },
      {
        label: "Total Land Area",
        isMandatory: true,
        type: "number",
        disable: false,
        populators: { name: "landArea", error: "sample error message", validation: { min: 0, max: 1000000 } },
      },
      {
        label: "Total Construction Area",
        isMandatory: true,
        type: "number",
        disable: false,
        populators: { name: "constructionArea", error: "sample error message", validation: { min: 0, max: 100 } },
      },
      {
        isMandatory: true,
        type: "dropdown",
        key: "PropertyUsageType",
        label: "Property Usage Type",
        disable: false,
        populators: {
          name: "propertyUsageType",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          mdmsConfig: {
            masterName: "UsageCategory",
            moduleName: "PropertyTax",
            localePrefix: "PT",
          },
        },
      },
    ],
  },
  {
    head: "Property Location Details",
    body: [
      {
        isMandatory: false,
        type: "dropdown",
        key: "City",
        label: "City",
        disable: true,

        populators: {
          name: "city",
          optionsKey: "description",
          error: "sample required message",
          required: true,
          mdmsConfig: {
            masterName: "tenants",
            moduleName: "tenant",
            localePrefix: "PT",
          },
        },
      },
      {
        label: "Locality/Mohalla",
        type: "locationdropdown",
        key: "locality",
        isMandatory: true,
        disable: false,
        populators: {
          name: "locality",
          type: "ward",
          optionsKey: "code",
          allowMultiSelect: false,
          mdmsConfig: {
            masterName: "TenantBoundary",
            moduleName: "egov-location",
            localePrefix: "PT",
          },
        },
      },
    ],
  },
  {
    head: "Property Owenership Details",
    body: [
      {
        isMandatory: true,
        type: "dropdown",
        key: "TypeOfOwner",
        label: "Type of Owner",
        disable: false,
        populators: {
          name: "ownerType",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          mdmsConfig: {
            masterName: "OwnerShipCategory",
            moduleName: "PropertyTax",
            localePrefix: "COMMON_PT",
          },
        },
      },

      {
        label: "Phone number",
        isMandatory: true,
        type: "mobileNumber",
        disable: false,
        populators: { name: "mobileNumber", error: "sample error message", validation: { min: 5999999999, max: 9999999999 } },
      },

      {
        inline: true,
        label: "Name",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        isMandatory: true,
        type: "dropdown",
        key: "genders",
        label: "Gender",
        disable: false,
        populators: {
          name: "gender",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          mdmsConfig: {
            masterName: "GenderType",
            moduleName: "common-masters",
            localePrefix: "COMMON_GENDER",
          },
        },
      },

      {
        inline: true,
        label: "Guardian",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "fatherOrHusbandName", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        isMandatory: false,
        type: "dropdown",
        key: "Relationship",
        label: "Relationship",
        disable: false,
        populators: {
          name: "relationship",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          options: [
            {
              code: "HUSBAND",
              name: "Husband",
            },
            {
              code: "FATHER",
              name: "Father",
            },
          ],
        },
      },
      {
        isMandatory: false,
        type: "dropdown",
        key: "Special Applicant Category",
        label: "Special Applicant Category",
        disable: false,
        populators: {
          name: "applicantCategory",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          options: [
            {
              code: "CITIZEN",
              name: "Citizen",
            },
            {
              code: "EMPLOYEE",
              name: "Employee",
            },
          ],
        },
      },

      {
        inline: true,
        label: "Address",
        isMandatory: false,
        description: "address details",
        type: "textarea",
        disable: false,
        populators: { name: "address", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
    ],
  },
];
