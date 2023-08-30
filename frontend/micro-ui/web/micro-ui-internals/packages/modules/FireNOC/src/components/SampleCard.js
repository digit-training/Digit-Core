import { HRIcon, EmployeeModuleCard, AttendanceIcon, PropertyHouse, FirenocIcon } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const FIRENOCCard = () => {
 
  const { t } = useTranslation();

  const propsForModuleCard = {
    Icon: <FirenocIcon />,
    moduleName: t("FIRENOC"),
    kpis: [

    ],
    links: [
   
      {
        label: t("Create"),
        link: `/${window?.contextPath}/employee/noc/create`,
      },
      // {
      //   label: t("Inbox"),
      //   link: `/${window?.contextPath}/employee/noc/inbox`,
      // },
      {
        label: t("Search"),
        link: `/${window?.contextPath}/employee/noc/search`,
      },
    ],
  };

  return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default FIRENOCCard;