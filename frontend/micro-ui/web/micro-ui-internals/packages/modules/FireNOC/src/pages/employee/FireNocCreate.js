import { Loader, FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { newConfig1 } from "../../configs/createFirenocConfig";
import useCustomMDMS from "../../../../../libraries/src/hooks/useMDMS";


const Create = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();
  const [selectedBuildingType, setSelectedBuildingType] = useState("");

  let demoOptions = Digit.Hooks.useCustomMDMS(
    tenantId,
    "firenoc",
    [{ name: "BuildingType", filter: "[?(@.active == true)]" }, { name: "FireStations" }],
    {
      // all configs supported by the usequery
      default: (data) => {
        format;
        return formattedData;
      },
    }
  );
  console.log(demoOptions.data, "demooptions");
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

      return op1Array;
    }
    return [];
  }
  function getop2(data) {
    const btype = selectedBuildingType; // Assuming you have selectedBuildingType defined

    // Check if the btype exists in the data object
    if (data?.firenoc && data?.firenoc?.BuildingType) {
      const buildingTypeArray = data.firenoc.BuildingType;

      // Filter elements based on the condition
      const filteredElements = buildingTypeArray.filter((element) => {
        return element.code.startsWith(btype + ".");
      });

      // Create the desired array of objects
      const resultArray = filteredElements.map((element) => ({
        code: element.code.split(".")[1],
        // name: element.code.split(".")[1],
        name: element.code, // You can change this as needed
      }));

      return resultArray;
    } else {
      // Handle the case where data is missing or doesn't have the expected structure
      return [];
    }
  }

  var op1 = getop1(demoOptions.data);
  var op2 = getop2(demoOptions.data);
  // const demoConfig = useMemo(
  //   () => Digit.Utils.preProcessMDMSConfig(t, newConfig1, {
  //     updateDependent : [
  //       {
  //         key : 'noSubProject_ward',
  //         value : [wardsAndLocalities?.wards]
  //       }
  //     ]
  //   }),
  //   [ wardsAndLocalities]);
  const onFormValueChange = (setValue, formData) => {
    console.log(formData, " ffffffffffffffffff");
    if (formData.usageType) {
      const selectedBuildingKey = formData?.usageType?.code;
      setSelectedBuildingType(selectedBuildingKey);
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

    Digit.FireNOCService.create(formData, tenantId)
      .then((result, err) => {
        let getdata = { ...data, get: result };
        onSelect("", getdata, "", true);
        console.log("daaaa", getdata);
        console.log(result);
      })
      .catch((e) => {
        console.log("err");
      });

    history.push("/digit-ui/employee/noc/response");

    console.log("getting data", formData);
    console.log(data, "data");
  };

  /* use newConfig instead of commonFields for local development in case needed */

  const configs = newConfig1(op1, op2);

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
      onFormValueChange={onFormValueChange}
      fieldStyle={{ marginRight: 0, width: "30%" }}
    />
  );
};

export default Create;
