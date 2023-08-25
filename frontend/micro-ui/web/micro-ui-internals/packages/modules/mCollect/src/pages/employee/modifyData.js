export const createModifiedData = (data) => {
    const modifiedData = {
       
            Challan: {
              citizen: {
                name: data.Challan.citizen.name || "",
                mobileNumber: parseInt(data.Challan.citizen.mobileNumber) ,
              },
              address: {
                locality: {
               
                  code: data.locality[0].code,
                },
                buildingName: data.Challan.address.buildingName || "",
                doorNo: data.Challan.address.doorNo || "",
                street: data.Challan.address.street || "",
                pincode: data.Challan.address.pincode || "",
              },
              amount: data.Challan.amount.map((item) => ({
                taxHeadCode: "TX.NO_DUES_CERTIFICATE_TAX",

                // data.Challan.businessService.code,
                amount: item.amount || "0",
      
              })),
             
              consumerType: data.Challan.businessService.category,
              // consumerType: "TAX",
              // businessService: {
              //   category: data.Challan.businessService.category || "",
              //   service: data.Challan.businessService.service || "",
              //   name: data.Challan.businessService.name || "",
              //   code: data.Challan.businessService.code || "",
              //   isDebit: data.Challan.businessService.isDebit || false,
              //   isActualDemand: data.Challan.businessService.isActualDemand || false,
              //   order: data.Challan.businessService.order || "0",
              //   isRequired: data.Challan.businessService.isRequired || false,
              // },
      
            // "TX.No_Dues_Certificate",
      
            // businessService: data.Challan.businessService.service,
              businessService: "TX.No_Dues_Certificate",
      
              // consumerType: {
              //   category: data.Challan.consumerType.category || "",
              //   service: data.Challan.consumerType.service || "",
              //   name: data.Challan.consumerType.name || "",
              //   code: data.Challan.consumerType.code || "",
              //   isDebit: data.Challan.consumerType.isDebit || false,
              //   isActualDemand: data.Challan.consumerType.isActualDemand || false,
              //   order: data.Challan.consumerType.order || "0",
              //   isRequired: data.Challan.consumerType.isRequired || false,
              // },
      
      
              taxPeriodFrom: data.Challan.taxPeriodFrom
              ? new Date(data.Challan.taxPeriodFrom).getTime()
              : "",
            taxPeriodTo: data.Challan.taxPeriodTo
              ? new Date(data.Challan.taxPeriodTo).getTime()
              : "",
              tenantId:  "pg.citya",
            },
        
        
         
        
    };
  
    return modifiedData;
  };


//   data.Challan.tenantId ||