import { FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { newConfig } from "../../configs/create/config";

const configs = newConfig ? newConfig : newConfig;
const Create = () => {
  var Digit = window.Digit || {};
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();

  function transformData(inputData) {
    return {
      Property: {
        tenantId: tenantId || null,
        status: "ACTIVE" || null,
        channel: "SYSTEM" || null,
        source: "MUNICIPAL_RECORDS" || null,
        address: {
          tenantId: tenantId || null,
          locality: {
            code: inputData.locality[0].code,
          },
        },
        propertyType: inputData.PropertyType.code || null,
        ownershipCategory: inputData.TypeOfOwner.code || null,
        noOfFloors: 1 || null,
        owners: [
          {
            name: inputData.name || null,
            gender: inputData.genders.code || null,
            mobileNumber: inputData.mobileNumber || null,
            fatherOrHusbandName: inputData.fatherOrHusbandName || null,
            isPRimaryOwner: true,
            ownerShipPercentage: 100,
            ownerType: "NONE",
            relationship: inputData.Relationship.code,
          },
        ],
        creationReason: "CREATE" || null,
        landArea: parseInt(inputData.landArea) || null,
        units: null,
      },
    };
  }

  const onSubmit = (data) => {
    ///
    console.log(data, "data");
    let transformedData = transformData(data);
    console.log(transformedData);

    Digit.PTService.create(transformedData, tenantId)
      .then((result, err) => {
        let getdata = { ...transformedData, get: result };
        console.log("daaaa", getdata);
        history.push({
          pathname: "/digit-ui/employee/pt/response",
          state: { responseData: getdata }, // Pass the responseData to the state
        });
      })
      .catch((e) => {
        console.log("err", e);
      });

    // history.push("/digit-ui/employee/pt/response");
  };
  return (
    <FormComposerV2
      heading={t("Create Property(on new application)")}
      label={t("Submit")}
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
