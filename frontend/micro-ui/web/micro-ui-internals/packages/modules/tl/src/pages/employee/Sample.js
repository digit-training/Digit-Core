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
  )

  // Structure Details
  const { isLoading:structureTypeDataFetching , data:structureTypeData } = Digit.Hooks.useCustomMDMS(
    tenantId,
    "common-masters",
    [{name:"StructureType"}],
    {
      select: (data) => {
        let arr = (data?.["common-masters"]?.["StructureType"]);
        
        let newarr = arr.map((val)=>{
          return val.code.split('.');
        });

        let formattedArr =  newarr.map((data)=>{
          return {code:data[0],name:data[1]};
        })

        return formattedArr;
      
      }
    }
  )

  // use hook to fetch the data and then configure the config
  const preProcessconfig = useMemo(
    () => Digit.Utils.preProcessMDMSConfig(t, newConfig, {
      updateDependent : [
        {
          key : 'structureSubType',
          value : [structureTypeData]
        },
      ]
    }),[structureTypeData]);

  
  const onSubmit = (data) => {
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
                  uom: data?.uom,
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


  /* use newConfig instead of commonFields for local development in case needed */
  // const configs = preProcessconfig ? preProcessconfig : config ;

  return (
    <React.Fragment>
    {console.log(preProcessconfig)}
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
      // onChange = {onChange}
      onSubmit={onSubmit}
      fieldStyle={{ marginRight: 0 }}
      />
      </React.Fragment>
  );
};

export default Create;
