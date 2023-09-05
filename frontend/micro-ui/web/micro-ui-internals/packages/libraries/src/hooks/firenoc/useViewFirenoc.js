import { View } from "../../services/molecules/Firenoc/View";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

const useViewFirenoc = ({ tenantId, data, searchParams, config = {} }) => {
  console.log(searchParams);
  const { t } = useTranslation();
  return useQuery(["FIRENOC", tenantId, searchParams], () => View.fetchFirenocDetails(t, tenantId, data, searchParams), config);
};

export default useViewFirenoc;
