import { Loader, FormComposerV2  } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import BrResponse from "./BrResponse";

export const newConfig = [
  {
    head: "Registrations Details",
    //subHead: "Supporting Details",
    body: [
      {
        inline: true,
        label: "Registration Number",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "RegistrationNumber", error: "Required", validation: { pattern: /^[A-Za-z]+$/i , maxlength:6} },
      },
      {
        inline: true,
        label: "Hospital Name",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "HospitalName", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Date Of Registration",
        isMandatory: true,
        description: "Please enter a valid Date",
        type: "date",
        disable: false,
        populators: { name: "DateOfRegistration", error: "Required", validation: { required:true, } },
      },
    ],
  },
  {
    head: "Information Of Child",
    body: [
      {
        inline: true,
        label: "Dob",
        isMandatory: true,
        description: "Please enter a valid Date Of Birth",
        type: "date",
        disable: false,
        populators: { name: "Dob", error: "Required", validation: { required:true, } },
      },
   
      {
        isMandatory: true,
        key: "genders",
        type: "radioordropdown",
        label: "Enter Gender",
        disable: false,
        populators: {
          name: "genders",
          optionsKey: "name",
          error: "sample required message",
          required: true,
          mdmsConfig: {
            masterName: "GenderType",
            moduleName: "common-masters",
            localePrefix: "COMMON_GENDER",
          },
        }
      },
      {
        label: "First Name",
        isMandatory: true,
        //description: "Additional Details if any",
        key: "FirstName",
        type: "text",
        disable: false,
        populators: { name: "FistName", error: " error message", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        label: "Middle Name",
        isMandatory: false,
        //description: "Additional Details if any",
        key: "MiddleName",
        type: "text",
        disable: false,
        populators: { name: "MiddleName", error: " error message", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        label: "Last Name",
        isMandatory: true,
        //description: "Additional Details if any",
        key: "LastName",
        type: "text",
        disable: false,
        populators: { name: "LastName", error: " error message", validation: { pattern: /^[A-Za-z]+$/i } },
      }
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
    head: "Address",
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
            isMandatory: false,
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
            isMandatory: false,
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
            isMandatory: false,
            type: "text",
            disable: false,
            populators: { name: "hn2", error: "sample error message", validation: {} },
        },
        {
            label: "tehsil",
            isMandatory: false,
            type: "text",
            disable: false,
            populators: { name: "tn", error: "sample error message", validation: {} },
        },
        {
            label: "District",
            isMandatory: false,
            type: "text",
            disable: false,
            populators: { name: "dn", error: "sample error message", validation: {} },
        },
    ],
},
];

