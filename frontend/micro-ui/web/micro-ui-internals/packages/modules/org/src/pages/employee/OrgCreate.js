import { Loader, FormComposerV2, Header } from "@egovernments/digit-ui-react-components";
import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { configs } from "../../configs/createOrgConfig";


const Create = () => {
  var Digit = window.Digit || {};
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const defaultValues = {
    "locDetails_city": { "i18nKey": "City A" },
  }
  const [selectedWard, setSelectedWard] = useState('default');
  const headerLocale = Digit.Utils.locale.getTransformedLocale(tenantId)
  const { t } = useTranslation();
  const history = useHistory();

  const { isLoading: locationDataFetching, data: wardsAndLocalities } = Digit.Hooks.useLocation(
    tenantId, 'Ward',
    {
      select: (data) => {
        var wards = []
        var localities = {}
        data?.TenantBoundary[0]?.boundary.forEach((item) => {
          localities[item?.code] = item?.children.map(item => ({ code: item.code, name: item.name, i18nKey: `${headerLocale}_ADMIN_${item?.code}`, label: item?.label }))
          wards.push({ code: item.code, name: item.name, i18nKey: `${headerLocale}_ADMIN_${item?.code}` })
        });
        return {
          wards, localities
        }
      }
    });

  const newLocalityOptions = wardsAndLocalities?.localities[selectedWard];

  const stateTenant = Digit.ULBService.getStateId();


  // const { isLoading: orgDataFetching, data: orgData } = Digit.Hooks.useCustomMDMS(
  //   stateTenant,
  //   "common-masters",
  //   [{ "name": "OrgType" }, { name: "OrgFunctionCategory" }],
  //   {
  //     select: (data) => {
  //       let orgTypes = []
  //       let orgSubTypes = {}
  //       let orgFunCategories = {}
  //       data?.["common-masters"]?.OrgType?.forEach(item => {
  //         if (!item?.active) return
  //         const orgType = item?.code?.split('.')?.[0]
  //         const orgSubType = item?.code?.split('.')?.[1]
  //         if (!orgTypes.includes(orgType)) orgTypes.push(orgType)
  //         if (orgSubTypes[orgType]) {
  //           orgSubTypes[orgType].push({ code: orgSubType, name: `COMMON_MASTERS_SUBORG_${orgSubType}` })
  //         } else {
  //           orgSubTypes[orgType] = [{ code: orgSubType, name: `COMMON_MASTERS_SUBORG_${orgSubType}` }]
  //         }
  //       })
  //       data?.["common-masters"]?.OrgFunctionCategory?.forEach(item => {
  //         if (!item?.active) return
  //         const orgType = item?.code?.split('.')?.[0]
  //         const orgFunCategory = item?.code?.split('.')?.[1]
  //         if (orgFunCategories[orgType]) {
  //           orgFunCategories[orgType].push({ code: orgFunCategory, name: `COMMON_MASTERS_FUNCATEGORY_${orgFunCategory}` })
  //         } else {
  //           orgFunCategories[orgType] = [{ code: orgFunCategory, name: `COMMON_MASTERS_FUNCATEGORY_${orgFunCategory}` }]
  //         }
  //       })
  //       orgTypes = orgTypes.map(item => ({ code: item, name: `COMMON_MASTERS_ORG_${item}` }))
  //       return {
  //         orgTypes,
  //         orgSubTypes,
  //         orgFunCategories
  //       }
  //     }
  //   }
  // );
  // const filteredOrgSubTypes = orgData?.orgSubTypes[selectedOrg]
  // const filteredOrgFunCategories = orgData?.orgFunCategories[selectedOrg]
  const convertToDependenyConfig = (config = []) => {
    const newConfig = {
      form: [...config],
    };
    return newConfig;
  };
  const config = useMemo(
    () => Digit.Utils.preProcessMDMSConfig(t, convertToDependenyConfig(configs), {
      updateDependent: [
        {
          key: "basicDetails_dateOfIncorporation",
          value: [new Date().toISOString().split("T")[0]]
        },
        {
          key: "funDetails_validFrom",
          value: [new Date().toISOString().split("T")[0]]
        },
        {
          key: 'locDetails_ward',
          value: [wardsAndLocalities?.wards]
        },
        {
          key: 'locDetails_locality',
          value: [newLocalityOptions]
        }
      ]
    }),
    [wardsAndLocalities, newLocalityOptions]);


  const onSubmit = (input_data) => {
    var transformed_data = {
      "organisations": [{
        "tenantId": Digit.ULBService.getCurrentTenantId(),
        "name": input_data["basicDetails_orgName"],
        "applicationStatus": "ACTIVE",
        "dateOfIncorporation": Date.parse(input_data["basicDetails_dateOfIncorporation"]),
        "orgAddress": [
          {
            "tenantId": Digit.ULBService.getCurrentTenantId(),
            "city": input_data["locDetails_city"]["i18nKey"],
            "state": "Punjab",
            "country": "India",
            "pincode": "",
            "street": input_data["locDetails_streetName"] || "",
            "doorNo": input_data["locDetails_houseName"],
            "boundaryType": "WARD",
            "locality": input_data["locDetails_locality"]["name"] || "",
            "boundaryCode": input_data["locDetails_ward"]["code"] || "",
            "geoLocation": {
              "latitude": 0,
              "longitude": 0,
              "additionalDetails": {
                "geoLocation": "test-additionalDetails"
              }
            }
          }
        ],
        "contactDetails": [
          {
            "contactName": input_data["contactDetails_name"],
            "contactMobileNumber": input_data["contactDetails_mobile"],
            "contactEmail": input_data["contactDetails_email"]
          }
        ],
        "functions": [
          {
            "validFrom": Date.parse(input_data["funDetails_validFrom"]) || 0,
            "validTo": Date.parse(input_data["funDetails_validTo"]) || 0,
            "type": input_data["funDetails_orgType"]["name"],
            "category": input_data["funDetails_category"]["name"]
          }
        ],
        "additionalDetails": {
          "locality": input_data["locDetails_locality"]["name"] || "",
          "registeredByDept": "",
          "deptRegistrationNum": ""
        },
        "isActive": true
      }
      ]
    };

    /* use customiseCreateFormData hook to make some chnages to the Employee object */
    Digit.ORGService.create(transformed_data, tenantId).then((result, err) => {
      let getdata = { ...transformed_data, get: result }
      history.push({
        pathname: "/works-ui/employee/works/response",
        state: { responseData: getdata }, // Pass the responseData to the state
      });
    })
      .catch((err) => {
        let getdata = { ...transformed_data, get: err }
        history.push({
          pathname: "/works-ui/employee/works/response",
          state: { responseData: getdata }, // Pass the responseData to the state
        });
      })
  };

  const onFormValueChange = (setValue, formData) => {
    if (formData.locDetails_ward) {
      const selectedWardKey = formData?.locDetails_ward?.code
      setSelectedWard(selectedWardKey);
      const previouslySelectedWard = localStorage.getItem('selectedWard');
      if (previouslySelectedWard !== selectedWardKey) {
        setValue("locDetails_locality", '');
      }
      localStorage.setItem('selectedWard', selectedWardKey);
    }
  }



  return (
    <div>
      <Header className="works-header-create">{"Create Organisation"}</Header>
      <FormComposerV2
        // heading={t("Application Heading")}
        label={t("Submit Application")}
        config={config?.form}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        onFormValueChange={onFormValueChange}
        fieldStyle={{ marginRight: 0, maxWidth: '540px' }}
      />
    </div>
  );
};

export default Create;
