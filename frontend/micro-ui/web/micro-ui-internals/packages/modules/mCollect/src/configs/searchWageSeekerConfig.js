const searchWageSeekerConfig = () => {
  return {
    label: "Search Challan",
    type: "search",
    actionLabel: "WORKS_ADD_WAGESEEKER",
    actionRole: "INDIVIDUAL_CREATOR",
    actionLink: "masters/create-wageseeker",
    apiDetails: {
      serviceName: "/echallan-services/eChallan/v1/_search",
      requestParam: {},
      requestBody: {
        apiOperation: "SEARCH",
        Individual: {},
      },
      minParametersForSearchForm: 1,
      masterName: "commonUiConfig",
      moduleName: "SearchMCollectConfig",
      tableFormJsonPath: "requestParam",
      filterFormJsonPath: "requestBody.Individual",
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
          defaultValues: {
            wardCode: "",
            individualId: "",
            name: "",
            socialCategory: "",
            mobileNumber: "",
            createdFrom: "",
            createdTo: "",
            challanNumber: "",
            ReceiptNumber: "",
          },
          fields: [
       
            {
              label: "Challan Number",
              type: "text",
              isMandatory: false,
              disable: false,
              populators: { 
                name: "challanNo",
              //  validation: { pattern: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i, maxlength: 140 }
               },
            },
            {
              label: "MOBILE NUMBER",
              type: "mobileNumber",
              isMandatory: false,
              disable: false,
              populators: {
                name: "mobileNumber",
                error: `PROJECT_PATTERN_ERR_MSG`,
                validation: { pattern: /^[a-z0-9\/-@# ]*$/i, minlength: 2 },
              },
            },
            {
              label: "Receipt Number",
              type: "text",
              isMandatory: false,
              disable: false,
              populators: {
                name: "ReceiptNumber",
                error: `PROJECT_PATTERN_ERR_MSG`,
                validation: {  minlength: 2 },
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
              label: "Action",
              jsonPath: "",
              additionalCustomization: true,
            },
         
            {
              label: "Challan Number",
              jsonPath: "challanNo",
              additionalCustomization:true,
              // additionalCustomization: true,
            },
            {
              label: "Consumer Name",
              jsonPath: "citizen.name",
            },
            {
              label: "Service",
              jsonPath: "businessService",
            },
            {
              label: "Mobile Number",
              jsonPath: "citizen.mobileNumber",
              // additionalCustomization: true,
            },
           
          
            {
              label: "Status",
              jsonPath: "applicationStatus",
              // additionalCustomization: true,
            },


          ],
          enableGlobalSearch: false,
          enableColumnSort: true,
          resultsJsonPath: "challans",
          isEdit: true,
        },
        children: {},
        show: true,
      },
    },
    additionalSections: {},
  };
};

export default searchWageSeekerConfig;
