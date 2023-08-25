export const createOrganisationConfig = (filteredLocalities) => [
    {
        "head": "Organisation Details",
        "subHead": "",
        "body": [
            {
                "label": "Organisation Name",
                "isMandatory": true,
                "key": "basicDetails_orgName",
                "type": "text",
                "disable": false,
                "preProcess": {
                    "convertStringToRegEx": [
                        "populators.validation.pattern"
                    ]
                },
                "populators": {
                    "name": "basicDetails_orgName",
                    "error": "MASTERS_PATTERN_ERR_MSG_ORG_DETAILS",
                    "validation": {
                        "pattern": "^[a-zA-Z0-9 .\\-_@\\\/']*$",
                        "minlength": 2,
                        "maxlength": 128
                    }
                }
            },

            {
                "label": "Date Of Incorporation",
                "isMandatory": true,
                "key": "basicDetails_dateOfIncorporation",
                "type": "date",
                "disable": false,
                "preProcess": {
                    "updateDependent": [
                        "populators.validation.max"
                    ]
                },
                "populators": {
                    "name": "basicDetails_dateOfIncorporation",
                    "error": "WORKS_REQUIRED_ERR",
                    "validation": {
                        "max": new Date().toISOString().split("T")[0]
                    }
                }
            }
        ]
    },
    {
        "head": "Functional Details",
        "subHead": "",
        "body": [
            {
                "key": "funDetails_orgType",
                "label": "Organisation Type",
                "isMandatory": true,
                "type": "dropdown",
                "disable": false,
                "preProcess": {
                    "updateDependent": [
                        "populators.options"
                    ]
                },
                "populators": {
                    "name": "funDetails_orgType",
                    "optionsKey": "name",
                    "error": "WORKS_REQUIRED_ERR",
                    "optionsCustomStyle": {
                        "top": "2.3rem"
                    },
                    "options": [
                        { "name": "VEN.CMS" },
                        { "name": "VEN.NA" },
                        { "name": "CBO.MSG" },
                        { "name": "CBO.SDA" },
                        { "name": "CBO.ALF" },
                        { "name": "CBO.CLF" }
                    ]
                }
            },


            {
                "key": "funDetails_category",
                "label": "Category",
                "isMandatory": true,
                "type": "dropdown",
                "disable": false,
                "preProcess": {
                    "updateDependent": [
                        "populators.options"
                    ]
                },
                "populators": {
                    "name": "funDetails_category",
                    "optionsKey": "name",
                    "error": "WORKS_REQUIRED_ERR",
                    "optionsCustomStyle": {
                        "top": "2.3rem"
                    },
                    "options": [
                        { "name": "VEN.CW" },
                        { "name": "VEN.EW" },
                        { "name": "CBO.NA" }
                    ]
                }
            },

            {
                "label": "Valid From",
                "isMandatory": true,
                "key": "funDetails_validFrom",
                "type": "date",
                "disable": false,
                "preProcess": {
                    "updateDependent": [
                        "populators.validation.max"
                    ]
                },
                "populators": {
                    "name": "funDetails_validFrom",
                    "error": "WORKS_REQUIRED_ERR",
                    "validation": {
                        "max": new Date().toISOString().split("T")[0]
                    }
                }
            },
            {
                "label": "Valid To",
                "isMandatory": false,
                "key": "funDetails_validTo",
                "type": "date",
                "disable": false,
                "preProcess": {
                    "updateDependent": [
                        "populators.validation.min"
                    ]
                },
                "populators": {
                    "name": "funDetails_validTo",
                    "validation": {
                        "min": new Date().toISOString().split("T")[0]
                    }
                }
            }
        ]
    },
    {
        "head": "Organisation Address",
        "body": [
            {
                "label": "CORE_COMMON_CITY",
                "isMandatory": true,
                "key": "locDetails_city",
                "type": "dropdown",
                "disable": true,
                "preProcess": {
                    "updateDependent": [
                        "populators.options"
                    ]
                },
                "populators": {
                    "name": "locDetails_city",
                    "optionsKey": "i18nKey",
                    "error": "WORKS_REQUIRED_ERR",
                    "optionsCustomStyle": {
                        "top": "2.3rem"
                    },
                    "options": [{ "i18nKey": "City A" }]
                }
            },
            {
                "label": "COMMON_WARD",
                "isMandatory": true,
                "key": "locDetails_ward",
                "type": "dropdown",
                "disable": false,
                "preProcess": {
                    "updateDependent": [
                        "populators.options"
                    ]
                },
                "populators": {
                    "name": "locDetails_ward",
                    "optionsKey": "i18nKey",
                    "error": "WORKS_REQUIRED_ERR",
                    "optionsCustomStyle": {
                        "top": "2.3rem"
                    },
                    "options": [{ "i18nKey": "Ward 1" }, { "i18nKey": "Ward 2" }, { "i18nKey": "Ward 3" }, { "i18nKey": "Ward 4" }]
                }
            },
            {
                "label": "COMMON_LOCALITY",
                "isMandatory": true,
                "key": "locDetails_locality",
                "type": "dropdown",
                "disable": false,
                "preProcess": {
                    "updateDependent": [
                        "populators.options"
                    ]
                },
                "populators": {
                    "name": "locDetails_locality",
                    "optionsKey": "i18nKey",
                    "error": "WORKS_REQUIRED_ERR",
                    "optionsCustomStyle": {
                        "top": "2.3rem"
                    },
                    "options": filteredLocalities
                }
            },
            {
                "label": "ES_COMMON_STREET_NAME",
                "isMandatory": false,
                "key": "locDetails_streetName",
                "type": "text",
                "disable": false,
                "preProcess": {
                    "convertStringToRegEx": [
                        "populators.validation.pattern"
                    ]
                },
                "populators": {
                    "name": "locDetails_streetName",
                    "error": "WORKS_PATTERN_ERR",
                    "validation": {
                        "pattern": "^[a-zA-Z0-9 .,\\/\\-_@#\\']*$",
                        "minlength": 2,
                        "maxlength": 64
                    }
                }
            },
            {
                "label": "ES_COMMON_DOOR_NO",
                "isMandatory": false,
                "key": "locDetails_houseName",
                "type": "text",
                "disable": false,
                "preProcess": {
                    "convertStringToRegEx": [
                        "populators.validation.pattern"
                    ]
                },
                "populators": {
                    "name": "locDetails_houseName",
                    "error": "WORKS_PATTERN_ERR",
                    "validation": {
                        "pattern": "^[a-zA-Z0-9 .,\\/\\-_@#\\']*$",
                        "minlength": 2,
                        "maxlength": 8
                    }
                }
            }
        ]
    },
    {
        "head": "Contact Details",
        "body": [
            {
                "label": "CORE_COMMON_NAME",
                "isMandatory": true,
                "key": "contactDetails_name",
                "type": "text",
                "disable": false,
                "preProcess": {
                    "convertStringToRegEx": [
                        "populators.validation.pattern"
                    ]
                },
                "populators": {
                    "name": "contactDetails_name",
                    "error": "MASTERS_PATTERN_ERR_MSG_ORG_DETAILS",
                    "validation": {
                        "pattern": "^[a-zA-Z0-9 .\\-_@\\']*$",
                        "minlength": 1,
                        "maxlength": 50
                    }
                }
            },
            {
                "label": "CORE_COMMON_PROFILE_MOBILE_NUMBER",
                "isMandatory": true,
                "key": "contactDetails_mobile",
                "type": "mobileNumber",
                "disable": false,
                "populators": {
                    "name": "contactDetails_mobile",
                    "error": "PHONE_VALIDATION",
                    "validation": {
                        "min": 5999999999,
                        "max": 9999999999
                    }
                }
            },
            {
                "label": "CORE_COMMON_PROFILE_EMAIL",
                "isMandatory": false,
                "key": "contactDetails_email",
                "type": "text",
                "disable": false,
                "preProcess": {
                    "convertStringToRegEx": [
                        "populators.validation.pattern"
                    ]
                },
                "populators": {
                    "name": "contactDetails_email",
                    "error": "EMAIL_VALIDATION",
                    "validation": {
                        "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(?:[a-zA-Z]{2,6})$",
                        "minlength": 2,
                        "maxlength": 64
                    }
                }
            }
        ]
    }
];