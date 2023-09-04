import Urls from "../atoms/urls";
import { Request } from "../atoms/Utils/Request";

export const MCollectService = {
  search: (searchParams) =>
    Request({
      url: Urls.mcollect.search,
      useCache: false,
      method: "POST",
      auth: true,
      userService: true,
      params: searchParams,
    }),
  create: (details, tenantId) =>
    Request({
      url: Urls.mcollect.create,
      data: details,
      useCache: false,
      method: "POST",
      params: { tenantId },
      auth: true,
      userService: true,
    }),
  
};
