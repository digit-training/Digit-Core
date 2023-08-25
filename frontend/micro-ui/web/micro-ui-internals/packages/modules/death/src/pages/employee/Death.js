import { Loader, FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export const newConfig = [
    {
        head: "Registration Details",
        // subHead: "Supporting Details",
        body: [
            {
                inline: true,
                label: "Registration Number",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "rNumber", error: "sample error message", validation: {} },
            },
            {
                inline: true,
                label: "Hospital Name",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "hName", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "Date Of Registration",
                isMandatory: true,
                type: "date",
                disable: false,
                populators: { name: "deathDate", error: "Required", validation: { required: true, } },
            },

        ],
    },
    {
        head: "Information of the Deceased",
        // subHead: "Supporting Details",
        body: [
            {
                inline: true,
                label: "Death Date",
                isMandatory: true,
                type: "date",
                disable: false,
                populators: { name: "dDate", error: "Required", validation: { required: true, } },
            },
            {
                isMandatory: true,
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
                label: "Age",
                isMandatory: true,
                // description: "Please enter a valid Age",
                type: "number",
                disable: false,
                populators: { name: "age", error: "sample error message", validation: { min: 0, max: 100 } },
            },
            {
                inline: true,
                label: "First Name",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "First Name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "Middle Name",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "middleName", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "Last Name",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "lastName", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "EID Number",
                isMandatory: false,
                // description: "Please enter a valid Date of birth",
                type: "text",
                disable: false,
                populators: { name: "eidNumber", error: "Required" },
            },
            {
                label: "Aadhar Number",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "aadharNumber", error: "sample error message", validation: { min: 100000000000, max: 1000000000000 } },
            },
        ],
    },
    {
        head: "Information Of Death",
        body: [
            {
                inline: true,
                label: "Death Place",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "deathPlace", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "ICD Code",
                isMandatory: false,
                // description: "Please enter a valid Date of birth",
                type: "text",
                disable: false,
                populators: { name: "icdCode", error: "Required" },
            },
        ],
    },
    {
        head: "Spouse Information",
        body: [
            {
                inline: true,
                label: "First Name",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "fName", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "Middle Name",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "mName", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "Last Name",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "lName", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                label: "Aadhar Number",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "aNumber", error: "sample error message", validation: { min: 100000000000, max: 1000000000000 } },
            },
            {
                label: "Email ID",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "eID", error: "sample error message", validation: {} },
            },
            {
                label: "Mobile Number",
                isMandatory: false,
                type: "mobileNumber",
                disable: false,
                populators: { name: "mNumber", error: "sample error message", validation: { min: 5999999999, max: 9999999999 } },
            },
        ],
    },
    {
        head: "Father's Information",
        body: [
            {
                inline: true,
                label: "First Name",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "f2Name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "Middle Name",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "m2Name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "Last Name",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "l2Name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                label: "Aadhar Number",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "a2Number", error: "sample error message", validation: { min: 100000000000, max: 1000000000000 } },
            },
            {
                label: "Email ID",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "e2ID", error: "sample error message", validation: {} },
            },
            {
                label: "Mobile Number",
                isMandatory: false,
                type: "mobileNumber",
                disable: false,
                populators: { name: "m2Number", error: "sample error message", validation: { min: 5999999999, max: 9999999999 } },
            },
        ],
    },
    {
        head: "Mother's Information",
        body: [
            {
                inline: true,
                label: "First Name",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "f3Name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "Middle Name",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "m3Name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "Last Name",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "l3Name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                label: "Aadhar Number",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "a3Number", error: "sample error message", validation: { min: 100000000000, max: 1000000000000 } },
            },
            {
                label: "Email ID",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "e3ID", error: "sample error message", validation: {} },
            },
            {
                label: "Mobile Number",
                isMandatory: false,
                type: "mobileNumber",
                disable: false,
                populators: { name: "m3Number", error: "sample error message", validation: { min: 5999999999, max: 9999999999 } },
            },
        ],
    },
    {
        head: "Address Of Deceased",
        body: [
            {
                inline: true,
                label: "City",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "city", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "State",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "sName", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                inline: true,
                label: "Pin Number",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "pName", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
                label: "Country",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "cNumber", error: "sample error message", validation: {} },
            },
            {
                label: "building Number",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "bn", error: "sample error message", validation: {} },
            },
            {
                label: "House Number",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "hn", error: "sample error message", validation: {} },
            },
            {
                label: "Street Name",
                isMandatory: false,
                type: "text",
                disable: false,
                populators: { name: "sn", error: "sample error message", validation: {} },
            },
            {
                label: "Locality",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "hn2", error: "sample error message", validation: {} },
            },
            {
                label: "tehsil",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "tn", error: "sample error message", validation: {} },
            },
            {
                label: "District",
                isMandatory: true,
                type: "text",
                disable: false,
                populators: { name: "dn", error: "sample error message", validation: {} },
            },
        ],
    },

];

