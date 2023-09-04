import React, { useEffect , useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import './SearchWageSeeker.css';


const ViewPage = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const currentPath = location.pathname;
    const parts = currentPath.split('challanNo=');
    const challanNo = parts[1];
  
    // State to store the data from the API call
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const searchParams = {
        tenantId: "pg.citya",
        challanNo: challanNo,
      };
  
      Digit.MCollectService.search(searchParams)
        .then((result, err) => {
          if (err) {
            console.error("Error fetching data:", err);
            return;
          }
  
          // Store the data in the state
          setData(result);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, [challanNo]);
  console.log(data);
    // Render the data once it's available
    return (
        <div className="custom-container">
       <div className="head">
                <h1>Challan Details</h1>
              </div>
          {data && (
            <div className="card">
            
              <div className="card-body">
                <p><strong>Challan No:</strong> {data.challans[0].challanNo}</p>
                <p><strong>Business Service:</strong> {data.challans[0].businessService}</p>
                <p><strong>Challan Validity:</strong> {data.challanValidity} day(s)</p>
                <p><strong>Total Amount Collected:</strong> {data.totalAmountCollected}</p>
              </div>
              <div className="card-header">
                <h2>Citizen Details</h2>
              </div>
              <div className="card-body">
                <p><strong>Name:</strong> {data.challans[0].citizen.name}</p>
                <p><strong>Mobile Number:</strong> {data.challans[0].citizen.mobileNumber}</p>
                {/* Add more citizen details here as needed */}
              </div>
            </div>
          )}
        </div>
      );
  };
  
  export default ViewPage;
  