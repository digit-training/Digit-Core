import { AppContainer, BreadCrumb, PrivateRoute } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";
import OrgCreate from "./OrgCreate";
import OrgInbox from "./OrgInbox";
import OrgSearch from "./OrgSearch";
import OrgResponse from "./OrgResponse";

const ProjectBreadCrumb = ({ location }) => {
  const { t } = useTranslation();
  const crumbs = [
    {
      path: `/${window?.contextPath}/employee`,
      content: t("HOME"),
      show: true,
    },
    {
      path: `/${window?.contextPath}/employee`,
      content: t(location.pathname.split("/").pop()),
      show: true,
    },
  ];
  return <BreadCrumb crumbs={crumbs} spanStyle={{ maxWidth: "min-content" }} />;
};

const App = ({ path, stateCode, userType, tenants }) => {
  const commonProps = { stateCode, userType, tenants, path };

  return (
    <Switch>
      <AppContainer className="ground-container">
        <React.Fragment>
          <ProjectBreadCrumb location={location} />
        </React.Fragment>
        <PrivateRoute path={`${path}/create`} component={() => <OrgCreate></OrgCreate>} />
        <PrivateRoute path={`${path}/inbox`} component={() => <OrgInbox></OrgInbox>} />
        <PrivateRoute path={`${path}/response`} component={() => <OrgResponse></OrgResponse>} />
        <PrivateRoute path={`${path}/search`} component={() => <OrgSearch></OrgSearch>} />
      </AppContainer>
    </Switch>
  );
};

export default App;
