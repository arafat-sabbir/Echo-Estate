import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Auth/UseAuth/useAuth";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";


const useAddedProperty = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data:Properties=[], isLoading, isError, refetch } = useQuery({
    queryKey: ["getuserinfo"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/getProperty?email=${user?.email}`);
      return res.data;
    },
  });
  return { Properties, refetch, isLoading, isError };
};

export default useAddedProperty;
 