export var newConfig = [

    {
      head: "Trade Details",
      body: [
        {
          isMandatory: true,
          key: "financialYear",
          type: "dropdown",
          label: "Financial Year",
          disable: false,
          populators: {
            name: "financialYear",
            optionsKey: "code",
            error: "Financial year required",
            required: true,
            mdmsConfig: {
              masterName: "FinancialYear",
              moduleName: "egf-master",
              localePrefix: "FINANCIAL_YEAR",
            },
          },
        },
        {
          isMandatory: true,
          key: "licenseType",
          type: "radioordropdown",
          label: "License Type",
          disable: false,
          populators: {
            name: "licenseType",
            optionsKey: "code",
            error: "License Type required",
            required: true,
            mdmsConfig: {
              masterName: "ApplicationType",
              moduleName: "TradeLicense",
              localePrefix: "LICENSE_TYPE",
            },
          },
        },
        {
          inline: true,
          label: "Trade Name",
          isMandatory: true,
          type: "text",
          disable: false,
          populators:{
             name: "tradeName",
             error: "Required",
          },
        },
        {
          isMandatory: true,
          key: "structureType",
          type: "radioordropdown",
          label: "Structure Type",
          disable: false,
          preProcess : {
            updateDependent : ["populators.options"]
          },
          populators: {
            name: "structureType",
            optionsKey: "code",
            error: "Structure type required",
            required: true,
            options:[],
            mdmsConfig: {
              masterName: "StructureType",
              moduleName: "common-masters",
              localePrefix: "COMMON_STRUCTURE",
              options:[],
            },
          },
        },
        {
          inline: true,
          label: "Trade Commencement Date",
          isMandatory: true,
          type: "date",   // check this how to change this to drop down
          disable: false,  
          populators: { name: "commencementDate", error: "Required" },
        },
        {
          // inline: true,
          key: "structureSubType",
          label: "Structure Sub Type",
          isMandatory: false,
          type: "radioordropdown",   // check this how to change this to drop down
          disable: false,
          preProcess : {
            updateDependent : ["populators.options"]
          },          
          populators:{
             name: "structureSubType", 
             optionsKey: "code",
             error: "Required",
             options:[],
             mdmsConfig: {
               masterName: "StructureType",
               moduleName: "common-masters",
               localePrefix: "COMMON_STRUCTURE",
               options:[],
             },
          },
        },
        {
          inline: true,
          label: "Trade GST Number",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "gstNumber", error: "Required" },
        },
        {
          inline: true,
          label: "Operational Sq.ft Number",
          isMandatory: false, 
          type: "text",
          disable: false,
          populators: { name: "name", error: "Required" },
        },
        {
          inline: true,
          label: "Number of Employees",
          isMandatory: false,
          type: "number",
          disable: false,
          populators: { name: "employeeCnt", error: "Required" },
        },
      ],
    },

    {
      head: "Trade Units",
      body: [
        {
          isMandatory: true,
          key: "tradeCategory",
          type: "radioordropdown",
          label: "Trade Category",
          disable: false,
          populators: {
            name: "tradeCategory",
            optionsKey: "name",
            error: "sample required message",
            required: true,
            mdmsConfig: {
              masterName: "AccessoriesCategory",
              moduleName: "TradeLicense",
              localePrefix: "COMMON_CATEGORY",
            },
          },
        },
        {
          isMandatory: true,
          key: "tradeType",
          type: "radioordropdown",
          label: "Trade Type",
          disable: false,
          populators: {
            name: "tradeType",
            optionsKey: "name",
            error: "sample required message",
            required: true,
            mdmsConfig: {
              masterName: "TradeType",
              moduleName: "TradeLicense",   
              localePrefix: "TRADE_TYPE",
            },
          },
        },
        {
          isMandatory: true,
          key: "tradeSubType",
          type: "radioordropdown",
          label: "Trade Sub Type",
          disable: false,
          populators: {
            name: "tradeSubType",
            optionsKey: "type",
            error: "sample required message",
            required: true,
            mdmsConfig: {
              masterName: "TradeType",
              moduleName: "TradeLicense",
              localePrefix: "COMMON_GENDER",
            },
          },
        },
        {
          inline: true,
          label: "UOM",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { 
            name: "uom", 
            error: "Required", 
            validation: { pattern: /^[A-Za-z]+$/i } 
          },
        },
        {
          inline: true,
          label: "UOM Value",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { 
            name: "uomValue", 
            error: "Required", 
            validation: { pattern: /^[A-Za-z]+$/i } 
          },
        }
      ],
    },
  
    {
      head: "Accessories",
      body: [  
        {
          isMandatory: true,
          key: "accessories",
          type: "radioordropdown",
          label: "Accessories",
          disable: false,
          populators: {
            name: "accessories",
            optionsKey: "name",
            error: "sample required message",
            required: true,
            mdmsConfig: {
              masterName: "AccessoriesCategory",
              moduleName: "TradeLicense",
              localePrefix: "COMMON_CATEGORY",
            },
          },
        },
        {
          inline: true,
          label: "UOM",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "uom", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
        },
        {
          inline: true,
          label: "UOM Value",
          isMandatory: false,
          type: "text",
          disable: false,
          populators: { name: "uomValue", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
        },
        {
          inline: true,
          label: "Accessory Count",
          isMandatory: false,
          type: "number",
          disable: false,
          populators: { name: "name2", error: "Required" },
        },
      ],
    },
  
    {
      head: "New Property",
      body: [
        {
          label: "Property ID",
          isMandatory: false,
          description: "Additional Details if any",
          key: "additionalDetails",
          type: "text",
          disable: false,
          populators: { name: "propertyId", error: "sample error message", validation: { pattern: /^[A-Za-z]+$/i } },
        },
      ],
    },
  
    {
      head: "Trade Address",
      body: [
        {
          label: "Pincode",
          isMandatory: false,
          key: "additionalDetails",
          type: "number",
          disable: false,
          populators: { name: "pincode", error: "sample error message" },
        },
        {
          label: "City",
          isMandatory: false,
          key: "locDetails_city",
          type: "radioordropdown",
          disable: false,
          preProcess : {
            updateDependent : ["populators.options"]
          },
          populators: {
             name: "locDetails_city",
            //  optionsKey: "i18nKey",
             optionsKey: "code",
             error: "WORKS_REQUIRED_ERR",
             optionsCustomStyle : {
               top : "2.3rem"
             },
             options: [
              // {
              //   code: "Amritsar",
              //   name: "Amristsar",
              // },
              // {
              //   code: "FEMALE",
              //   name: "FEMALE",
              // },
              // {
              //   code: "TRANSGENDER",
              //   name: "TRANSGENDER",
              // },
             ]
          },
        },
        {
          label: "Locality",
          isMandatory: false,
          key: "additionalDetails",
          type: "radioordropdown",
          disable: false,
          populators: { name: "locality", error: "sample error message", validation: { pattern: /^[A-Za-z]+$/i } },
        },
        {
          label: "Building Number",
          isMandatory: false,
          key: "additionalDetails",
          type: "number",
          disable: false,
          populators: { name: "buildingNumber", error: "sample error message" },
        },
        {
          label: "Street Name",
          isMandatory: false,
          key: "additionalDetails",
          type: "text",
          disable: false,
          populators: { name: "streetName", error: "sample error message", validation: { pattern: /^[A-Za-z]+$/i } },
        },
      ],
    },
  
    {
      head: "Ownership Details",
      body: [
        {
          label: "Type of ownership",
          isMandatory: false,
          key: "name",
          type: "dropdown",
          disable: false,
          populators: {
             name: "ownershipType",
             error: "sample error message",
            //  mdmsConfig: {
            //   masterName: "OwnerShipCategory",
            //   moduleName: "PropertyTax",
            //   localePrefix: "OWNERSHIP_TYPE",
            // },
          },
        },
        {
          label: "Owner's Name",
          isMandatory: true,
          key: "additionalDetails",
          type: "text",
          disable: false,
          populators: { name: "ownerName", error: "sample error message", validation: { pattern: /^[A-Za-z]+$/i } },
        },
        {
          label: "Owner's Mobile Number",
          isMandatory: true,
          key: "additionalDetails",
          type: "mobileNumber",
          disable: false,
          populators: { name: "mobileNumber", error: "sample error message", },
        },
        {
          label: "Relationship with Guardian",
          isMandatory: false,
          key: "guardianRelationship",
          type: "radioordropdown",
          disable: false,
          populators: {
             name: "guardianRelationship",
             optionsKey: "code",
             error: "Enter relationship with guardian",
             options:[
              {
                code:"FATHER",
                name:"father"
              },
              {
                code:"MOTHER",
                name:"mother"
              },
              // {
              //   code:"SELF",
              //   name:"self"
              // }
             ]
            },
        },
        {
          label: "gender",
          isMandatory: true,
          key: "basicDetails_gender",
          type: "radioordropdown",
          disable: false,
          populators: {
            name: "basicDetails_gender",
            optionsKey: "code",
            error: "WORKS_REQUIRED_ERR",
            optionsCustomStyle : {
              top : "2.3rem"
            },
            mdmsConfig: {
              masterName: "GenderType",
              moduleName: "common-masters",
              localePrefix: "COMMON_MASTERS_GENDER",
            }
          }
        },
        {
          label: "Email",
          isMandatory: false,
          key: "email",
          type: "text",
          disable: false,
          populators: { name: "email", error: "sample error message", validation: { pattern: /^[A-Za-z]+$/i } },
        },
        {
          label: "Owner Special Category",
          isMandatory: false,
          key: "additionalDetails",
          type: "radioordropdown",
          disable: false,
          populators: { name: "specialCategory", error: "sample error message", validation: { pattern: /^[A-Za-z]+$/i } },
        },
        {
          label: "Correspondence Address",
          isMandatory: false,
          key: "additionalDetails",
          type: "text",
          disable: false,
          populators: { name: "address", error: "sample error message", validation: { pattern: /^[A-Za-z]+$/i } },
        },
      ],
    },
  
    {
      head: "Document Required",
      body: [
        {
          "label": "OWNER_ID",
          "isMandatory": false,
          "key": "basicDetails_id",
          "type": "multiupload",
          "preProcess" : {
            "convertStringToRegEx" : ["populators.allowedFileTypes"]
          },
          "populators": {
            "name": "basicDetails_id",
            "allowedMaxSizeInMB": 2,
            "maxFilesAllowed": 1,
            "allowedFileTypes": "(.*?)(jpg|jpeg|png)$",
          }
        },
        {
          "label": "OWNERSHIP_DOCUMENTS",
          "isMandatory": false,
          "key": "basicDetails_documents",
          "type": "multiupload",
          "preProcess" : {
            "convertStringToRegEx" : ["populators.allowedFileTypes"]
          },
          "populators": {
            "name": "basicDetails_documents",
            "allowedMaxSizeInMB": 2,
            "maxFilesAllowed": 1,
            "allowedFileTypes": "(.*?)(jpg|jpeg|png)$",
          }
        },
        {
          "label": "TRADE_OWNER_PHOTOGRAPH",
          "isMandatory": false,
          "key": "basicDetails_photograph",
          "type": "multiupload",
          "preProcess" : {
            "convertStringToRegEx" : ["populators.allowedFileTypes"]
          },
          "populators": {
            "name": "basicDetails_photograph",
            "allowedMaxSizeInMB": 2,
            "maxFilesAllowed": 1,
            "allowedFileTypes": "(.*?)(jpg|jpeg|png)$",
          }
        },
      ],
    },
  
  ];