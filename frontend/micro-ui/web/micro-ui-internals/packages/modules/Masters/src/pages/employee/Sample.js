import { Loader, FormComposerV2  } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export const newConfig = [
  {
    head: "Masters Register Wage Seeker",
    body: [
      {
        inline: true,
        label: "Aadhar Number ",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "aadharNumber", error: "Required", validation: { pattern: /^\d{12}$/
        , maxlength:12} },
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
        inline: true,
        label: "Father/Husband Name",
        isMandatory: false,
        type: "text",
        disable: false,
        populators: { name: "fatherName", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Date of Birth",
        isMandatory: true,
        // description: "Please enter a valid Date of birth",
        type: "date",
        disable: false,
        populators: { name: "dob", error: "Required", validation: { required:true } },
      },
      {
        isMandatory: true,
        type: "radioordropdown",
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
        isMandatory: true,
        type: "radioordropdown",
                key: "category",
        label: "Social Category",
        disable: false,
        populators: {
          name: "socialcategory",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          mdmsConfig: {
            masterName: "SocialCategory",
            moduleName: "common-masters",
            localePrefix: "",
          },
        },
      },
      {
        inline: true,
        label: "Photograph",
        isMandatory: false,
        type: "text",
        disable: false,
        populators: { name: "photo", error: "Required" },
      },

      // {
      //   inline:true,
      //   label :"Photograph",
      //   isMandatory:false,
      //   type:"file",
      //   accept:".jpg,.png,.jpeg",
      //   disable:false,
      //   populators: {
      //     name: "photo", // Change the name to "photo" for the file input
      //     error: "Invalid file format",
      //     validation: {
      //       validate: (value) => {
      //         if (value[0]) {
      //           // Perform additional validation here if needed
      //           if (!/\.(jpg|jpeg|png)$/i.test(value[0].name)) {
      //             return "Invalid file format";
      //           }
      //         }
      //         return true;
      //       },
      //     },
      //   },

      // },
      {
        label: "Phone number",
        isMandatory: true,
        type: "mobileNumber",
        disable: false,
        populators: { name: "phNumber", error: "sample error message", validation: { min: 5999999999, max: 9999999999 } },
      },
      // {
      //   label: "Age",
      //   isMandatory: true,
      //   type: "number",
      //   disable: false,
      //   populators: { name: "age", error: "sample error message", validation: { min: 0, max: 100 } },
      // },
      {
        isMandatory: true,
        type: "radioordropdown",
                key: "skills",
        label: "Skills",
        disable: false,
        populators: {
          name: "skills",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          mdmsConfig: {
            masterName: "WageSeekerSkills",
            moduleName: "common-masters",
            localePrefix: "MASTERS",
          },
        },
      },
      //  subHead: "Address  Details",
      
      // {
      //   "label": "COMMON_WARD",
      //   "type": "locationdropdown",
      //   "isMandatory": false,
      //   "disable": false,
      //   "populators": {
      //       "name": "ward",
      //       "type": "ward",
      //       "optionsKey": "i18nKey",
      //       "defaultText": "COMMON_SELECT_WARD",
      //       "selectedText": "COMMON_SELECTED",
      //       "allowMultiSelect": false
      //   }
      // },
    
      // {
      //   "inline": true,
      //   "label": "Enter Random Amount",
      //   "isMandatory": false,
      //   "key": "amountInRs",
      //   "type": "amount",
      //   "disable": false,
      //   "preProcess": {
      //       "convertStringToRegEx": [
      //         "populators.validation.pattern"
      //       ]
      //   },
      //   "populators": {
      //     "prefix":"₹ ",
      //       "name": "amountInRs",
      //       "error": "PROJECT_PATTERN_ERR_MSG_PROJECT_ESTIMATED_COST",
      //       "validation": {
      //         "pattern": "^[1-9]\\d*(\\.\\d+)?$",
      //         "maxlength" : 16,
      //         "step" : "0.01",
      //         "min" : 0,
      //         "max" : 5000000
      //       }
      //     }
      // }
    ],
  },
  {
    head: "Address Details",
    body: [
      {
        inline: true,
        label: "Address",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "address", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        label: "Ward",
      type: "locationdropdown",
        key: "locality",
        isMandatory: true,
        disable: false,
        populators: {
          name: "Ward",
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
      {
        isMandatory: true,
        key: "ulb",
        type: "radioordropdown",
        label: "ULB",
        disable: false,
        populators: {
          name: "ulb",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          options: [
            {
              code: "CITY A",
              name: "CITY A",
            },
          ]
          // mdmsConfig: {
          //   masterName: "TenantBoundary",
          //   moduleName: "egov-location",
          //   localePrefix: "COMMON_MASTERS",
          }
        },
      

      // {
      //   label: "Additional Details",
      //   isMandatory: true,
      //   description: "Additional Details if any",
      //   key: "additionalDetails",
      //   type: "text",
      //   disable: false,
      //   populators: { name: "additionalDetails", error: "sample error message", validation: { pattern: /^[A-Za-z]+$/i } },
      // },
   
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
      //   },
      // },
      // {
      //   isMandatory: false,
      //   key: "priority",
      //   type: "radio",
      //   label: "Enter Priority of Application",
      //   disable: false,
      //   populators: {
      //     name: "priority",
      //     optionsKey: "name",
      //     error: "sample required message",
      //     required: false,
      //     options: [
      //       {
      //         code: "1",
      //         name: "P1",
      //       },
      //       {
      //         code: "2",
      //         name: "P2",
      //       },
      //       {
      //         code: "3",
      //         name: "P3",
      //       },
      //     ],
      //   },
      // },
      // {
      //   "type": "component",
      //   "component": "SampleComponent",
      //   "withoutLabel": true,
      //   "key": "comments"
      // },
    ],
  },
];

const Create = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    const formattedData = {
      Individual: {
        tenantId: "pg.citya",
        name: {
          givenName: data?.name,
        },
        dateOfBirth: "03/08/1994",
        gender: data?.genders?.code,
        mobileNumber: data?.phNumber,
        address: [
          {
            tenantId: "pg.citya",
            pincode: null,
            city: "pg.citya",
            street: null,
            doorNo: null,
            type: "PERMANENT",
            locality: {
              code: "SUN01",
            },
            ward: {
              code:data?.Ward?.[0]?.code
            }
          }
        ],
        fatherName: data?.fatherName,
        husbandName:  null,
        relationship: "FATHER",
        "identifiers": [
          {
              "identifierType": "AADHAAR",
              // "identifierId": data?.AadharNumber,
              "identifierId":data?.aadharNumber
          }
      ],
        skills: [{
          type:data?.skills?.code.split('.')?.[1],
          level:data?.skills?.code.split('.')?.[0]
        }],
        "photo":null,
        additionalFields: {
          fields: [
            {
              key: "SOCIAL_CATEGORY",
              value: "OTHER",
            },
          ],
        },
      },
    };

    console.log(formattedData," fffffffffffff")
    Digit.IndividualService.create(formattedData, tenantId)
      .then((result) => {
        const updatedData = { ...data, get: result };
        // onSelect("", updatedData, "", true);
        console.log("Updated data:", updatedData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  
    history.push("/works-ui/citizen/Masters/response");
  
    console.log("Formatted data:", formattedData);
  };
  

  /* use newConfig instead of commonFields for local development in case needed */

  const configs = newConfig ? newConfig : newConfig;

  return (
    <FormComposerV2
      // heading={t("Application Heading")}
      label={t("Create Wage Seeker Record ")}
      // description={"Description"}
      // text={"Sample Text if required"}
      config={configs.map((config) => {
        return {
          ...config,
          body: config.body.filter((a) => !a.hideInEmployee),
        };
      })}
      defaultValues={{}}
      onSubmit={onSubmit}
      fieldStyle={{ marginRight: 0 }}
    />
  );
};

export default Create;