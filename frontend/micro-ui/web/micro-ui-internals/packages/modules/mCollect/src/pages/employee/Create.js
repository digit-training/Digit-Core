import { FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { createModifiedData } from "./modifyData";


const Create = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const tenantId = Digit.ULBService.getCurrentTenantId();
  console.log(tenantId);
  const onSubmit = (data) => {

    const modifiedData = createModifiedData(data);

    Digit.MCollectService.create(modifiedData, tenantId).then((result,err)=>{
      localStorage.setItem("mCollectResponse", JSON.stringify(result));
      let getdata = {...data , get: result }
      console.log(result);
      onSelect("", getdata, "", true);
      console.log("daaaa",getdata);
    })
    .catch((e) => {
    console.log("err");
   });
   history.push(
    "/digit-ui/employee/mCollect/response"
  );
  
    console.log(data, "data");
  };
  
  
  const configs = [
    {
      head: "Consumer Details",
      body: [
        {
          inline: true,
          label: "Consumer Name",
          isMandatory: true,
          type: "text",
          disable: false,
          populators: { name: "Challan.citizen.name", error: "Required" },
        },
        {
          label: "Mobile number",
          isMandatory: true,
          type: "mobileNumber",
          disable: false,
          populators: { name: "Challan.citizen.mobileNumber", error: "Required" },
        },
        {
          inline: true,
          label: "Door No",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "Challan.address.doorNo", error: "Required" },
        },
        {
          inline: true,
          label: "Building Name",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "Challan.address.buildingName", error: "Required" },
        },
        {
          inline: true,
          label: "Street Name",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "Challan.address.street", error: "Required" },
        },
        {
          inline: true,
          label: "PIN CODE",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "Challan.address.pincode", error: "Required" },
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
            optionsKey: "name",
            
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
          key: "Challan.amount[0].amount",
          type: "amount",
          label: "Election rally Fees",
          disable: false,
          populators: {
            name: "Challan.amount[0].amount",
            error: "Required",
            required: true,
          },
        },
        {
          isMandatory: true,
          key: "Challan.amount[1].amount",
          type: "amount",
          label: "Field Collection Fee",
          disable: false,
          populators: {
            name: "Challan.amount[1].amount",
            error: "Required",
            required: true,
          },
        },
        {
          isMandatory: true,
          key: "Challan.amount[2].amount",
          type: "amount",
          label: "CGST (if applicable)",
          disable: false,
          populators: {
            name: "Challan.amount[2].amount",
            error: "Required",
            required: true,
          },
        },
        {
          isMandatory: true,
          key: "Challan.amount[3].amount",
          type: "amount",
          label: "SGST (if applicable)",

          disable: false,
          populators: {
            name: "Challan.amount[3].amount",
            error: "Required",
            required: true,
          },
        },
      ],
    },
    {
      head: "Service Details",
      body: [
        // {
        //   isMandatory: true,
        //   key: "Challan.businessService",
        //   type: "radioordropdown",
        //   label: "Business Service",
        //   disable: false,
        //   populators: {
        //     name: "Challan.businessService",
        //     optionsKey: "businessService",
        //     error: "Required",
        //     required: true,
        //     mdmsConfig: {
        //       masterName: "TaxHeadMaster",
        //       moduleName: "BillingService",
        //       localePrefix: "",
        //     },
        //   },
        // },


        {
          isMandatory: true,
          key: "Challan.businessService",
          type: "radioordropdown",
          label: "Service Category",
          disable: false,
          populators: {
            name: "Challan.businessService",
            optionsKey: "code",
            error: "required",
            required: true,
         
            mdmsConfig: {
              masterName: "TaxHeadMaster",
              moduleName: "BillingService",
              localePrefix: "",
            },
          },
        },
        // {
        //   isMandatory: true,
        //   key: "Challan.consumerType",
        //   type: "radioordropdown",
        //   label: "Consumer Type",
        //   disable: false,
        //   populators: {
        //     name: "Challan.consumerType",
        //     optionsKey: "consumerType",
        //     error: "Required",
        //     required: true,
        //     mdmsConfig: {
        //       masterName: "TaxHeadMaster",
        //       moduleName: "BillingService",
        //       localePrefix: "",
        //     },
        //   },
        // },

     
  
         {
          isMandatory: true,
          key: "Challan.consumerType",
          type: "radioordropdown",
          label: "Service Type",
          disable: false,
          populators: {
            name: "Challan.consumerType",
            optionsKey: "service",
            error: "Required",
            required: true,
         
            mdmsConfig: {
              masterName: "TaxHeadMaster",
              moduleName: "BillingService",
              localePrefix: "",
            },
          },
        },
  
        {
          inline: true,
          label: "From Date",
          isMandatory: true,
          description: "Please enter a valid Date",
          type: "date",
          disable: false,
          populators: { name: "Challan.taxPeriodFrom", error: "Required" },
        },
        {
          inline: true,
          label: "To date",
          isMandatory: true,
          description: "Please enter a valid Date",
          type: "date",
          disable: false,
          populators: { name: "Challan.taxPeriodTo", error: "Required" },
        },
      ],
    },
    // Add more sections as needed
  ];



  return (
    <FormComposerV2
      label={t("Submit Bar")}
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
