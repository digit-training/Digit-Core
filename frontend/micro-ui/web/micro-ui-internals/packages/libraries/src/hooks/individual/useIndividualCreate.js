import { useQuery, useMutation } from "react-query";

import IndividualService from "../../services/elements/IndividualService";

export const useIndividualCreate = (tenantId, config = {}) => {
  return useMutation((data) => IndividualService.create(data, tenantId));
};

export default useIndividualCreate;
