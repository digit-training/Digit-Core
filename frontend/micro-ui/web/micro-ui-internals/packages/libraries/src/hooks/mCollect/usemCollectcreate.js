import { useQuery, useMutation } from "react-query";
import { MCollectService } from "../../services/elements/MCollect";


export const usemCollectCreate = (tenantId, config = {}) => {
  return useMutation((data) => MCollectService.create(data, tenantId));
};

export default usemCollectCreate;
