import { useQuery, useMutation } from "react-query";

import TLService from "../../services/elements/TLService";

export const useTLCreate = (tenantId, config = {}) => {
  return useMutation((data) => TLService.create(data, tenantId));
};

export default useTLCreate;
