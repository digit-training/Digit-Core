import { Loader, FormComposerV2  } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { serviceCodeList } from "./ServiceCode";


const sourceList = [
  {
    "source":"whatsapp"
  }
];
const actionList = [
  {
    "action":"APPLY"
  }
];

export const newConfig = [
  {
    head: "Complaint Details",
    body: [
      {
        inline: true,
        label: "Name",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "name", error: "Required", validation: { pattern: /^[\s\S]*$/ } },
      },

      {
        inline: true,
        label: "Mobile Number",
        isMandatory: true,
        type: "mobileNumber",
        disable: false,
        populators: { name: "mobileNumber", error: "sample error message", validation: { min: 5999999999, max: 9999999999 } },
      },

      {
        label: "Service Code",
        type: "dropdown",
        isMandatory: true,
        disable: false,
        key:"serviceCode",
        populators: {
            name: "Service Code",
            optionsKey: "serviceCode",
            options: serviceCodeList,
    
        },
      },
      {
        label: "Source",
        type: "dropdown",
        isMandatory: true,
        disable: false,
        key:"source",
        populators: {
            name: "Source",
            optionsKey: "source",
            options: sourceList,
    
        },
      },
      {
        inline: true,
        label: "Description",
        isMandatory: false,
        type: "text",
        disable: false,
        populators: { name: "description", error: "Required", validation: { pattern: /^[\s\S]*$/ } },
      },
      {
        inline: true,
        label: "Additional Detail",
        isMandatory: false,
        type: "text",
        disable: false,
        populators: { name: "additionalDetail", error: "Required", validation: { pattern: /^[\s\S]*$/ } },
      },
      
      
      {
        label: "Action",
        type: "dropdown",
        isMandatory: true,
        disable: false,
        key:"action",
        populators: {
            name: "Action",
            optionsKey: "action",
            options: actionList,
    
        },
      },
    ],
  },
  {
    head: "Address Details",
    body: [
        {
          inline: true,
          label: "Door Number",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "doorNo", error: "Required", validation: { pattern: /^[0-9]{1,10}$/ } },
        },
        {
          inline: true,
          label: "Plot Number",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "plotNo", error: "Required", validation: { pattern: /^[0-9]{1,10}$/ } },
        },
        {
          inline: true,
          label: "Landmark",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "landmark", error: "Required", validation: { pattern: /^[\s\S]*$/ } },
        },
        {
          inline: true,
          label: "City",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "city", error: "Required", validation: { pattern: /^[\s\S]*$/ } },
        },
        {
          inline: true,
          label: "District",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "district", error: "Required", validation: { pattern: /^[\s\S]*$/ } },
        },
        {
          inline: true,
          label: "Region",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "region", error: "Required", validation: { pattern: /^[\s\S]*$/ } },
        },
        {
          inline: true,
          label: "State",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "state", error: "Required", validation: { pattern: /^[\s\S]*$/ } },
        },
        {
          inline: true,
          label: "Country",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "country", error: "Required", validation: { pattern: /^[\s\S]*$/ } },
        },
        {
          inline: true,
          label: "Pin Code",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "pinCode", error: "Required", validation: { pattern: /^[0-9]{1,10}$/ } },
        },
        {
          inline: true,
          label: "Additional Details",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "additionalDetails", error: "Required", validation: { pattern: /^[\s\S]*$/ } },
        },
        {
          inline: true,
          label: "Building Name",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "buildingName", error: "Required", validation: { pattern: /^[\s\S]*$/ } },
        },
        {
          inline: true,
          label: "Street",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "street", error: "Required", validation: { pattern: /^[0-9]{1,10}$/ } },
        },
        {
          inline: true,
          label: "Locality",
          isMandatory: true,
          type: "text",
          disable: false,
          populators: { name: "code", error: "Required", validation: { pattern: /^[\s\S]*$/ } },
        },
        {
          inline: true,
          label: "geoLocation",
          isMandatory: true,
          type: "text",
          disable: false,
          populators: { name: "latitude", error: "Required", validation: { pattern: /^[0-9]{1,10}$/ } },
        },

    ]
  },
];

const Create = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();

  const onSubmit = (data) => {
    ///
    console.log(data, "data");

    let Users = 
      {
        service: {
          address:{
            doorNo: data?.doorNo,
            plotNo: data?.plotNo,
            landmark: data?.landmark,
            city: data?.city,
            district: data?.district,
            region: data?.region,
            state: data?.state,
            country: data?.country,
            pinCode: data?.pinCode,
            buildingName: data?.buildingName,
            street: data?.street,
            locality:{
              code:data?.code,
            },
            geoLocation:{
              latitude:data?.latitude,
            },
          },
          citizen:{
            mobileNumber: data?.mobileNumber,
            name: data?.name,
          },
          
          source: data?.source?.source,
          additionalDetail: data?.additionalDetail,
          comments: data?.comments,
          description: data?.description,
          serviceCode: data?.serviceCode?.serviceCode,
          tenantId: tenantId,
        },
        workflow:{
          action: data?.action?.action,
        },
        
      }
    Digit.PGRService.create(Users, tenantId).then((result,err)=>{
      let getdata = {...data , get: result }
      console.log("daaaa",getdata);
    })
    .catch((e) => {
      console.log("err");
     });
     history.push("/digit-ui/employee/ws/response");

    console.log("getting data",Users)
  };

  const configs = newConfig ? newConfig : newConfig;

  return (
    <FormComposerV2
      label={t("Submit Bar")}
      config={configs.map((config) => {
        return {
          ...config,
          // body: config.body.filter((a) => !a.hideInEmployee),
        };
      })}
      defaultValues={{}}
      onSubmit={onSubmit}
      fieldStyle={{ marginRight: 0, width: '30%'}}
    />
  );
};

export default Create;