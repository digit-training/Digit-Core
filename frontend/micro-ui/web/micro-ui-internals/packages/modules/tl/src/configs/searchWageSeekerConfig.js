const SearchTLConfig = () => {
  return {
    label: "WORKS_SEARCH_WAGESEEKERS",
    type: "search",
    actionLabel: "WORKS_ADD_WAGESEEKER",
    actionRole: "INDIVIDUAL_CREATOR",
    actionLink: "masters/create-wageseeker",
    apiDetails: {
      serviceName: "/tl-services/v1/_search",
      requestParam: {},
      requestBody: {
        apiOperation: "SEARCH",
        Individual: {},
      },
      minParametersForSearchForm: 1,
      masterName: "commonUiConfig",
      moduleName: "SearchTLConfig",
      tableFormJsonPath: "requestParam",
      filterFormJsonPath: "requestBody.Individual",
      searchFormJsonPath: "requestBody.Individual",
    },
    sections: {
      search: {
        uiConfig: {
          headerStyle: null,
          formClassName:"custom-both-clear-search",
          primaryLabel: "ES_COMMON_SEARCH",
          secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
          minReqFields: 1,
          defaultValues: {
            wardCode: "",
            individualId: "",
            name: "",
            socialCategory: "",
            mobileNumber: "",
            createdFrom: "",
            createdTo: "",
          },
          fields: [
            {
              label: "Apllication Number",
              type: "text",
              isMandatory: false,
              disable: false,
              // additionalCustomization : true,
              populators: { 
                name: "name"
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
              label: "Application Number",
              jsonPath: "applicationNumber",
              additionalCustomization : true,
              // additionalCustomization: true,
            },
            {
              label: "Trade Name",
              jsonPath: "tradeName",
            },
            {
              label: "Owners Name",
              jsonPath: "tradeLicenseDetail.owners[0].name",
            },
            {
              label: "MASTERS_SOCIAL_CATEGORY",
              jsonPath: "additionalFields.fields[0].value",
              // additionalCustomization: true,
            },
            {
              label: "CORE_COMMON_PROFILE_CITY",
              jsonPath: "address[0].tenantId",
              additionalCustomization: true,
            },
            {
              label: "MASTERS_WARD",
              jsonPath: "address[0].ward.code",
              additionalCustomization: true,
            },
            {
              label: "MASTERS_LOCALITY",
              jsonPath: "address[0].locality.code",
              additionalCustomization: true,
            },
          ],
          enableGlobalSearch: false,
          enableColumnSort: true,
          resultsJsonPath: "Licenses",
        },
        children: {},
        show: true,
      },
    },
    additionalSections: {},
  };
};

export default SearchTLConfig;
