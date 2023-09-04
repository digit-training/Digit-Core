import React, { useEffect, useState } from "react";
import TLService from "../../../../../libraries/src/services/elements/TLService";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const LicenseCard = (licenseData ) => {
    licenseData = licenseData?.licenseData?.Licenses?.[0];
    var epochTimestamp = licenseData?.tradeLicenseDetail?.auditDetails?.createdTime;
    const date = new Date(epochTimestamp);
    // console.log(date);
    const year = date?.getFullYear();
    const month = date?.getMonth() + 1; // Months are zero-based, so add 1
    const day = date?.getDate();
    const hours = date?.getHours();
    const minutes = date?.getMinutes();
    const seconds = date?.getSeconds();

    // // Format the date and time as a string
    const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    console.log(date.toDateString());

  return (
    <div className="card">
        {console.log(licenseData)}
      <div className="card-header">
        <h4>Licenses</h4>
      </div>
      <div className="card-body">
        <ul>
          <li><strong>Action:</strong> {licenseData?.action}</li>
          <li><strong>Application Number:</strong> {licenseData?.applicationNumber}</li>
          <li><strong>Application Type:</strong> {licenseData?.applicationType}</li>
          <li><strong>Business Service:</strong> {licenseData?.businessService}</li>
          <li><strong>Financial Year:</strong> {licenseData?.financialYear}</li>
          <br/>
          <ul>
                <li><strong>Locality:</strong> {licenseData?.tradeLicenseDetail?.address?.locality?.name}</li>
                <li><strong>Created Time:</strong> {date.toDateString()}</li>
                <li><strong>Structure Type:</strong> {licenseData?.tradeLicenseDetail?.structureType.split('.')[0]}</li>
                <li><strong>Sub Structure Type:</strong> {licenseData?.tradeLicenseDetail?.structureType.split('.')[1]}</li>
                <li><strong>Owner Name:</strong> {licenseData?.tradeLicenseDetail?.owners[0]?.name}</li>
                <li><strong>Owner Mobile Number:</strong> {licenseData?.tradeLicenseDetail?.owners[0]?.mobileNumber}</li>
                {/* <li><strong>Financial Year:</strong> {licenseData?.tradeLicenseDetail?.owners[0]?.mobileNumber}</li> */}
          </ul>
        </ul>
      </div>
    </div>
  );
};


const SampleView = () => {
    const location = useLocation();

    const url = new URL('http://example.com' + location.search); // Add a dummy base URL if your URL is relative

    // Get the search params
    const queryParams = url.searchParams;
    const applicationNumber = queryParams.get("applicationNumber");
    const tenantId = Digit.ULBService.getCurrentTenantId();
    const [isLoading,setisLoading] = useState(true);
    const [data,setData] = useState();

    useEffect(()=>{
        console.log("I AM RUNNING");
        const params = {
            tenantId : tenantId,
            applicationNumber : applicationNumber
        }
        console.log(params);
        TLService.get(params).then((data)=>{
            setisLoading(false);
            setData(data);
            // console.log(data);
        });
    },[])
   

    return( 
    <div>
         {/* I AM HERE TO SHOW YOU ALL THE DATA ABOUT THIS TL */}
        { isLoading ? <div>Loading...</div> : <LicenseCard licenseData={data}/>}
    </div>
    );

}

export default SampleView;

// PB-TL-2023-09-04-051642