function transformData(data) {
    const deathCerts = [
        {
            deathSpouseInfo: {
                firstname: data.f2Name || null,
                emailid: data.e2ID || null,
                mobileno: data.m2Number || null,
                lastname: data.l2Name || null,
            },
            deathFatherInfo: {
                firstname: data.fName || null,
                emailid: data.eID || null,
                mobileno: data.mNumber || null,
                middlename: data.mName || null,
                lastname: data.lName || null,
            },
            deathMotherInfo: {
                firstname: data.f3Name || null,
                emailid: data.e3ID || null,
                mobileno: data.m3Number || null,
                lastname: data.l3Name || null,
            },
            deathPresentaddr: {
                city: data.city || null,
                state: data.sName || null,
                pinno: data.pName || null,
                country: data.cNumber || null,
                buildingno: data.bn || null,
                houseno: data.hn || null,
                streetname: data.sn || null,
                locality: data.tn || null,
                tehsil: data.dn || null,
                district: data.dn || null,
            },
            deathPermaddr: {
                city: data.city || null,
                state: data.sName || null,
                pinno: data.pName || null,
                country: data.cNumber || null,
                buildingno: data.bn || null,
                houseno: data.hn || null,
                streetname: data.sn || null,
                locality: data.tn || null,
                tehsil: data.dn || null,
                district: data.dn || null,
            },
            registrationno: data.rNumber || null,
            hospitalname: data.hName || null,
            dateofreportepoch: data.deathDate ? new Date(data.deathDate).getTime() / 1000 : null,// Current timestamp in seconds
            genderStr: data.genders ? data.genders.name.replace("COMMON_GENDER_", "") : null,
            age: data.age || null,
            firstname: data["First Name"] || null,
            dateofdeathepoch: data.dDate ? new Date(data.dDate).getTime() / 1000 : null,
            lastname: data.lastName || null,
            nationality: data.nationality || "indian", // Use input nationality if available, otherwise default to "indian"
            placeofdeath: data.deathPlace || null,
            icdcode: data.icdCode || null,
            checkboxforaddress: true,
            tenantid: "pb.amritsar", // Use input tenantid if available, otherwise default to "pb.amritsar"
            excelrowindex: -1,
            counter: 0,
        },
    ];

    return { deathCerts };
}





const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f7f7f7',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '1500px',
        margin: '0 auto',
    },
    header: {
        marginBottom: '20px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '8px',
    },
    subHeading: {
        fontSize: '16px',
        color: '#666',
    },
    form: {
        maxWidth: '1200px', // Adjust the maxWidth to your preference
        width: '100%',
        padding: '20px', // Add padding to the form
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
};


const Create = () => {
    const tenantId = Digit.ULBService.getCurrentTenantId();
    const { t } = useTranslation();
    const history = useHistory();

    const onSubmit = (data) => {
        const newData = transformData(data);
        console.log(newData);
        var Digit = window.Digit || {};
        console.log(Digit);

        Digit.DeathService.create(newData, tenantId).then((result, err) => {
            let getdata = { ...data, get: result }
            console.log("daaaa", getdata);
            history.push({
                pathname: "/digit-ui/employee/sw/response",
                state: { responseData: getdata }, // Pass the responseData to the state
            });
        }).catch((e) => {
            console.log("err");
        });

        history.push({
            pathname: "/digit-ui/employee/sw/response",
            state: { responseData: getdata }, // Pass the responseData to the state
        });



        console.log("getting data", newData);
    };

    /* use newConfig instead of commonFields for local development in case needed */

    const configs = newConfig ? newConfig : newConfig;

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.heading}>New Registration</h1>
                <h2 style={styles.subHeading}>(*) marked fields are mandatory</h2>
            </div>
            <div style={styles.form}>
                <FormComposerV2
                    label={t("Submit Bar")}
                    config={configs.map((config) => {
                        return {
                            ...config,
                            body: config.body.filter((a) => !a.hideInEmployee),
                        };
                    })}
                    defaultValues={{}}
                    onSubmit={onSubmit}
                    fieldStyle={{ margin: '10px 0', padding: '10px' }}
                />
            </div>
        </div>
    );

};

export default Create;