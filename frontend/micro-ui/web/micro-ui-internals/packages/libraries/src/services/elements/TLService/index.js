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
    get: (data, tenantId) =>
    Request({
      data: data,
      url: Urls.tl.get,
      useCache: false,
      method: "GET",
      auth: true,
      userService: true,
      params: { tenantId },
    }),
};

export default TLService;
