import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import AdvertiseCard from "./AdvertiseCard";
import Loading from "../../../../Components/Loading/Loading";
import SectionTitle from "../../../../Utils/SectionTitle/SectionTitle";
import useAdvertise from "../../../../Hooks/useAdvertise/useAdvertise";

const Advertise = () => {
 const {advertise,isLoading} = useAdvertise()
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container mx-auto">
       <div className="ml-8">
       <SectionTitle title={"Best For You"} subtitle={"Checkout Out Best Collection"}></SectionTitle>
       </div>
      <div className="grid grid-cols-2 gap-16 mb-10">
        {advertise?.map((item) => (
          <AdvertiseCard item={item} key={item._id}></AdvertiseCard>
        ))}
      </div>
    </div>
  );
};

export default Advertise;
