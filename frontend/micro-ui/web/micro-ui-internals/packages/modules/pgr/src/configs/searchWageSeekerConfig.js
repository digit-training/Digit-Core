const searchPGRConfig = () => {

  const tenantIdList = [
    {
      "tenantId":"pb.amritsar"
    }
  ];

  return {
    label: "SEARCH_COMPLAINT",
    type: "search",
    actionLabel: "WORKS_ADD_WAGESEEKER",
    actionRole: "INDIVIDUAL_CREATOR",
    actionLink: "masters/create-wageseeker",
    apiDetails: {
      serviceName: "/pgr-services/v2/request/_search",
      requestParam: {},
      requestBody: {
        apiOperation: "SEARCH",
        Individual: {},
      },
      minParametersForSearchForm: 1,
      masterName: "commonUiConfig",
      moduleName: "searchPGRConfig",
      // tableFormJsonPath: "requestParam",
      // filterFormJsonPath: "requestBody.Individual",
      searchFormJsonPath: "requestParam",
    },
    sections: {
      search: {
        uiConfig: {
          headerStyle: null,
          formClassName:"custom-both-clear-search",
          primaryLabel: "ES_COMMON_SEARCH",
          secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
          minReqFields: 1,
          fields: [
            {
              label: "tenantId",
              type: "dropdown",
              isMandatory: true,
              disable: false,
              key: "tenantId",
              populators: {
                name: "TenantId",
                optionsKey: "tenantId",
                options: tenantIdList,
              }
            },
            {
              label: "serviceRequestId",
              type: "text",
              isMandatory: true,
              disable: false,
              populators: { name: "serviceRequestId", validation: {} },
            },
          ],
        },
        label: "",
        // children: {},
        show: true,
      },
      searchResult: {
        label: "",
        uiConfig: {
          columns: [
            {
              label: "Name",
              jsonPath: "ServiceWrappers.service.citizen.name",
              additionalCustomization: true,
            },
            {
              label: "Mobile Number",
              jsonPath: "ServiceWrappers.service.citizen.mobileNumber",
              additionalCustomization: true,
            },
            {
              label: "Service Request ID",
              jsonPath: "ServiceWrappers.service.serviceRequestId",
              additionalCustomization: true,
            },
            {
              label: "Service Code",
              jsonPath: "ServiceWrappers.service.serviceCode",
              additionalCustomization: true,
            },
            {
              label: "Source",
              jsonPath: "ServiceWrappers.service.source",
              additionalCustomization: true,
            },
            {
              label: "City",
              jsonPath: "ServiceWrappers.service.address.city",
              additionalCustomization: true,
            },
            {
              label: "Action",
              jsonPath: "ServiceWrappers.workflow.action",
              additionalCustomization: true,
            },
            {
              inline:true,
              label: "View Details",
              isMandatory: false,
              disable:false,
              additionalCustomization: true,
            },  
            
          ],
          enableGlobalSearch: false,
          enableColumnSort: true,
          resultsJsonPath: "ServiceWrappers",
        },
        children: {},
        show: true,
      },
    },
    additionalSections: {},
  };
};

export default searchPGRConfig;
