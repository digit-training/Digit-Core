import React from "react";
import { useTranslation } from "react-i18next";
import { Banner } from "@egovernments/digit-ui-react-components"; // Import the Banner component you provided
import { withRouter } from "react-router-dom";
export const PgrResponse = () => {
    var aaa=true;

    return (
        <div>
            <Banner
                successful={aaa}
                message={"Application Submitted"}
            />
        </div>
    );
};