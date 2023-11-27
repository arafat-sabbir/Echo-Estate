import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Auth/UseAuth/useAuth";
import useAxiosPublic from "../AxiosPublic/useAxiosPublic";


const useAddedProperty = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data:Properties=[], isLoading, isError, refetch } = useQuery({
    queryKey: ["getuserinfo"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/getProperty?email=${user?.email}`);
      return res.data;
    },
  });
  return { Properties, refetch, isLoading, isError };
};

export default useAddedProperty;
 