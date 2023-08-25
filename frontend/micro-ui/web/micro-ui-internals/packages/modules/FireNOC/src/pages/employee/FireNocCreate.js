import { Loader, FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export const newConfig = [
  {
    head: "Property Details",
    body: [
      {
        label: "Name of the Building",
        isMandatory: true,
        // description: "Additional Details if any",
        key: "nameofbuilding",
        type: "text",
        disable: false,
        populators: { name: "nameofbuilding", error: "sample error message", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        isMandatory: true,
        type: "dropdown",
        key: "usageType",
        label: "Building Usage Type as per NBC",
        disable: false,
        populators: {
          name: "usageType",
          optionsKey: "code",
          error: "sample required message",
          required: true,
          options: [
            {
              code: "GROUP_A_RESIDENTIAL",
              name: "GROUP_A_RESIDENTIAL",
            },
          ],
          // mdmsConfig: {
          //   masterName: "BuildingType",
          //   moduleName: "firenoc",
          //   localePrefix: "",
          // },
        },
      },
      {
        isMandatory: true,
        type: "dropdown",
        key: "subUsageType",
        label: "Building Usage Subtype as per NBC",
        disable: false,
        populators: {
          name: "subUsageType",
          optionsKey: "code",
          error: "sample required message",
          required: false,
          options: [
            {
              code: "GROUP_A_RESIDENTIAL.SUBDIVISIONA-1",
              name: "GROUP_A_RESIDENTIAL.SUBDIVISIONA-1",
            },
          ],
          // mdmsConfig: {
          //   masterName: "",
          //   moduleName: "firenoc",
          //   localePrefix: "",
          // },
        },
      },
      {
        isMandatory: true,
        type: "dropdown",
        key: "floors",
        label: "No.of Floors(Excluding Basement, Including Ground Floor)",
        disable: false,
        populators: {
          name: "floors",
          optionsKey: "code",
          error: "sample required message",
          required: true,
          options: [
            {
              code: "1",
              name: "1",
            },
            {
              code: "2",
              name: "2",
            },
            {
              code: "3",
              name: "3",
            },
          ],
        },
      },
      {
        isMandatory: true,
        type: "dropdown",
        key: "basement",
        label: "No.of Basements",
        disable: false,
        populators: {
          name: "basement",
          optionsKey: "code",
          error: "sample required message",
          required: true,
          options: [
            {
              code: "0",
              name: "0",
            },
          ],
        },
      },
      {
        inline: true,
        label: "Plot Size (in Sq meters)",
        isMandatory: false,
        type: "number",
        disable: false,
        populators: { name: "plotsize", error: "Required", validation: { min: 0, max: 9999999999 } },
      },
      {
        inline: true,
        label: "Total built up area(in Sq. meter)",
        isMandatory: false,
        type: "number",
        disable: false,
        populators: { name: "builtuparea", error: "Required", validation: { min: 0, max: 9999999999 } },
      },
      {
        label: "Height of the Building from Ground level (in meters)",
        isMandatory: true,
        // description: "Additional Details if any",
        key: "height",
        type: "number",
        disable: false,
        populators: { name: "height", error: "sample error message", validation: { min: 0, max: 9999999999 } },
      },
      // {
      //   "type": "component",
      //   "component": "SampleComponent",
      //   "withoutLabel": true,
      //   "key": "comments"
      // },
    ],
  },
  {
    head: "Property Location Details",
    // subHead: "Supporting Details",
    body: [
      // {
      //   label: "Phone number",
      //   isMandatory: true,
      //   type: "mobileNumber",
      //   disable: false,
      //   populators: { name: "phNumber", error: "sample error message", validation: { min: 5999999999, max: 9999999999 } },
      // },
      // {
      //   inline: true,
      //   label: "App",
      //   isMandatory: false,
      //   type: "text",
      //   disable: false,
      //   populators: { name: "salutation", error: "Required", validation: { pattern: /^[A-Za-z]+$/i , maxlength:5} },
      // },
      {
        inline: true,
        label: "Property ID",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "propertyid", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        isMandatory: true,
        type: "dropdown",
        key: "city",
        label: "City",
        disable: false,
        populators: {
          name: "city",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          options: [
            {
              code: "AMRITSAR",
              name: "Amritsar",
            },
          ],
        },
      },
      // {
      //   label: "Age",
      //   isMandatory: true,
      //   type: "number",
      //   disable: false,
      //   populators: { name: "age", error: "sample error message", validation: { min: 0, max: 100 } },
      // },
      // {
      //   inline: true,
      //   label: "DOB",
      //   isMandatory: true,
      //   description: "Please enter a valid Date of birth",
      //   type: "date",
      //   disable: false,
      //   populators: { name: "dob", error: "Required", validation: { required:true, } },
      // },
      {
        inline: true,
        label: "Plot/Survey No.",
        isMandatory: false,
        type: "text",
        disable: false,
        populators: { name: "plotno", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Building/Colony Name",
        isMandatory: false,
        type: "text",
        disable: false,
        populators: { name: "buildingname", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Street Name",
        isMandatory: false,
        type: "text",
        disable: false,
        populators: { name: "streetname", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Mohalla",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "mohalla", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Pincode",
        isMandatory: false,
        type: "number",
        disable: false,
        populators: { name: "pincode", error: "Required" },
      },
      {
        inline: true,
        label: "Applicable Fire Station",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "fireStation", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
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
    head: "Applicant Information",
    // subHead: "Supporting Details",
    body: [
      {
        label: "Phone number",
        isMandatory: true,
        type: "mobileNumber",
        disable: false,
        populators: { name: "phNumber", error: "sample error message", validation: { min: 5999999999, max: 9999999999 } },
      },
      // {
      //   inline: true,
      //   label: "App",
      //   isMandatory: false,
      //   type: "text",
      //   disable: false,
      //   populators: { name: "salutation", error: "Required", validation: { pattern: /^[A-Za-z]+$/i , maxlength:5} },
      // },
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
      // {
      //   label: "Age",
      //   isMandatory: true,
      //   type: "number",
      //   disable: false,
      //   populators: { name: "age", error: "sample error message", validation: { min: 0, max: 100 } },
      // },
      {
        inline: true,
        label: "DOB",
        isMandatory: true,
        description: "Please enter a valid Date of birth",
        type: "date",
        disable: false,
        populators: { name: "dob", error: "Required", validation: { required: true } },
      },
      {
        inline: true,
        label: "Email",
        isMandatory: false,
        type: "text",
        disable: false,
        populators: { name: "email", validation: { pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ } },
      },
      // {
      //   label: "Phone number",
      //   isMandatory: true,
      //   type: "mobileNumber",
      //   disable: false,
      //   populators: { name: "phNumber", error: "sample error message", validation: { min: 5999999999, max: 9999999999 } },
      // },

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
      {
        inline: true,
        label: "Father/Husband's Name",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "fathername", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        isMandatory: true,
        type: "dropdown",
        key: "relationships",
        label: "Relationship",
        disable: false,
        populators: {
          name: "relationship",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          options: [
            {
              code: "FATHER",
              name: "Father",
            },
            {
              code: "HUSBAND",
              name: "Husband",
            },
          ],
          // mdmsConfig: {
          //   masterName: "Relationship",
          //   moduleName: "common-masters",
          //   localePrefix: "COMMON_RELATIONSHIP",
          // },
        },
      },
      {
        inline: true,
        label: "PAN number",
        isMandatory: false,
        type: "text",
        disable: false,
        populators: { name: "pan" },
      },
      {
        inline: true,
        label: "Correspondance address",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "corresaddress", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      // {
      //   inline: true,
      //   label: "Address",
      //   isMandatory: false,
      //   description: "address details",
      //   type: "textarea",
      //   disable: false,
      //   populators: { name: "address", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      // },
      {
        inline: true,
        label: "Special applicant category",
        isMandatory: false,
        type: "text",
        disable: false,
        populators: { name: "specialapplicant", validation: { pattern: /^[A-Za-z]+$/i } },
      },
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
    head: "Property Location Details",
    body: [
      {
        label: "Additional Details",
        isMandatory: true,
        description: "Additional Details if any",
        key: "additionalDetails",
        type: "text",
        disable: false,
        populators: { name: "additionalDetails", error: "sample error message", validation: { pattern: /^[A-Za-z]+$/i } },
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
      //   },
      // },
      {
        isMandatory: false,
        key: "priority",
        type: "radio",
        label: "Enter Priority of Application",
        disable: false,
        populators: {
          name: "priority",
          optionsKey: "name",
          error: "sample required message",
          required: false,
          options: [
            {
              code: "1",
              name: "P1",
            },
            {
              code: "2",
              name: "P2",
            },
            {
              code: "3",
              name: "P3",
            },
          ],
        },
      },
      {
        type: "component",
        component: "SampleComponent",
        withoutLabel: true,
        key: "comments",
      },
    ],
  },
];

const Create = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();

  const onSubmit = (data) => {
    ///

    let formData =
      {
        FireNOCs: [
          {
            "fireNOCDetails": {
                "noOfBuildings": "SINGLE",
                "fireNOCType": "NEW",
                "buildings": [
                    {
                        "name": data?.nameofbuilding,
                        "usageTypeMajor": data?.usageType?.name,
                        "usageType": data?.subUsageType?.name,
                        "uomsMap": {
                            "NO_OF_FLOORS": data?.floors?.name,
                            "NO_OF_BASEMENTS": data?.basement?.name,
                            "PLOT_SIZE": data?.plotsize,
                            "BUILTUP_AREA": data?.builtuparea,
                            "HEIGHT_OF_BUILDING": data?.height
                        },
                        "uoms": [
                            {
                                "code": "HEIGHT_OF_BUILDING",
                                "value": 11,
                                "isActiveUom": true,
                                "active": true
                            },
                            {
                                "code": "NO_OF_FLOORS",
                                "value": 1,
                                "isActiveUom": false,
                                "active": true
                            },
                            {
                                "code": "NO_OF_BASEMENTS",
                                "value": 0,
                                "isActiveUom": false,
                                "active": true
                            },
                            {
                                "code": "PLOT_SIZE",
                                "value": 2222,
                                "isActiveUom": false,
                                "active": true
                            },
                            {
                                "code": "BUILTUP_AREA",
                                "value": 222,
                                "isActiveUom": false,
                                "active": true
                            }
                        ],
                        "applicationDocuments": []
                    }
                ],
                "propertyDetails": {
                    "address": {
                        "city": "pb.amritsar",
                        "doorNo": "1",
                        "buildingName": data?.buildingname,
                        "street": data?.streetname,
                        "locality": {
                            "code": "SUN04"
                        }
                    }
                },
                "firestationId": "FS_AMRITSAR_01",
                "applicantDetails": {
                    "ownerShipMajorType": "INDIVIDUAL",
                    "ownerShipType": "INDIVIDUAL.SINGLEOWNER",
                    "owners": [
                        {
                            "mobileNumber": data?.phNumber,
                            "name": data?.name,
                            "correspondenceAddress": data?.corresaddress,
                            "gender": data?.genders?.code,
                            "dob": 942258599000,
                            "relationship":data?.relationships?.code,
                            "fatherOrHusbandName": data?.fathername,
                            "ownerType": "NONE"
                        }
                    ],
                    "additionalDetail": {
                        "documents": []
                    }
                },
                "action": "INITIATE",
                "additionalDetail": {
                    "documents": []
                },
                "channel": "COUNTER",
                "financialYear": "2019-20"
            },
            "tenantId": "pb.amritsar"
        }
        ],
      };

    Digit.FireNOCService.create(formData, tenantId).then((result,err)=>{
      let getdata = {...data , get: result }
      onSelect("", getdata, "", true);
      console.log("daaaa",getdata);
      console.log(result);
    })
    .catch((e) => {
    console.log("err");
   });

   history.push("/digit-ui/employee/noc/response");

   console.log("getting data",formData)
    console.log(data, "data");
  };

  /* use newConfig instead of commonFields for local development in case needed */

  const configs = newConfig ? newConfig : newConfig;

  return (
    <FormComposerV2
      // heading={t("Application Heading")}
      label={t("Submit")}
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
