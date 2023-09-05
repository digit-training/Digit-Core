import React from "react";
import { useTranslation } from "react-i18next";
import { Banner } from "@egovernments/digit-ui-react-components";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
// import { withRouter } from "react-router-dom";

function FireNocResponse({location}) {
  const { t } = useTranslation();
  const responseData = location?.state?.responseData;
  const isApplicationSubmitted = responseData?.get?.ResponseInfo?.status === "successful"
  // console.log(location);
  let applicationNumber;
  let message;
  let errorMessage;

  if (isApplicationSubmitted){
    applicationNumber = responseData?.get?.FireNOCs[0]?.fireNOCDetails?.applicationNumber;
    message = "Application submitted successfully";
  }
  else{
    message = "Error while processing"
    errorMessage = responseData?.get?.message
  }

  return <div>
    <Banner
        successful={isApplicationSubmitted}
        message={message}
        applicationNumber={isApplicationSubmitted ? "Application number: " + applicationNumber : errorMessage}>
    </Banner>
    </div>;
}

export default withRouter(FireNocResponse);