import Urls from "../atoms/urls";
import { Request } from "../atoms/Utils/Request";

const BRService = {
  
  create: (data, tenantId) =>
    Request({
      data: data,
      url: Urls.br.create,
      useCache: false,
      method: "POST",
      auth: true,
      userService: true,
      params: { tenantId },
    }),
    get: (data, tenantId) =>
    Request({
      data: data,
      url: Urls.br.get,
      useCache: false,
      method: "GET",
      auth: true,
      userService: true,
      params: { tenantId },
    }),
};

export default BRService;