const Create = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();

  const onSubmit = (data) => {

    let newData = 
      {
        //   babyFirstName: data?.BrSelectName?.babyFirstName,
        //   babyLastName: data?.BrSelectName?.babyLastName,
        //   fatherName: data?.BrSelectName?.fatherName,
        //   motherName: data?.BrSelectName?.motherName,
        //   gender: data?.BrSelectGender?.gender,
        //   doctorName: data?.BrSelectName?.doctorName,
        //   hospitalName: data?.BrSelectName?.hospitalName,
        //   placeOfBirth: data?.BrSelectName?.placeOfBirth,
        //   applicantMobileNumber: data?.BRSelectPhoneNumber?.applicantMobileNumber,
        //   altMobileNumber: data?.BRSelectPhoneNumber?.altMobileNumber,
        //   emailId: data?.BRSelectEmailId?.emailId,
        //   permanentAddress: data?.BrSelectAddress?.permanentAddress,
        //   permanentCity: data?.BrSelectAddress?.permanentCity,
        //   correspondenceCity: data?.SelectCorrespondenceAddress?.correspondenceCity,
        //   correspondenceAddress: data?.SelectCorrespondenceAddress?.correspondenceAddress,
        //   bloodGroup: data?.SelectCorrespondenceAddress?.bloodGroup,
        //   tenantId: tenantId,
        // },
        "birthCerts": [
          {
              "birthFatherInfo": {
                  "firstname": data?.f2Name,
                  "emailid": data?.e2ID,
                  "mobileno": data?.m2Number,
                  "middlename": data?.m2Name,
                  "lastname": data?.l2Name,
                  "aadharno": data?.a2Number,
                  "education": "BE",
                  "religion": "HINDU",
                  "proffession": "NA",
                  "nationality": "indian"
              },
              "birthMotherInfo": {
                  "firstname":data?.f3Name ,
                  "emailid": data?.e3ID,
                  "mobileno": data?.m3Number,
                  "middlename": data?.m3Name,
                  "lastname": data?.l3Name,
                  "aadharno": data?.a3Number,
                  "education": "BE",
                  "proffession": "NA",
                  "nationality": "indian",
                  "religion": "Hindu"
              },
              "birthPermaddr": {
                  "city": data?.city,
                  "state": data?.sName,
                  "pinno": data?.pName,
                  "country": data?.cNumber,
                  "buildingno": data?.bn,
                  "houseno": data?.hn,
                  "streetname": data?.sn,
                  "locality": data?.hn2,
                  "tehsil": data?.tn,
                  "district": data?.dn
              },
              "birthPresentaddr": {
                "city": data?.city,
                  "state": data?.sName,
                  "pinno": data?.pName,
                  "country": data?.cNumber,
                  "buildingno": data?.bn,
                  "houseno": data?.hn,
                  "streetname": data?.sn,
                  "locality": data?.hn2,
                  "tehsil": data?.tn,
                  "district": data?.dn
            },
            // "birthPermaddr": {
            //     "city": "Amritsar",
            //     "state": "STATE",
            //     "pinno": "550033",
            //     "country": "India",
            //     "buildingno": "11",
            //     "houseno": "1",
            //     "streetname": "New cross street",
            //     "locality": "asas",
            //     "tehsil": "wwww",
            //     "district": "asas"
            // },
              "registrationno": data?.RegistrationNumber,
              "hospitalname": data?.HospitalName,
               "dateofreportepoch":data.DateOfRegistration ? new Date(data.DateOfRegistration).getTime() / 1000 : null,
              "dateofbirthepoch": data.Dob ? new Date(data.Dob).getTime() / 1000 : null,
              // dateofdeathepoch: data.dDate ? new Date(data.dDate).getTime() / 1000 : null,
              "genderStr": data?.genders?.code,
              "firstname": data?.FirstName,
              "placeofbirth": "sas",
              "middlename": data?.MiddleName,
              "lastname": data?.LastName,
              "checkboxforaddress": true,
              "informantsname": "Jagankumar",
              "informantsaddress": "No 1, New cross street",
              "tenantid": "pb.amritsar",
              "excelrowindex": -1,
              "counter": 0
          }
         ]
        
      }
      /* use customiseCreateFormData hook to make some chnages to the Employee object */
     Digit.BRService.create(newData, tenantId).then((result,err)=>{
       let getdata = {...data , get: result }
       //onSelect("", getdata, "", true);
       console.log("daaaa",getdata);
       history.push({
        pathname: "/digit-ui/employee/sw/response",
        state: { responseData: getdata }, // Pass the responseData to the state
      });
     })
     .catch((e) => {
     console.log("err");
    });

    history.push({
      pathname: "/digit-ui/employee/sw/response",
      // state: { responseData: getdata }, // Pass the responseData to the state
    });

    //  history.push("/digit-ui/employee/sw/response");

    console.log("getting data",newData)
    
    console.log(data, "data");
    console.log(newData);
  };

  /* use newConfig instead of commonFields for local development in case needed */

  
  const configs = newConfig ? newConfig : newConfig;

  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#F7F7F7',
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
        fontSize: '20px',
        color: '#666',
    },
    form: {
        maxWidth: '1400px', // Adjust the maxWidth to your preference
        width: '100%',
        padding: '20px', // Add padding to the form
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
};

  return (
    <div style={styles.container}>
      <div style={styles.header}>
      <h1 style={styles.heading} >Birth Registration</h1>
      <h2 style={styles.subHeading}>(*) marked items are mandatory</h2>
      </div>
      <div style={styles.form}>
    <FormComposerV2
      //  heading={t("Birth Registration")}
       label={t("Submit Bar")}
      // description={"Description"}
      // text={"(*) marked items are mandatory"}
      config={configs.map((config) => {
        return {
          ...config,
          body: config.body.filter((a) => !a.hideInEmployee),
        };
      })}
      defaultValues={{}}
      onSubmit={onSubmit}
      fieldStyle={{ marginRight: 0 }}
    />
    </div>
    </div>
  );
};

export default Create;