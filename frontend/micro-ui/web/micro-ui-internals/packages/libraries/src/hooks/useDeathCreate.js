import { useQuery, useMutation } from "react-query";

import DeathService from "../services/elements/death";

export const useDeathCreate = (tenantId, config = {}) => {
  return useMutation((data) => DeathService.create(data, tenantId));
};

export default useDeathCreate;
