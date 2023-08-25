import { AppContainer, BreadCrumb,PrivateRoute } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";
import Br from "./Br";
import BrSearch from "./BrSearch";
import BrInbox from "./BrInbox";
import BrResponse from "./BrResponse";


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
        <PrivateRoute path={`${path}/create`} component={() => <Br></Br>} />
          <PrivateRoute path={`${path}/inbox`} component={() => <BrInbox></BrInbox>} />
          <PrivateRoute path={`${path}/search`} component={() => <BrSearch></BrSearch>} />
          <PrivateRoute path={`${path}/response`} component={() => <BrResponse></BrResponse>} />
        </AppContainer>
    </Switch>
  );
};

export default App;
