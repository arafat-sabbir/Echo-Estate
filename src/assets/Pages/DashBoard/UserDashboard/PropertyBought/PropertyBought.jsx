import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../../../Auth/UseAuth/useAuth";
import BoughtPropertyCard from "./BoughtPropertyCard";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const PropertyBought = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: boughtProperty = [] } = useQuery({
    queryKey: ["boughtProperty"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/getboughtProperty?email=${user.email}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <h3 className="text-3xl font-semibold text-center mt-10">
        {" "}
        <span className="text-main font-bold">{user.displayName}</span> Your
        Bought Property
      </h3>
      {boughtProperty.length > 0 && (
        <div className=" flex justify-end container mx-auto">
          <Link to={'/dashboard/makePayment'}>
            <button
              className="relative px-7 py-2 flex items-center  bg-main text-white  isolation-auto z-10 border rounded-full border-dashed border-main 
    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#072730] hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            >
              {" "}
              <span className="mr-1  text-xl">
                <AiOutlineDollar />
              </span>{" "}
              Pay Now
            </button>
          </Link>
        </div>
      )}
      <div className="grid lg:grid-cols-3 mt-10 gap-10">
        {boughtProperty?.map((item) => (
          <BoughtPropertyCard key={item._id} item={item}></BoughtPropertyCard>
        ))}
      </div>
    </div>
  );
};

export default PropertyBought;
