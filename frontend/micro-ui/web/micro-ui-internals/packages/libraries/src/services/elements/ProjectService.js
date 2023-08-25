import Urls from "../atoms/urls";
import { Request } from "../atoms/Utils/Request";

const ProjectService = {
  
  create: (data, tenantId) =>
    Request({
      data: data,
      url: Urls.project.create,
      useCache: false,
      method: "POST",
      auth: true,
      userService: true,
      params: { tenantId },
    }),
    get: (data, tenantId) =>
    Request({
      data: data,
      url: Urls.project.get,
      useCache: false,
      method: "GET",
      auth: true,
      userService: true,
      params: { tenantId },
    }),
};

export default ProjectService;
