import { HRIcon, EmployeeModuleCard, AttendanceIcon, PropertyHouse } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const pgrCard = () => {
 
  const { t } = useTranslation();

  const propsForModuleCard = {
    Icon: <PropertyHouse />,
    moduleName: t("pgr"),
    kpis: [

    ],
    links: [
   
      {
        label: t("Create"),
        link: `/${window?.contextPath}/employee/ws/create`,
      },
      {
        label: t("Inbox"),
        link: `/${window?.contextPath}/employee/WS/inbox`,
      },
      {
        label: t("Search"),
        link: `/${window?.contextPath}/employee/ws/search`,
      },
    ],
  };

  return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default pgrCard;