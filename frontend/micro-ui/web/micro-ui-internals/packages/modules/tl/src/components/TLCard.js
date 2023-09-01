import { HRIcon, EmployeeModuleCard, AttendanceIcon, PropertyHouse , TLIcon} from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const TLCard = () => {
 
  const { t } = useTranslation();

  const propsForModuleCard = {
    Icon: <TLIcon />,
    moduleName: t("TL"),
    kpis: [

    ],
    links: [
   
      {
        label: t("Create"),
        link: `/${window?.contextPath}/employee/tl/create`,
      },
      {
        label: t("Inbox"),
        link: `/${window?.contextPath}/employee/tl/inbox`,
      },
      {
        label: t("Search"),
        link: `/${window?.contextPath}/employee/tl/search`,
      },
    ],
  };

  return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default TLCard;