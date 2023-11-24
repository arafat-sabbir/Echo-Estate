import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Auth/UseAuth/useAuth";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";

const useProperties = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: properties = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["properties", user],
    queryFn: async () => {
      const res = await axiosSecure.get("/getProperties");
      return res.data;
    },
  });
  return { properties, refetch, isLoading, isError };
};

export default useProperties;
