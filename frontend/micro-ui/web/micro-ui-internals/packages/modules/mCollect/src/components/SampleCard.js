import { HRIcon, EmployeeModuleCard, AttendanceIcon, PropertyHouse , MCollectIcon  } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const mCollectCard = () => {
 
  const { t } = useTranslation();

  const propsForModuleCard = {
    Icon: <MCollectIcon />,
    moduleName: t("MCollect"),
    kpis: [

    ],
    links: [
   
      {
        label: t("Create"),
        link: `/${window?.contextPath}/employee/MCollect/create`,
      },
      {
        label: t("Inbox"),
        link: `/${window?.contextPath}/employee/MCollect/inbox`,
      },
      {
        label: t("Search"),
        link: `/${window?.contextPath}/employee/MCollect/search`,
      },
    ],
  };

  return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default mCollectCard;