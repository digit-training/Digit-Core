import { HRIcon, EmployeeModuleCard, AttendanceIcon, PropertyHouse } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const DeathCard = () => {

    const { t } = useTranslation();

    const propsForModuleCard = {
        Icon: <PropertyHouse />,
        moduleName: t("Death"),
        kpis: [

        ],
        links: [

            {
                label: t("Create"),
                link: `/${window?.contextPath}/employee/sw/create`,
            },
            {
                label: t("Inbox"),
                link: `/${window?.contextPath}/employee/sw/inbox`,
            },
            {
                label: t("Search"),
                link: `/${window?.contextPath}/employee/sw/search`,
            },
        ],
    };

    return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default DeathCard;