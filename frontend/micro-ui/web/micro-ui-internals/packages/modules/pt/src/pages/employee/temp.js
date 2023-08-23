import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Header, InboxSearchComposer, Loader, Button, AddFilled } from "@egovernments/digit-ui-react-components";
import searchWageSeekerConfig from "../../configs/search/config";
import { useHistory, useLocation } from "react-router-dom";

const SearchWageSeeker = () => {
  let configs = searchWageSeekerConfig();
  // console.log(configs);
  return (
    <div>
      <div className="inbox-search-wrapper">
        <InboxSearchComposer configs={configs}></InboxSearchComposer>
      </div>
    </div>
  );
};

export default SearchWageSeeker;
