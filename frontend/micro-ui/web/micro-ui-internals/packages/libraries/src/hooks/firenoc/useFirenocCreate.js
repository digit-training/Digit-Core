import { useQuery, useMutation } from "react-query";


import FireNOCService from "../../services/elements/FireNOC";

export const useFirenocCreate = (tenantId, config = {}) => {
  return useMutation((data) => FireNOCService.create(data, tenantId));
};

export default useFirenocCreate;
