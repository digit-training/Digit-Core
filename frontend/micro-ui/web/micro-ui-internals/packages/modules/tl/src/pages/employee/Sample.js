import { Loader, FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React, { useEffect, useState,useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { newConfig } from "../../configs/createConfig";
import { CreateWageSeekerConfig } from "../../configs/formConfig";
// var newConfig = CreateWageSeekerConfig;
// ---------------------------------------------- MAIN CREATE FORM ----------------------------------------------

const Create = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();
  var config = newConfig;
  const [structureType,setStructureType] = useState();
  const [tradeType,setTradeType] = useState();

  // Trade Details
   Digit.Hooks.useCustomMDMS(
    tenantId,
    "TradeLicense",
    [{name:"TradeType"}],
    {
      select: (data) => {
          // console.log(data?.["TradeLicense"]?.["TradeType"][0]);
          let tradeArr = data?.["TradeLicense"]?.["TradeType"];
          let newArr = tradeArr.map((data)=>{
            return data.code.split('.');
          })
          // console.log(newArr);
          return tradeArr;
      }
    }
    ,[tradeType]
  )

  // Structure Details
  const { isLoading:structureTypeDataFetching , data:structureTypeData } = Digit.Hooks.useCustomMDMS(
    tenantId,
    "common-masters",
    [{name:"StructureType"}],
    {
      select: (data) => {
        let arr = (data?.["common-masters"]?.["StructureType"]);
        
        localStorage.setItem("structure_data",JSON.stringify(data));

        let newarr = arr.map((val)=>{
          return val.code.split('.')[0];
        });
        
        newarr = [...new Set(newarr)]; // only unique elements
        let structure_type =  newarr.map((data)=>{
          return {code:data,name:data};
        })
        // console.log(structure_type);
        return structure_type;
      
      }
    }
  )

  // use hook to fetch the data and then configure the config
  const preProcessconfig = useMemo(
    () => Digit.Utils.preProcessMDMSConfig(t, newConfig, {
      updateDependent : [
        {
          key : 'structureSubType',
          value : []
        },
      ]
    }),[structureTypeData]);

  
  const onSubmit = (data) => {
    console.log(data);
    let licenses = 
      {
        Licenses: [
          {
            action: "INITIATE",
            applicationType: "NEW",
            workflowCode: "NewTL",
            commencementDate: 1692296999000,
            financialYear: data?.financialYear.code,
            licenseType: "PERMANENT",
            tenantId: "pb.amritsar",
            tradeName: data?.tradeName,
            wfDocuments: [],
            tradeLicenseDetail: {
              channel: "COUNTER",
              additionalDetail: {},
              tradeUnits: [
                {
                  tradeType: data?.tradeType.code,
                  uom: data?.tradeType.uom,
                  uomValue: 12,
                },
              ],
              owners: [
                {
                  dob: null,
                  fatherOrHusbandName: "GG",
                  gender: "MALE",
                  mobileNumber: parseInt(data?.mobileNumber),
                  name: data?.ownerName,
                  permanentAddress: data?.address,
                  relationship: "FATHER",
                },
              ],
              address: {
                city: "pb.amritsar",
                locality: {
                  code: "SUN04",
                },
              },
              structureType: data?.structureType.code,
              subOwnerShipCategory: "INDIVIDUAL.SINGLEOWNER",
            },
          },
        ],
      }
    ;

    Digit.TLService.create(licenses, tenantId)
      .then((result, err) => {
        let getdata = { ...data, get: result };
        onSelect("", getdata, "", true);
        console.log("daaaa", getdata);
      })
      .catch((e) => {
        console.log(e);
      });

    history.push("/digit-ui/citizen/tl/response");

    console.log(JSON.stringify(data), "data");
  };

  const onFormValueChange = (setValue, formData, formState, reset, setError, clearErrors, trigger, getValues) => {
    
    if(formData){
      // console.log(formData);

      if(formData?.tradeType){
        setTradeType(tradeType);
      }
      if(formData?.structureType){
        setStructureType(formData.structureType.code.split('.')[0]);
        // console.log(structureType);
        // based on the Structure Type change the options of Structure Sub Type
      }
    }
  }


  /* use newConfig instead of commonFields for local development in case needed */
  // const configs = preProcessconfig ? preProcessconfig : config ;

  return (
    <React.Fragment>
    {/* {console.log(preProcessconfig)} */}
    <FormComposerV2
      label={t("Submit")}
      description={"Trade Details"}
      config={preProcessconfig}
      // config={configs.map((config) => {
      //   return {
      //     ...config,
      //     body: config.body.filter((a) => !a.hideInEmployee),
      //   };
      // })}
      onSubmit={onSubmit}
      onFormValueChange = {onFormValueChange}
      fieldStyle={{ marginRight: 0 }}
      />
      </React.Fragment>
  );
};

export default Create;



// structureType : filter only Movable and Immovable