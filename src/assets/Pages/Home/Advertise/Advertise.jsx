import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import AdvertiseCard from "./AdvertiseCard";
import Loading from "../../../../Components/Loading/Loading";

const Advertise = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: advertise,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await axiosSecure.get("/getAdvertiseProperty");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
        {advertise?.map((item) => (
          <AdvertiseCard item={item} key={item._id}></AdvertiseCard>
        ))}
      </div>
    </div>
  );
};

export default Advertise;
