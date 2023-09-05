import { Loader, FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { newConfig1 } from "../../configs/createFirenocConfig";
import { newConfig2 } from "../../configs/newCreateFireNocConfig";
import useCustomMDMS from "../../../../../libraries/src/hooks/useMDMS";
import { get } from "lodash";

const Create = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();
  const [selectedBuildingType, setSelectedBuildingType] = useState("");

  const { isLoading, data: filteredData } = Digit.Hooks.useCustomMDMS(
    tenantId,
    "firenoc",
    [{ name: "BuildingType", filter: "[?(@.active == true)]" }, { name: "FireStations" }],
    {
      // all configs supported by the usequery
      select: (data) => {
        return data;
      },
    }
  );
  console.log(filteredData, " ffffdddddddddddddddddddd");
  // console.log(demoOptions, "demooptions");
  // console.log(something, "data")
  function getop1(data) {
    const buildingTypes = data?.firenoc?.BuildingType;
    if (buildingTypes) {
      const op1Array = [];

      // Iterate through the building types and extract unique groups
      buildingTypes.forEach((type) => {
        const groupCode = type.code.split(".")[0]; // Extract the group code
        const groupExists = op1Array.some((item) => item.code === groupCode);

        if (!groupExists) {
          // Add the group to the op1Array if it doesn't exist
          op1Array.push({
            code: groupCode,
            name: groupCode,
          });
        }
      });
      console.log(op1Array, " ooooooooooooooooo");
      return op1Array;
    }
    return [];
  }
  function getop2(data) {
    const btype = selectedBuildingType; // Assuming you have selectedBuildingType defined

    // Check if the btype exists in the data object
    if (data?.firenoc && data?.firenoc?.BuildingType) {
      const buildingTypeArray = data.firenoc.BuildingType;
      console.log(data?.firenoc);
      console.log(data?.firenoc?.BuildingType);
      console.log(btype, "btype");

      // Filter elements based on the condition
      const filteredElements = buildingTypeArray.filter((element) => {
        console.log(element.code.startsWith("GROUP" + "."));
        return element.code.startsWith(btype + ".");
      });

      // Create the desired array of objects
      const resultArray = filteredElements.map((element) => ({
        code: element.code.split(".")[1],
        // name: element.code.split(".")[1],
        name: element.code, // You can change this as needed
      }));
      console.log(resultArray);
      return resultArray;
    } else {
      // Handle the case where data is missing or doesn't have the expected structure
      return [];
    }
  }

  var op1 = getop1(filteredData);
  var op2 = getop2(filteredData);

  const convertToDependenyConfig = (config = []) => {
    const newConfig = {
      form: [...config],
    };
    return newConfig;
  };

  const demoConfig = useMemo(
    () =>
      Digit.Utils.preProcessMDMSConfig(t, convertToDependenyConfig(newConfig2), {
        updateDependent: [
          {
            key: "usageType",
            value: [op1],
          },
          {
            key: "subUsageType",
            value: [op2],
          },
        ],
      }),
    [filteredData, op2]
  );
  
  const onFormValueChange = (setValue, formData) => {
    console.log(formData, " ffffffffffffffffff");
    if (formData.usageType) {
      const selectedBuildingKey = formData?.usageType?.code;
      setSelectedBuildingType(selectedBuildingKey);
      console.log(selectedBuildingType);
      const previouslySelectedBuIlding = localStorage.getItem("selectedBuilding");
      if (previouslySelectedBuIlding !== selectedBuildingKey) {
        setValue("subUsageType", "");
      }
      localStorage.setItem("selectedBuilding", selectedBuildingKey);
    }
  };
  const onSubmit = (data) => {
    ///

    let formData = {
      FireNOCs: [
        {
          fireNOCDetails: {
            noOfBuildings: "SINGLE",
            fireNOCType: "NEW",
            buildings: [
              {
                name: data?.nameofbuilding,
                usageTypeMajor: data?.usageType?.name,
                usageType: data?.subUsageType?.name,
                uomsMap: {
                  NO_OF_FLOORS: data?.floors?.name,
                  NO_OF_BASEMENTS: data?.basement?.name,
                  PLOT_SIZE: data?.plotsize,
                  BUILTUP_AREA: data?.builtuparea,
                  HEIGHT_OF_BUILDING: data?.height,
                },
                uoms: [
                  {
                    code: "HEIGHT_OF_BUILDING",
                    value: 11,
                    isActiveUom: true,
                    active: true,
                  },
                  {
                    code: "NO_OF_FLOORS",
                    value: 1,
                    isActiveUom: false,
                    active: true,
                  },
                  {
                    code: "NO_OF_BASEMENTS",
                    value: 0,
                    isActiveUom: false,
                    active: true,
                  },
                  {
                    code: "PLOT_SIZE",
                    value: 2222,
                    isActiveUom: false,
                    active: true,
                  },
                  {
                    code: "BUILTUP_AREA",
                    value: 222,
                    isActiveUom: false,
                    active: true,
                  },
                ],
                applicationDocuments: [],
              },
            ],
            propertyDetails: {
              address: {
                city: "pb.amritsar",
                doorNo: "1",
                buildingName: data?.buildingname,
                street: data?.streetname,
                locality: {
                  code: "SUN04",
                },
              },
            },
            firestationId: "FS_AMRITSAR_01",
            applicantDetails: {
              ownerShipMajorType: "INDIVIDUAL",
              ownerShipType: "INDIVIDUAL.SINGLEOWNER",
              owners: [
                {
                  mobileNumber: data?.phNumber,
                  name: data?.name,
                  correspondenceAddress: data?.corresaddress,
                  gender: data?.genders?.code,
                  dob: 942258599000,
                  relationship: data?.relationships?.code,
                  fatherOrHusbandName: data?.fathername,
                  ownerType: "NONE",
                },
              ],
              additionalDetail: {
                documents: [],
              },
            },
            action: "INITIATE",
            additionalDetail: {
              documents: [],
            },
            channel: "COUNTER",
            financialYear: "2019-20",
          },
          tenantId: "pb.amritsar",
        },
      ],
    };
    debugger;
    Digit.FireNOCService.create(formData, tenantId)
      .then((result, err) => {
        let getdata = { ...formData, get: result };
        // onSelect("", getdata, "", true);
        console.log("daaaa", getdata);
        console.log(result);
        history.push({
          pathname: "/digit-ui/employee/noc/response",
          state: {responseData : getdata}
        });
      })
      .catch((err) => {
        let getdata = { ...formData, get: err };
        console.log("err");
        history.push({
          pathname: "/digit-ui/employee/noc/response",
          state: {responseData : getdata}
        });
      });

    console.log("getting data", formData);
    console.log(data, "data");
  };

  /* use newConfig instead of commonFields for local development in case needed */

  // const configs = newConfig1(op1, op2);
  const configs = newConfig2;

  return (
    <FormComposerV2
      // heading={t("Application Heading")}
      label={t("Submit")}
      // description={"Description"}
      // text={"Sample Text if required"}
      config={demoConfig.form}
      // config = {configs}
      defaultValues={{}}
      onSubmit={onSubmit}
      onFormValueChange={onFormValueChange}
      fieldStyle={{ marginRight: 0, width: "30%" }}
    />
  );
};

export default Create;
