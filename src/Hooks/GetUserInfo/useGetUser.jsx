import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Auth/UseAuth/useAuth";
import useAxiosPublic from "../AxiosPublic/useAxiosPublic";


const useGetUser = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data:userinfo=[], isLoading, isError, refetch } = useQuery({
    queryKey: ["getuserinfo", user],
    queryFn: async () => {
      const res = await axiosPublic.get(`/getuser?email=${user.email}`);
      return res.data;
    },
  });
  return { userinfo, refetch, isLoading, isError };
};

export default useGetUser;
