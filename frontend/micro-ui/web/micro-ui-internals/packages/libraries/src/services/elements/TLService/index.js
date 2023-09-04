import { Request } from "../../atoms/Utils/Request";
import Urls from "../../atoms/urls"

const TLService = {
  
  create: (data, tenantId) =>
    Request({
      data: data,
      url: Urls.tl.create,
      useCache: false,
      method: "POST",
      auth: true,
      userService: true,
      params: { tenantId },
    }),
    get: (params) =>
    Request({
      url: Urls.tl.search,
      useCache: false,
      method: "POST",
      auth: true,
      userService: true,
      params: params,
    }),
};

export default TLService;
