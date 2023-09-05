// import { getThumbnails } from "../../../utils/thumbnail";
// import { BankAccountService } from "../../elements/BankAccount";
import FireNOCService from "../../elements/FireNOC";

const transformViewDataToApplicationDetails = async (t, data, tenantId) => {
  if (data?.FireNOCs[0]?.length === 0) throw new Error("No data found");
  const individual = data.FireNOCs[0];
  const headerLocale = Digit.Utils.locale.getTransformedLocale(tenantId);

  const headerDetails = {
    title: " ",
    asSectionHeader: true,
    values: [
      { title: "Application number", value: individual?.fireNOCDetails?.applicationNumber || t("NA") },
      { title: "FireNOC number", value: individual?.fireNOCNumber || t("NA") },
    ],
  };

  const propertyDetails = {
    title: "Property Details",
    asSectionHeader: true,
    values: [
      {
        title: "Property Type",
        value: individual?.fireNOCDetails?.fireNOCType,
      },
      {
        title: "Name Of Building",
        value: individual?.fireNOCDetails?.buildings[0]?.name,
      },
      {
        title: "Building Usage Type as per NBC",
        value: individual?.fireNOCDetails?.buildings[0]?.usageType,
      },
      {
        title: "No. Of Floors (Excluding Basement, Including Ground Floor)",
        value: individual?.fireNOCDetails?.buildings[0]?.uoms[0]?.value,
      },
      {
        title: "No. Of Basements",
        value: individual?.fireNOCDetails?.buildings[0]?.uoms[1]?.value,
      },
      {
        title: "Plot Size (in Sq meters)",
        value: individual?.fireNOCDetails?.buildings[0]?.uoms[2]?.value,
      },
      {
        title: "Height of the Building from Ground level (in meters)",
        value: individual?.fireNOCDetails?.buildings[0]?.uoms[4]?.value,
      },
      {
        title: "Total built up area(in sq. meter)",
        value: individual?.fireNOCDetails?.buildings[0]?.uoms[5]?.value,
      }
    ],
  };

  const applicantDetails = {
    title: "Applicant Details",
    asSectionHeader: true,
    values: [
      {
        title: "Mobile No.",
        value: individual?.fireNOCDetails?.applicantDetails?.owners[0]?.mobileNumber,
      },
      {
        title: "Name",
        value: individual?.fireNOCDetails?.applicantDetails?.owners[0]?.name,
      },
      {
        title: "Gender",
        value: individual?.fireNOCDetails?.applicantDetails?.owners[0]?.gender,
      },
      {
        title: "Father/Husband's Name",
        value: individual?.fireNOCDetails?.applicantDetails?.owners[0]?.fatherOrHusbandName,
      },
      {
        title: "Relationship",
        value: individual?.fireNOCDetails?.applicantDetails?.owners[0]?.relationship,
      },
      {
        title: "Date Of Birth",
        value: individual?.fireNOCDetails?.applicantDetails?.owners[0]?.dob,
      },
      {
        title: "Email",
        value: individual?.fireNOCDetails?.applicantDetails?.owners[0]?.emailId,
      },
      {
        title: "Correspondence Address",
        value: individual?.fireNOCDetails?.applicantDetails?.owners[0]?.correspondenceAddress,
      },
    ],
  };

  const applicationDetails = { applicationDetails: [headerDetails, propertyDetails, applicantDetails] };
  console.log(applicationDetails, "applicationDetails");

  return {
    applicationDetails,
    applicationData: individual,
    processInstancesDetails: {},
    workflowDetails: {},
  };
};

// const fetchBankDetails = async (data, tenantId) => {
//   if (data?.Individual?.length === 0) throw new Error("No data found");

//   const individual = data.Individual[0];
//   const bankDetailPayload = { bankAccountDetails: { tenantId, serviceCode: "IND", referenceId: [individual?.id] } };
//   const bankDetails = await BankAccountService.search(bankDetailPayload, {});

//   return {
//     individual,
//     bankDetails: bankDetails?.bankAccounts,
//   };
// };

export const View = {

  fetchFirenocDetails: async (t, tenantId, data, searchParams) => {
    try {
      const response = await FireNOCService.search(data, tenantId, searchParams);
      return transformViewDataToApplicationDetails(t, response, tenantId);
    } catch (error) {
      throw new Error(error?.response?.data?.Errors[0].message);
    }
  },

};
