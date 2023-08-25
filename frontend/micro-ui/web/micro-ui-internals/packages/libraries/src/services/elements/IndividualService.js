import Urls from "../atoms/urls";
import { Request } from "../atoms/Utils/Request";

const IndividualService = {
  
  create: (data, tenantId) =>
    Request({
      data: data,
      url: Urls.Masters.create,
      useCache: false,
      method: "POST",
      auth: true,
      userService: true,
      params: { tenantId },
    }),
    get: (data, tenantId) =>
    Request({
      data: data,
      url: Urls.Masters.search,
      useCache: false,
      method: "POST",
      auth: true,
      userService: true,
      params: { tenantId },
    }),
};

export default IndividualService;
