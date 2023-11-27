import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../../../Auth/UseAuth/useAuth";
import BoughtPropertyCard from "./BoughtPropertyCard";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Loading from "../../../../../Components/Loading/Loading";

const PropertyBought = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: boughtProperty = [],isLoading,isError } = useQuery({
    queryKey: ["boughtProperty"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/getboughtProperty?email=${user.email}`
      );
      return res.data;
    },
  });
if(isLoading){
return <Loading></Loading>
}
  return (
    <div>
      <h3 className="text-3xl font-semibold text-center mt-10">
        {" "}
        <span className="text-main font-bold">{user.displayName}</span> Your
        Bought Property
      </h3>
      <div className="grid lg:grid-cols-3 mt-10 gap-10 items-stretch">
        {boughtProperty?.map((item) => (
          <BoughtPropertyCard key={item._id} item={item}></BoughtPropertyCard>
        ))}
      </div>
    </div>
  );
};

export default PropertyBought;
