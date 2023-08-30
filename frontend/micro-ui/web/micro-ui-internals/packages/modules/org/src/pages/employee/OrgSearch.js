import React from "react";
import { useTranslation } from "react-i18next";
import { Header, InboxSearchComposer, Loader, Button, AddFilled } from "@egovernments/digit-ui-react-components";
import searchOrganisationConfig from "../../configs/SearchOrganisationConfig";
import { useHistory } from "react-router-dom";

const SearchOrganisation = () => {
  const { t } = useTranslation();
  const history = useHistory()
  const orgConfigs = searchOrganisationConfig();
  const configModuleName = Digit.Utils.getConfigModuleName()
  const tenant = Digit.ULBService.getStateId();
  const { isLoading } = Digit.Hooks.useCustomMDMS(
    tenant,
    configModuleName,
    [
      {
        name: "SearchOrganisationConfig",
      },
    ],
  );

  let configs = orgConfigs;
  // console.log(configs?.label, " ccccccccccc");

  if (isLoading) return <Loader />;
  return (
    <React.Fragment>
      <div className="jk-header-btn-wrapper">
        <Header className="works-header-search">{t(configs?.label)}</Header>
        {Digit.Utils.didEmployeeHasRole(configs?.actionRole) && (
          <Button
            label={"Create Organisation"}
            variation="secondary"
            icon={<AddFilled />}
            onButtonClick={() => {
              history.push(`/${window?.contextPath}/employee/works/create`)
            }}
            type="button"
          />
        )}
      </div>
      <div className="inbox-search-wrapper">
        <InboxSearchComposer configs={orgConfigs}></InboxSearchComposer>
      </div>
    </React.Fragment>
  );
};

export default SearchOrganisation;