import { HRIcon, EmployeeModuleCard, AttendanceIcon, PropertyHouse } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const OrgCard = () => {

  const { t } = useTranslation();

  const propsForModuleCard = {
    Icon: <PropertyHouse />,
    moduleName: t("Organisation"),
    kpis: [

    ],
    links: [

      {
        label: t("Create"),
        link: `/${window?.contextPath}/employee/works/create`,
      },
      {
        label: t("Inbox"),
        link: `/${window?.contextPath}/employee/works/inbox`,
      },
      {
        label: t("Search"),
        link: `/${window?.contextPath}/employee/works/search`,
      },
    ],
  };

  return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default OrgCard;