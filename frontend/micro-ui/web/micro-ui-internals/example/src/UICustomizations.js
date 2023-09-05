import { Link } from "react-router-dom";
import {Button} from "@egovernments/digit-ui-react-components";
import _ from "lodash";
import { useHistory } from "react-router-dom";

//create functions here based on module name set in mdms(eg->SearchProjectConfig)
//how to call these -> Digit?.Customizations?.[masterName]?.[moduleName]
// these functions will act as middlewares
var Digit = window.Digit || {};



const businessServiceMap = {
 
  "muster roll": "MR"
};

const inboxModuleNameMap = {
  "muster-roll-approval": "muster-roll-service",
};

export const UICustomizations = {
  searchPGRConfig:{
    customValidationCheck: (data) => {
      const { createdFrom, createdTo } = data;
      if ((createdFrom === "" && createdTo !== "") || (createdFrom !== "" && createdTo === ""))
        return { warning: true, label: "ES_COMMON_ENTER_DATE_RANGE" };

      return false;
    },
    preProcess: (data) => {
      data.params = { ...data.params, tenantId: Digit.ULBService.getCurrentTenantId() };

      let requestBody = { ...data.body.Individual };
      const pathConfig = {
        name: "name.givenName",
      };
      const dateConfig = {
        createdFrom: "daystart",
        createdTo: "dayend",
      };
      const selectConfig = {
        wardCode: "wardCode[0].code",
        socialCategory: "socialCategory.code",
      };
      const textConfig = ["name", "individualId"]
      let Individual = Object.keys(requestBody)
        .map((key) => {
          if (selectConfig[key]) {
            requestBody[key] = _.get(requestBody, selectConfig[key], null);
          } else if (typeof requestBody[key] == "object") {
            requestBody[key] = requestBody[key]?.code;
          } else if (textConfig?.includes(key)) {
            requestBody[key] = requestBody[key]?.trim()
          }
          return key;
        })
        .filter((key) => requestBody[key])
        .reduce((acc, curr) => {
          if (pathConfig[curr]) {
            _.set(acc, pathConfig[curr], requestBody[curr]);
          } else if (dateConfig[curr] && dateConfig[curr]?.includes("day")) {
            _.set(acc, curr, Digit.Utils.date.convertDateToEpoch(requestBody[curr], dateConfig[curr]));
          } else {
            _.set(acc, curr, requestBody[curr]);
          }
          return acc;
        }, {});

      data.body.Individual = { ...Individual };
      return data;
    },
    additionalCustomizations: (row, key, column, value, t, searchResult) => {
      const history = useHistory();
 
      switch (key) {

        case "Name":
          return (
            <span className="link">
              <Link to={`/${window.contextPath}/employee/ws/view?serviceRequestId=${row?.service?.serviceRequestId}`}>
                {row?.service?.citizen?.name}
              </Link>
            </span>
          );


        // case "Name":
        // return <span style={{ whiteSpace: "nowrap" }}>{String(row?.service?.citizen?.name)}</span> 

        case "Service Request ID":
        return <span style={{ whiteSpace: "nowrap" }}>{String(row?.service?.serviceRequestId)}</span> 

        case "Service Code":
        return <span style={{ whiteSpace: "nowrap" }}>{String(row?.service?.serviceCode)}</span> 

        case "Source":
        return <span style={{ whiteSpace: "nowrap" }}>{String(row?.service?.source)}</span> 

        case "City":
        return <span style={{ whiteSpace: "nowrap" }}>{String(row?.service?.address?.city)}</span> 

        case "Action":
        return <span style={{ whiteSpace: "nowrap" }}>{String(row?.workflow?.action)}</span> 

        case "Mobile Number":
        return <span style={{ whiteSpace: "nowrap" }}>{String(row?.service?.citizen?.mobileNumber)}</span> 

        default:
          return (
            <Button
              label={"View"}
              variation="secondary"
              onButtonClick={() => {
                history.push(`/${window.contextPath}/employee/ws/view?serviceRequestId=${row?.service?.serviceRequestId}`)
              }}
              type="button"
            />
          );
      }
    },
    MobileDetailsOnClick: (row, tenantId) => {
      let link;
      Object.keys(row).map((key) => {
        if (key === "MASTERS_WAGESEEKER_ID")
          link = `/${window.contextPath}/employee/masters/view-wageseeker?tenantId=${tenantId}&wageseekerId=${row[key]}`;
      });
      return link;
    },
    additionalValidations: (type, data, keys) => {
      if (type === "date") {
        return data[keys.start] && data[keys.end] ? () => new Date(data[keys.start]).getTime() <= new Date(data[keys.end]).getTime() : true;
      }
    }
  }
};
