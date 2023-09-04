import { FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { createModifiedData } from "./modifyData";


const Create = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const [service, setService] = useState("");


  const { isLoading: isFetching, data: data1 } = Digit.Hooks.useCustomMDMS(
    tenantId,
    "BillingService",
    [{ name: "TaxHeadMaster" }],
    { // all configs supported by the usequery 
      select: (data) => {

        var arr = data?.BillingService?.TaxHeadMaster.map((data) => {
          return data?.service;
        })

        arr = [... new Set(arr)];
        var categoryObj = {};
        // console.log(arr);
        var newArr = arr.map((data) => {
          categoryObj[data] = [];
          return { code: data, name: data };
        })
        // console.log(data);
        data?.BillingService?.TaxHeadMaster.map((e) => {
          // console.log(e);
          categoryObj[e?.service].push({ code: e?.category, name: e?.category });
        })
        console.log(categoryObj);
        // configs[1]['body'][1].populators.options = newArr;
        // console.log( JSON.stringify({options:[...newArr]}) );
        // console.log(typeof (configs[1]['body'][0].populators.options) )
        // console.log(configs[1]['body'][1].populators.options);
        // console.log(configs);
        // console.log(newArr);
        return { newArr, categoryObj };
      }
    });




  const onSubmit = async (data) => {

    const modifiedData = createModifiedData(data);
    var getData;
    await Digit.MCollectService.create(modifiedData, tenantId).then((result, err) => {
      getData = { ...data, get: result }
      // console.log(result);
      // onSelect("", getdata, "", true);
      console.log("daaaa", getdata);
    })
      .catch((e) => {
        console.log("err");
      });
    history.push({
      pathname: "/digit-ui/employee/mCollect/response",
      state: { responseData: getData }
    });


    console.log(data, "data");
  };


  const onFormValueChange = (setValue, formData, formState, reset, setError, clearErrors, trigger, getValues) => {
    // console.log(formData)
    // console.log(formData.Challan?.businessService?.code)
    if (formData) {
      if (formData.Challan?.businessService?.code) {
        setService(formData.Challan?.businessService?.code);
      }

    }
  }

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
          populators: { name: "Challan.citizen.name", error: "Required" 
       
        },
        },
        {
          label: "Mobile number",
          isMandatory: true,
          type: "mobileNumber",
          disable: false,
          populators: { name: "Challan.citizen.mobileNumber", error: "Required",
          validation: { maxlength: 10 , minlength: 10 , min: 900000000 ,max: 9999999999 }
         },
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

        {
          isMandatory: true,
          name: "Challan.businessService",

          key: "Challan.businessService",
          type: "radioordropdown",
          label: "Service Type",
          disable: false,


          populators: {
            optionsKey: "name",
            error: "Required",
            required: true,
            options: data1?.newArr
            // mdmsConfig: {
            //   masterName: "TaxHeadMaster",
            //   moduleName: "BillingService",
            //   localePrefix: "",
            // },
          },
        },
        {
          isMandatory: true,

          type: "radioordropdown",
          key: "Challan.consumerType",
          label: "Service Category",
          disable: false,
          preProcess: {
            updateDependent: ["populators.options"]
          },
          populators: {
            name: "Challan.consumerType",
            optionsKey: "code",
            error: "required",
            required: true,
            options: []
            // mdmsConfig: {
            //   masterName: "TaxHeadMaster",
            //   moduleName: "BillingService",
            //   localePrefix: "",
            // },
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

  ];





  const preProcessconfig = useMemo(
    () => {
      // console.log("PRE-PROCESSING-MDMS-CONFIG")
      // console.log(structureTypeData);
      // if(!structureTypeDataFetching) console.log(structureTypeData[structureType]);
      console.log(service);
      let val = Digit.Utils.preProcessMDMSConfig(t, configs, {
        updateDependent: [
          {
            key: 'Challan.consumerType',
            value: [data1?.categoryObj?.[service]]
          },

        ]
      })
      // console.log(val);
      return val;
    }
    , [service]
  );

  return (

    <FormComposerV2
      label={t("Submit Bar")}
      config={configs}


      defaultValues={{}}
      onFormValueChange={onFormValueChange}
      onSubmit={onSubmit}
      fieldStyle={{ marginRight: 0, width: "30%" }}
    />
  );
};

export default Create;
