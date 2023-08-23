import React from "react";
import { useTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { Banner } from "@egovernments/digit-ui-react-components";

const Response = ({ location }) => {
  const { t } = useTranslation();
  const responseData = location?.state?.responseData;
  const isApplicationSubmitted = responseData?.get?.ResponseInfo?.status === "successful";
  const applicationNumber = responseData?.get?.Properties[0]?.propertyId;

  const message = isApplicationSubmitted ? t("Application Submitted Successfully") : t("Error Cannot create application");

  return (
    <div>
      <Banner
        successful={isApplicationSubmitted}
        message={message}
        applicationNumber={isApplicationSubmitted ? "Application Number: " + applicationNumber : ""}
      />
    </div>
  );
};

export default withRouter(Response);
