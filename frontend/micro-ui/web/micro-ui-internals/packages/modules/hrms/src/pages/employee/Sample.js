import { Loader, FormComposerV2, CheckBox ,Banner } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export const newConfig = [
  {
    head: "Personal Details",
    // subHead: "Personal Details",
    body: [
      {
        inline: true,
        label: "Employee Name",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        label: "Mobile number",
        isMandatory: false,
        type: "mobileNumber",
        disable: false,
        populators: { name: "phNumber", error: "enter correct mobile no", validation: { min: 5999999999, max: 9999999999 } },
        description: "The mobile number entered must be unique",
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
          error: "Required",
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
        label: "Date of Birth",
        isMandatory: true,
        description: "Please enter a valid Date of birth",
        type: "date",
        disable: false,
        populators: { name: "dob", error: "Required", validation: { required:true, } },
      },
      {
        inline: true,
        label: "Email",
        isMandatory: false,
        type: "text",
        disable: false,
        populators: {
          name: "email",
          error: "Required",
          validation: {
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            errorMessage: "Invalid email format",
          },
        },
      },
      {
        inline: true,
        label: "Correspondence Address",
        isMandatory: true,
        //description: "address details",
        type: "text",
        disable: false,
        populators: { name: "address", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
    ],
  },
  {
    head: "Employee Details",
    body: [
      {
        isMandatory: true,
        type: "dropdown",
                key: "type",
        label: "Employement Type",
        disable: false,
        populators: {
          name: "type1",
          optionsKey: "code",
          error: "Required",
          required: true,
          mdmsConfig: {
            masterName: "EmployeeType",
            moduleName: "egov-hrms",
            localePrefix: "TYPE",
          },
        },
      },
      {
        inline: true,
        label: "Date of Appointment",
        isMandatory: true,
        type: "date",
        disable: false,
        populators: { name: "doa", error: "Required", validation: { required:true, } },
      },
      {
        label: "Employee ID",
        isMandatory: false,
        description: "ID assigned to employee by the municipality.Incase there is no ID assigned, leave the column blank for the system to generate the Employee ID.",
        // key: "additionalDetails",
        type: "text",
        disable: false,
        populators: { name: "additionalDetails", error: "error", validation: { pattern: /^[A-Za-z]+$/i } },
      },
   
      // {
      //   "type": "component",
      //   "component": "SampleComponent",
      //   "withoutLabel": true,
      //   "key": "comments"
      // },
    ],
  },
  {
    head: "Jurisdiction Details",
    body: [
      {
        isMandatory: true,
        type: "dropdown",
                key: "type2",
        label: "Hierarchy",
        disable: false,
        populators: {
          name: "type2",
          optionsKey: "name",
          error: "Required",
          required: true,
          options: [
            {
              name: "Revenue",
              code:"REVENUE"
            },
            {
              name: "Admin",
              code:"ADMIN"
            },
          ],

        },
      },
      {
        isMandatory: true,
        type: "dropdown",
                key: "type",
        label: "Boundary Type",
        disable: true,
        populators: {
          name: "type3",
          optionsKey: "name",
          error: "Required",
          required: true,
          mdmsConfig: {
            masterName: "EmployeeType",
            moduleName: "egov-hrms",
            localePrefix: "TYPE",
          },
        },
      },
      {
        isMandatory: true,
        type: "dropdown",
                key: "type4",
        label: "Boundary",
        disable: false,
        populators: {
          name: "type4",
          optionsKey: "name",
          error: "Required",
          required: true,
          options: [
            {
              name: "City A",
              code: "citya"
            },
            {
              name: "City B",
              code: "cityb"
            },
            {
              name: "City C",
              code: "cityc"
            },
          ],

        },
      },
      {
        isMandatory: true,
        type: "dropdown",
        key: "type5",
        label: "Role",
        disable: false,
        populators: {
          name: "type5",
          optionsKey: "code",
          error: "Required",
          required: true,
          mdmsConfig: {
            masterName: "roles",

            moduleName: "ACCESSCONTROL-ROLES",
            localePrefix: "",
          },
        },
      },
      // {
      //   "type": "component",
      //   "component": "SampleComponent",
      //   "withoutLabel": true,
      //   "key": "comments"
      // },
    ],
  },
  {
    head: "Assignment Details",
    subhead: "Verify entered details before submission.Assignment details cannot be edited once submitted.",
    body: [
      {
        inline: true,
        label: "Assigned From Date",
        isMandatory: true,
        type: "date",
        disable: false,
        populators: { name: "doaa", error: "Required", validation: { required:true, } },
      },
      {
        inline: true,
        label: "Assigned To Date",
        isMandatory: true,
        type: "date",
        disable: false,
        populators: { name: "dod", error: "Required", validation: { required:true, } },
        // type: "checkbox",
        // description:"Currently Assigned Here",
      },
      {
        isMandatory: true,
        type: "dropdown",
                key: "type6",
        label: "Department",
        disable: false,
        populators: {
          name: "type6",
          optionsKey: "code",
          error: "sample required message",
          required: true,
          mdmsConfig: {
            masterName: "Department",
            moduleName: "common-masters",
            localePrefix: "",
          },
        },
      },
      {
        isMandatory: true,
        type: "dropdown",
        key: "type7",
        label: "Designation",
        disable: false,
        populators: {
          name: "type7",
          optionsKey: "code",
          error: "sample required message",
          required: true,
          mdmsConfig: {
            masterName: "Designation",
            moduleName: "common-masters",
            localePrefix: "",
          },
        },
      },
      // {
      //   "type": "component",
      //   "component": "SampleComponent",
      //   "withoutLabel": true,
      //   "key": "comments"
      // },
    ],
  },
];

function transformData(data) {
  const transformedData = {
    Employees: [
      {
        // id: null, 
        // uuid: data.phNumber,
        code: data.name,
        employeeStatus: "EMPLOYED", 
        employeeType: data.type.code, 
        dateOfAppointment: new Date(data.doaa).getTime(),
        jurisdictions: [
          {
            // id: null, 
            hierarchy: data.type2.code, 
            boundary: "pg.citya", 
            boundaryType: "City", 
            tenantId: "pg.citya", 
            isActive: true 
          }
        ],
        assignments: [
          {
            designation: data.type7.code, 
            department: data.type6.code, 
            fromDate: new Date(data.doaa).getTime(),
            toDate: null, 
            govtOrderNumber: null, 
            tenantid: null,
            reportingTo: null, 
            isHOD: false, 
            isCurrentAssignment: true 
          }
        ],
        serviceHistory: [],
        education: [],
        tests: [],
        tenantId: "pg.citya",
        documents: [],
        deactivationDetails: [],
        reactivationDetails: [],
        // auditDetails: {
        //   createdBy: null, 
        //   createdDate: null, 
        //   lastModifiedBy: null, 
        //   lastModifiedDate: null 
        // },
        reActivateEmployee: null,
        user: {
          // id: null, 
          // uuid: data.phNumber, 
          userName: data.name,
          password: null, 
          salutation: null, 
          name: data.name,
          gender: data.genders.code,
          mobileNumber: data.phNumber,
          emailId: data.email,
          altContactNumber: null, 
          pan: null, 
          aadhaarNumber: null, 
          // permanentAddress: data.address,
          permanentCity: null, 
          permanentPinCode: null, 
          correspondenceCity: null, 
          correspondencePinCode: null, 
          correspondenceAddress: data.address, 
          active: true, 
          dob: new Date(data.dob).getTime(),
          pwdExpiryDate: null, 
          locale: null, 
          type: data.type5.code, 
          signature: null, 
          accountLocked: null, 
          roles: [
            {
              name: data.type5.name, 
              code: data.type5.code, 
              description: data.type5.description, 
              tenantId: "pg.citya" 
            },
          ],
          fatherOrHusbandName: null,
          relationship: null, 
          bloodGroup: null, 
          identificationMark: null, 
          photo: null, 
          createdBy: null, 
          createdDate: null,
          lastModifiedBy: null, 
          lastModifiedDate: null, 
          otpReference: null, 
          tenantId: "pg.citya" 
        },
        isActive: true // Assuming constant value
      }
    ]
  };

  return transformedData;
}

// // Usage
// const transformedEmployeeData = transformData(data);
// console.log(transformedEmployeeData);




const Create = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data," dddddddddddddddddddddddddddddd")
    const transformDataFinal =transformData(data);
    Digit.HRMSService.create(transformDataFinal, tenantId).then((result,err)=>{
      let getdata = {...data , get: result }
      localStorage.setItem('myResultKey', JSON.stringify(getdata));
      // onSelect("", getdata, "", true);
      console.log("daaaa",getdata);
    })
    .catch((e) => {
    console.log("err");
   });

   history.push("/works-ui/citizen/hrms/response");

   console.log("getting data",transformDataFinal);
  //   console.log(data, "data");
  };

  const configs = newConfig ? newConfig : newConfig;

  return (
    <div>
    <h1>Create Employee</h1>
    <FormComposerV2
      // heading={t("Create Employee")}
      label={t("Submit")}
      // description={"Description"}
      // text={"Sample Text if required"}
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
  );
};

export default Create;