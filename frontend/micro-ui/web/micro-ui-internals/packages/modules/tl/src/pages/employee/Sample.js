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
  const [structureType,setStructureType] = useState("");
  const [tradeCategory,setTradeCategory] = useState();
  const [tradeType,setTradeType] = useState("");

  // Trade Details
   const {isLoading:tradeIsFetching,data:tradeData} = Digit.Hooks.useCustomMDMS(
    tenantId,
    "TradeLicense",
    [{name:"TradeType"}],
    {
      select: (data) => {
          let tradeArr = data?.["TradeLicense"]?.["TradeType"];
          console.log(tradeArr);
          let newArr = tradeArr.map((data)=>{
            let arr = data.code.split('.');
            arr.push(data.uom);
            return arr;
          })
          // console.log(newArr);
          var trade = [];
          var tradeCategory = { };
          var tradeSubType = {};
          newArr.map((data)=>{
            tradeCategory[data[0]] = [];
            tradeSubType[data[1]] = [];
            trade.push({code:data[0],name:data[0],uom:data[3]});
          })
          console.log(trade);
          trade = [... new Set(trade)];

          newArr.map((data)=>{
            tradeCategory[data[0]].push({
              code:data[1],
              name:data[1]
            })
            tradeSubType[data[1]].push({
              code:data[2],
              name:data[2]
            })
          })
          return {
            trade,
            tradeCategory,
            tradeSubType
          };
          // return newArr;
      }
    }
  )

  // Structure Details
  const { isLoading:structureTypeDataFetching , data:structureTypeData } = Digit.Hooks.useCustomMDMS(
    tenantId,
    "common-masters",
    [{name:"StructureType"}],
    {
      select: (data) => {
        let arr = (data?.["common-masters"]?.["StructureType"]);
        
        // localStorage.setItem("structure_data",JSON.stringify(data));

        let newarr = arr.map((val)=>{
          return val.code.split('.');
        });

        let structure_type = {};
        // console.log(newarr);
        newarr.map((data)=>{
          structure_type[data[0]] = [];
        })

        newarr.map((data)=>{
          structure_type[data[0]].push({code:data[1],name:data[1]});
        })
        return structure_type;
      
      }
    }
  )
  
  // use hook to fetch the data and then configure the config
  const preProcessconfig = useMemo(
    () =>{ 
      // console.log("PRE-PROCESSING-MDMS-CONFIG")
      // console.log(structureTypeData);
      // if(!structureTypeDataFetching) console.log(structureTypeData[structureType]);
      console.log(tradeData);
      // console.log(tradeType);
      let val = Digit.Utils.preProcessMDMSConfig(t, newConfig, {
      updateDependent : [
        {
          key : 'structureSubType',
          value : [structureTypeData?.[structureType]]
        },
        {
          key : 'tradeCategory',
          value : [tradeData?.trade]
        },
        {
          key : 'tradeType',
          value : [tradeData?.tradeCategory?.[tradeCategory]]
        },
        {
          key : 'tradeSubType',
          value : [tradeData?.tradeSubType?.[tradeType]]
        },
      ]
    })
    return val;
  }
  ,[structureType,tradeCategory,tradeType]
);
  
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
                  tradeType: data?.tradeCategory.code+'.'+data?.tradeType.code+'.'+data?.tradeSubType.code,
                  uom: data?.tradeCategory.uom || "GROSSUNITS",
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
      };

    Digit.TLService.create(licenses, tenantId)
      .then((result, err) => {
        let getdata = { ...data, get: result };
        onSelect("", getdata, "", true);
        console.log("daaaa", getdata);
      })
      .catch((e) => {
        console.log(e);
      });

    history.push("/digit-ui/employee");

    console.log(JSON.stringify(data), "data");
  };

  const onFormValueChange = (setValue, formData, formState, reset, setError, clearErrors, trigger, getValues) => {

    if(formData){

      if(formData?.tradeCategory && formData?.tradeCategory?.code != tradeCategory){
        setTradeCategory(formData?.tradeCategory?.code);
      }
      if(formData?.structureType && formData.structureType.code.split('.')[0]!=structureType){
        setStructureType(formData.structureType.code.split('.')[0]);
      }
      if(formData?.tradeType && formData?.tradeType?.code != tradeType){
        setTradeType(formData?.tradeType?.code);
      }
    }
  }


  /* use newConfig instead of commonFields for local development in case needed */
  // const configs = preProcessconfig ? preProcessconfig : config ;

  return (
    <React.Fragment>
    {console.log("RENDERING")}
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
      fieldStyle={{ marginRight: 0 , width: "30%"}}
      />
    </React.Fragment>
  );
};

export default Create;
