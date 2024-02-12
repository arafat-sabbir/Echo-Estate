import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";

const UseAgentProperty = ({ email }) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: Properties = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["getUserinfo"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/getProperty?email=${email}`);
      return res.data;
    },
  });
  return { Properties, refetch, isLoading, isError };
};

export default UseAgentProperty;
