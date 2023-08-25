import React from "react";
import { useTranslation } from "react-i18next";
import { Banner } from "@egovernments/digit-ui-react-components"; // Import the Banner component you provided
import { withRouter } from "react-router-dom";
const OrgResponse = ({ location }) => {
    // const { t } = useTranslation();
    // const responseData = location?.state?.responseData;
    // const isApplicationSubmitted = responseData?.get?.ResponseInfo?.status === "successful";
    var aaa=true;
    // const applicationNumber = responseData?.get?.organisations[0]?.applicationNumber;
    // Customize the message based on success or failure
    // const message = isApplicationSubmitted
    //    ? t("Application Submitted Successfully")
    //    : t("Error while processing");
    return (
        <div>
            <Banner
                successful={aaa}
                message={"Project Created"}
                // customText={customText}
                // applicationNumber={isApplicationSubmitted ? "Application number : " + applicationNumber : ""}
                // multipleResponseIDs={isApplicationSubmitted ? null : [responseData?.get?.resMsgId]}
            />
        </div>
    );
};
export default withRouter(OrgResponse);