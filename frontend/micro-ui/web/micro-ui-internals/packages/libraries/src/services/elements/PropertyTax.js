import Urls from "../atoms/urls";
import { Request } from "../atoms/Utils/Request";

const PTService = {
  create: (data, tenantId) =>
    Request({
      data: data,
      url: Urls.pt.create,
      useCache: false,
      method: "POST",
      auth: true,
      userService: true,
      params: { tenantId },
    }),
  get: (tenantId, mobileNumber) =>
    Request({
      // data: data,
      url: Urls.pt.search,
      useCache: false,
      method: "POST",
      auth: true,
      userService: true,
      params: { tenantId, mobileNumber },
    }),
};

export default PTService;
