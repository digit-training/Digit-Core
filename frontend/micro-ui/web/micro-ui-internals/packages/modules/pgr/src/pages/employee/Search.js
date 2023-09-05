import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Header, InboxSearchComposer, Loader, Button, AddFilled } from "@egovernments/digit-ui-react-components";
import searchWageSeekerConfig from "../../configs/searchWageSeekerConfig";
import { useHistory, useLocation } from "react-router-dom";

const Search = () => {
  const { t } = useTranslation();
  const history = useHistory()
  const location = useLocation()

  const wageSeekerSession = Digit.Hooks.useSessionStorage("WAGE_SEEKER_CREATE", {});
  const [sesionFormData, clearSessionFormData] = wageSeekerSession;

  const configs = searchWageSeekerConfig();
  const configModuleName = Digit.Utils.getConfigModuleName()
  const tenant = Digit.ULBService.getStateId();
  const { isLoading, data } = Digit.Hooks.useCustomMDMS(
      tenant,
      configModuleName,
   [
    {
      name: "SearchIndividualConfig",
    },
  ]);

  if (isLoading) return <Loader />;
  return (
    <React.Fragment>
      <div className="jk-header-btn-wrapper">
        <Header className="works-header-search">{t(configs?.label)}</Header>
          <Button
            label={"CREATE_NEW_COMPLAINT"}
            variation="secondary"
            icon={<AddFilled />}
            onButtonClick={() => {
              history.push(`/${window?.contextPath}/employee/ws/create`)
            }}
            type="button"
          />
        
      </div>
      <div className="inbox-search-wrapper">
        <InboxSearchComposer configs={configs}></InboxSearchComposer>
      </div>
    </React.Fragment>
  );
};

export default Search;
