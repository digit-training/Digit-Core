import React from "react";
import { useTranslation } from "react-i18next";
import { Banner } from "@egovernments/digit-ui-react-components"; // Import the Banner component you provided
import { withRouter } from "react-router-dom";
const MCollectResponse = ({ location }) => {
    const { t } = useTranslation();
    const storedResponse = localStorage.getItem("mCollectResponse");
 

  const responseObj = JSON.parse(storedResponse);
 
  // Now you can work with the response object as needed

    const isApplicationSubmitted = responseObj.responseInfo.status === "successful";
    
    var flag=true;
    const challanNumber = isApplicationSubmitted? responseObj.challans[0].challanNo: "";
    
    // Customize the message based on success or failure
    const message = isApplicationSubmitted
       ? t("Application Submitted Successfully")
       : t("Error while processing");
    return (
        <div>
            <Banner
                successful={flag}
                message={message}
                // customText={customText}
                // challanNo= {"Challan Number : " + challanNumber }
                applicationNumber={ "Challan Number : " + challanNumber }
                multipleResponseIDs={isApplicationSubmitted ? null : [responseObj.responseInfo.resMsgId]}
            />
        </div>
    );
};
export default withRouter(MCollectResponse);