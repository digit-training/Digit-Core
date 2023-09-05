import Urls from "../atoms/urls";
import { Request } from "../atoms/Utils/Request";

const FireNOCService = {
  create: (data, tenantId) =>
    Request({
      data: data,
      url: Urls.firenoc.create,
      useCache: false,
      method: "POST",
      auth: true,
      userService: true,
      params: { tenantId },
    }),
  search: (data, tenantId, searchParams) =>
    Request({
      data: data,
      url: Urls.firenoc.search,
      useCache: false,
      method: "POST",
      auth: true,
      userService: true,
      params: { tenantId, ...searchParams },
    }),
};

export default FireNOCService;
