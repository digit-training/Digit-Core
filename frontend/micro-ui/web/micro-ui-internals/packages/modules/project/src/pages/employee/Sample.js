import { Loader, FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { compact } from "lodash";


export const newConfig = [
  {
    head: "Create New Project",
    // subHead: "Supporting Details",
    body: [
      {
        inline: true,
        label: "Project Sancation Date",
        isMandatory: false,
        // description: "Please enter a valid Date of birth",
        type: "date",
        disable: false,
        preProcess: {
          "updateDependent": ["populators.validation.max"]
        },
        populators: { name: "project santaction date", error: "Required", validation: { max: new Date().toISOString().split("T")[0] } },
      },
      {
        inline: true,
        label: "Project Name",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: {
          name: "name",
          error: "Please Enter a valid Project Name",
          validation: {
            pattern: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;""'']{1,50}$/i,
            maxlength: 140,
            minlength: 2
          }
        }
      },
      {
        inline: true,
        label: "Project Description",
        isMandatory: true,
        // description: "project details",
        type: "textarea",
        disable: false,
        populators: { name: "description", error: "Please Enter a valid Project Description", validation: { pattern: /^[A-Za-z]+$/i } },
      }
    ],
  },
  {
    head: "Project Details",
    body: [
      {
        label: "File Reference Number",
        isMandatory: false,
        // description: "Additional Details if any",
        key: "fileReferenceNumber",
        type: "text",
        disable: false,
        populators: { name: "fileReferenceNumber", error: "Please enter a valid Letter Reference", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        isMandatory: true,
        key: "projectTypes",
        type: "radioordropdown",
        label: "Project Type",
        disable: false,
        populators: {
          name: "projectTypes",
          optionsKey: "name",
          error: "This field is mandatory",
          required: true,
          mdmsConfig: {
            masterName: "ProjectType",
            moduleName: "works",
            localePrefix: "COMMON_MASTERS",
          },
        },
      },
      {
        isMandatory: false,
        key: "targetDemography",
        type: "radioordropdown",
        label: "Target Demography",
        disable: false,
        populators: {
          name: "targetDemography",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          mdmsConfig: {
            masterName: "TargetDemography",
            moduleName: "works",
            localePrefix: "COMMON_MASTERS",
          },
        },
      },
      {
        label: "Estimated Cost (₹)",
        isMandatory: false,
        // description: "Additional Details if any",
        key: "estimatedCost",
        type: "amount",
        disable: false,
        populators: {
          name: "estimatedCost", error: "Please Enter a valid Estimated Cost", validation: {
            pattern: "^[1-9]\\d*(\\.\\d+)?$",
            maxlength: 16,
            step: "0.01",
            min: 0,
            max: 5000000
          }
        },
      }
    ],
  },
  {
    head: "Location Details",
    body: [
      // {
      //   type: "component",
      //   component: "SelectGeoLocation",
      //   withoutLabel: true,
      //   key: "noSubProject_geoLocation"
      // },
      {
        isMandatory: false,
        key: "ulb",
        type: "radioordropdown",
        label: "ULB",
        disable: true,
        populators: {
          name: "ulb",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          options: [
            { "name": "City A" }
          ],
        },
      },
      // {
      //   label: "Ward",
      //   type: "locationdropdown",
      //   key: "ward",
      //   isMandatory: true,
      //   disable: false,
      //   populators: {
      //     name: "Ward",
      //     type: "ward",
      //     optionsKey: "name",
      //     error: "This field is mandatory",
      //     allowMultiSelect: false,
      //     // mdmsConfig: {
      //     //   masterName: "TenantBoundary",
      //     //   moduleName: "egov-location",
      //     //   localePrefix: "PT",
      //     // },
      //   },
      // },
      {
        label: "Ward",
        type: "locationdropdown",
        isMandatory: true,
        disable: false,
        populators: {
          name: "ward",
          type: "ward",
          optionsKey: "i18nKey",
          error: "This field is mandatory",
          allowMultiSelect: false,
          optionsCustomStyle: {
            top: "2.3rem"
          }
        }
      },
      {
        isMandatory: false,
        key: "locality",
        type: "radioordropdown",
        label: "Locality",
        disable: false,
        populators: {
          name: "locality",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          mdmsConfig: {
            masterName: "TenantBoundary",
            moduleName: "egov-location",
            localePrefix: "COMMON_MASTERS",
          },
        },
      },
    ],
  },

];

const Create = () => {
  const defaultValues = {
    "ulb": { "name": "City A" },
  }
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();

  // const onSubmit = (data) => {
  //   console.log(data, "data");
  // }

  const onSubmit = (data) => {
    console.log(data);
    const projectData = {
      Projects: [
        {
          tenantId: "pg.citya",
          name: data?.name,
          projectType: data?.projectTypes?.code,
          projectSubType: "",
          department: "",
          description: data?.description,
          referenceID: "SOR/2222",
          documents: [
            {
              documentType: "PROJECT_PROPOSAL",
              fileStoreId: "5061b98b-9614-4afc-830d-49d65a1430e2",
              documentUid: "5061b98b-9614-4afc-830d-49d65a1430e2",
              status: "ACTIVE",
              key: "noSubProject_doc_project_proposal",
              additionalDetails: {
                fileName: "workOrder-WO_2023-24_000596.pdf",
                otherCategoryName: "",
              },
              tenantId: "pg.citya",
            },
            {
              documentType: "FINALIZED_WORKLIST",
              fileStoreId: "10ad5f19-ad8a-4f35-bea2-c5a0cbfb062f",
              documentUid: "10ad5f19-ad8a-4f35-bea2-c5a0cbfb062f",
              status: "ACTIVE",
              key: "noSubProject_doc_finalized_worklist",
              additionalDetails: {
                fileName: "workOrder-WO_2023-24_000596.pdf",
                otherCategoryName: "",
              },
              tenantId: "pg.citya",
            },
          ],
          address: {
            tenantId: "pg.citya",
            latitude: 13.341631978048207,
            longitude: 80.19601463828127,
            city: "pg.citya",
            boundary: data?.ward[0]?.code,
            boundaryType: "Ward",
          },
          isTaskEnabled: false,
          parent: "",
          additionalDetails: {
            estimatedCostInRs: data?.estimatedCost,
            dateOfProposal: 1683570599000,
            locality: "SUN01",
            creator: "Jagankumar",
            targetDemography: data?.targetDemography?.code,
          },
          rowVersion: 0,
        },
      ],
    };
    var Digit = window.Digit || {};
    Digit.ProjectService.create(projectData, projectData.Projects[0].tenantId)
      .then((result) => {
        const updatedData = { ...data, get: result };
        onSelect("", updatedData, "", true);
        console.log("Updated data:", updatedData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    history.push("/works-ui/citizen/Project/response");
    console.log("Sending data:", projectData.Projects);
  };



  const configs = newConfig ? newConfig : newConfig;

  return (
    <div>
      <FormComposerV2
        label={t("Create New Project")}
        // description={"Description"}
        // text={"Sample Text if required"}
        config={configs.map((config) => {
          return {
            ...config,
            body: config.body.filter((a) => !a.hideInEmployee),
          };
        })}
        // defaultValues={{}}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        fieldStyle={{ marginRight: 0 }}
      />
    </div>
  );
};

export default Create;