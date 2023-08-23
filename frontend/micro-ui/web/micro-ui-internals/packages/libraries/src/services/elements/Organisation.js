import Urls from "../atoms/urls";
import { Request } from "../atoms/Utils/Request";

export const ORGService = {

    create: (data, tenantId) =>
        Request({
            data: data,
            url: Urls.organisation.create,
            useCache: false,
            method: "POST",
            auth: true,
            userService: true,
            params: { tenantId },
        }),
    get: (data, tenantId) =>
        Request({
            data: data,
            url: Urls.organisation.get,
            useCache: false,
            method: "GET",
            auth: true,
            userService: true,
            params: { tenantId },
        }),
};

// export default ORGService;expor
