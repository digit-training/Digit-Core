const searchFireNocConfig = () => {
  return {
    label: "Search Fire NOC Application",
    subLabel: "Provide at least one parameter to search for an application",
    type: "search",
    // actionLabel: "WORKS_ADD_WAGESEEKER",
    // actionRole: "INDIVIDUAL_CREATOR",
    // actionLink: "masters/create-wageseeker",
    apiDetails: {
      serviceName: "/firenoc-services/v1/_search",
      requestParam: {},
      requestBody: {
        apiOperation: "SEARCH",
        // Individual: {},
      },
      minParametersForSearchForm: 1,
      masterName: "commonUiConfig",
      moduleName: "SearchFireNocConfig",
      tableFormJsonPath: "requestParam",
      filterFormJsonPath: "requestBody.FireNOCs",
      searchFormJsonPath: "requestParam",
    },
    sections: {
      search: {
        uiConfig: {
          headerStyle: null,
          formClassName: "custom-both-clear-search",
          primaryLabel: "ES_COMMON_SEARCH",
          secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
          minReqFields: 1,
          defaultValues: {
            applicationNumber: "",
            fireNOCNumber: "",
            applicationStatus: "",
            mobileNumber: "",
            fromDate: "",
            toDate: "",
          },
          fields: [
            {
              label: "Application Number",
              type: "text",
              isMandatory: false,
              disable: false,
              populators: {
                name: "applicationNumber",
                validation: { pattern: /^PB-FN-\d{4}-\d{2}-\d{2}-\d{6}$/ },
              },
            },
            {
              label: "Fire NOC No.",
              type: "text",
              isMandatory: false,
              disable: false,
              populators: {
                name: "fireNOCNumber",
              },
            },
            {
              label: "Mobile Number",
              type: "mobileNumber",
              isMandatory: false,
              disable: false,
              populators: {
                name: "mobileNumber",
                error: "Enter a valid mobile number",
                validation: { min: 5999999999, max: 9999999999 },
              },
            },
            {
              label: "Application status",
              type: "dropdown",
              isMandatory: false,
              disable: false,
              populators: {
                name: "status",
                optionsKey: "code",
                optionsCustomStyle: {
                  top: "2.3rem",
                },
                options: [
                  {
                    code: "Approved",
                    name: "APPROVED",
                  },
                  {
                    code: "Cancelled",
                    name: "CANCELLED",
                  },
                  {
                    code: "Citizen Action Required From DV",
                    name: "CITIZENACTIONREQUIRED-DV",
                  },
                  {
                    code: "Citizen Action Required From FI",
                    name: "CITIZENACTIONREQUIRED",
                  },
                  {
                    code: "Initiated",
                    name: "INITIATED",
                  },
                  {
                    code: "Pending for Approval",
                    name: "PENDINGAPPROVAL",
                  },
                  {
                    code: "Pending for Document Verification",
                    name: "DOCUMENTVERIFY",
                  },
                  {
                    code: "Pending for Field Inspection",
                    name: "FIELDINSPECTION",
                  },
                  {
                    code: "Pending for Payment",
                    name: "PENDINGPAYMENT",
                  },
                  {
                    code: "Rejected",
                    name: "REJECTED",
                  },
                ],
                // mdmsConfig: {
                //   masterName: "SocialCategory",
                //   moduleName: "common-masters",
                //   localePrefix: "MASTERS",
                // },
              },
            },
            {
              label: "CREATED_FROM_DATE",
              type: "date",
              isMandatory: false,
              disable: false,
              key: "fromDate",
              preProcess: {
                updateDependent: ["populators.max"],
              },
              populators: {
                name: "fromDate",
                max: "currentDate",
              },
            },
            {
              label: "CREATED_TO_DATE",
              type: "date",
              isMandatory: false,
              disable: false,
              key: "toDate",
              preProcess: {
                updateDependent: ["populators.max"],
              },
              populators: {
                name: "toDate",
                error: "DATE_VALIDATION_MSG",
                max: "currentDate",
              },
              additionalValidation: {
                type: "date",
                keys: { start: "fromDate", end: "toDate" },
              },
            },
          ],
        },
        label: "",
        children: {},
        show: true,
      },
      searchResult: {
        label: "",
        uiConfig: {
          columns: [
            {
              label: "Application no.",
              jsonPath: "fireNOCDetails.applicationNumber",
              //   additionalCustomization: true,
            },
            {
              label: "Fire NOC no.",
              jsonPath: "fireNOCNumber",
            },
            {
              label: "Status",
              jsonPath: "fireNOCDetails.status",
            },
            {
              label: "Applicant name",
              jsonpath: "fireNOCDetails.applicantDetails.owners[0].name",
              additionalCustomization: true,
            },
            //   {
            //     label: "MASTERS_SOCIAL_CATEGORY",
            //     jsonPath: "additionalFields.fields[0].value",
            //     // additionalCustomization: true,
            //   },
            //   {
            //     label: "CORE_COMMON_PROFILE_CITY",
            //     jsonPath: "address[0].tenantId",
            //     additionalCustomization: true,
            //   },
            //   {
            //     label: "MASTERS_WARD",
            //     jsonPath: "address[0].ward.code",
            //     additionalCustomization: true,
            //   },
            //   {
            //     label: "MASTERS_LOCALITY",
            //     jsonPath: "address[0].locality.code",
            //     additionalCustomization: true,
            //   },
          ],
          enableGlobalSearch: false,
          enableColumnSort: true,
          resultsJsonPath: "FireNOCs",
        },
        children: {},
        show: true,
      },
    },
    additionalSections: {},
  };
};

export default searchFireNocConfig;
