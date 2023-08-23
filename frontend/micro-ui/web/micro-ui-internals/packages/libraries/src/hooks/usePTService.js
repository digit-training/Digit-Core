import { useQuery, useMutation } from "react-query";

import PTService from "../services/elements/PropertyTax.js";

export const usePTCreate = (tenantId, config = {}) => {
  return useMutation((data) => PTService.create(data, tenantId));
};

export default usePTCreate;
