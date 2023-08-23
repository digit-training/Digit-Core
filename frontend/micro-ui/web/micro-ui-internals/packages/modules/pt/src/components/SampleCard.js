import { HRIcon, EmployeeModuleCard, AttendanceIcon, PropertyHouse } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const SampleCard = () => {
  const { t } = useTranslation();

  const propsForModuleCard = {
    Icon: <PropertyHouse />,
    moduleName: t("ES_TITLE_PROPERTY_TAX"),
    kpis: [],
    links: [
      {
        label: t("Create"),
        link: `/${window?.contextPath}/employee/pt/create`,
      },
      // {
      //   label: t("Inbox"),
      //   link: `/${window?.contextPath}/employee/pt/inbox`,
      // },
      {
        label: t("Search"),
        link: `/${window?.contextPath}/employee/pt/search`,
      },
    ],
  };

  return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default SampleCard;
