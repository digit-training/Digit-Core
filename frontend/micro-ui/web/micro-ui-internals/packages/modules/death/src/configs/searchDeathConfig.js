const searchDeathConfig = () => {
    return {
        label: "Death Registration Search",
        type: "search",
        actionLabel: "WORKS_ADD_WAGESEEKER",
        actionRole: "INDIVIDUAL_CREATOR",
        actionLink: "masters/create-wageseeker",
        apiDetails: {
            serviceName: "/birth-death-services/death/_search",
            requestParam: {},
            requestBody: {
                apiOperation: "SEARCH",
                Individual: {},
            },
            minParametersForSearchForm: 1,
            masterName: "commonUiConfig",
            moduleName: "SearchDeathConfig",
            tableFormJsonPath: "requestParam",
            filterFormJsonPath: "requestBody.Individual",
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
                            label: "From Date",
                            type: "date",
                            isMandatory: true,
                            disable: false,
                            key: "fromDate",
                            preProcess: {
                                updateDependent: ["populators.max"]
                            },
                            populators: {
                                name: "fromDate",
                                error: "DATE_VALIDATION_MSG",
                                max: "currentDate"
                            },
                            additionalValidation: {
                                type: "date",
                                keys: { start: "fromDate", end: "toDate" },
                            },
                        },
                        {
                            label: "To Date",
                            type: "date",
                            isMandatory: true,
                            disable: false,
                            key: "toDate",
                            populators: {
                                name: "toDate",
                                error: "DATE_VALIDATION_MSG",
                                max: "currentDate"
                            },
                            additionalValidation: {
                                type: "date",
                                keys: { start: "fromDate", end: "toDate" },
                            },
                        },
                        {
                            inline: true,
                            isMandatory: false,
                            type: "dropdown",
                            key: "genders",
                            label: "Gender",
                            disable: false,
                            populators: {
                                name: "gender",
                                optionsKey: "name",
                                error: "sample required message",
                                required: true,
                                mdmsConfig: {
                                    masterName: "GenderType",
                                    moduleName: "common-masters",
                                    localePrefix: "COMMON_GENDER",
                                },
                            },
                        },
                        {
                            inline: true,
                            label: "Registration Number",
                            isMandatory: false,
                            type: "text",
                            disable: false,
                            populators: { name: "registrationNo", error: "Required", validation: {} },
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
                            label: "REGISTRATION_NUMBER",
                            jsonPath: "deathCerts[*].registrationno", // Use [*] to indicate multiple values
                            additionalCustomization: true,
                        },
                        {
                            label: "NAME",
                            jsonPath: "deathCerts[*].fullName",
                            additionalCustomization: true,

                        },
                        {
                            label: "FATHER_NAME",
                            jsonPath: "deathCerts[*].deathFatherInfo.fullName",
                            additionalCustomization: true,

                        },
                        {
                            label: "MOTHER_NAME",
                            jsonPath: "deathCerts[*].deathMotherInfo.fullName",
                            additionalCustomization: true,

                        },
                        {
                            label: "SPOUSE_NAME",
                            jsonPath: "deathCerts[*].deathSpouseInfo.fullName",
                            additionalCustomization: true,

                        },
                        {
                            label: "HOSPITAL_NAME",
                            jsonPath: "deathCerts[*].hospitalname",
                            additionalCustomization: true,

                            // additionalCustomization: true,
                        },
                        {
                            label: "GENDER",
                            jsonPath: "deathCerts[*].genderStr",
                            additionalCustomization: true,

                            // additionalCustomization: true,
                        },
                    ],
                    enableGlobalSearch: false,
                    enableColumnSort: true,
                    resultsJsonPath: "deathCerts",
                },
                children: {},
                show: true,
            },
        },
        additionalSections: {},
    };
};

export default searchDeathConfig;
