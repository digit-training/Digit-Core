import { useQuery, useMutation } from "react-query";

import ORGService from "../../services/elements/Organisation";

export const useORGCreate = (tenantId, config = {}) => {
    return useMutation((data) => ORGService.create(data, tenantId));
};

export default useORGCreate;
