import AdvertiseCard from "./AdvertiseCard";
import Loading from "../../../../Components/Loading/Loading";
import SectionTitle from "../../../../Utils/SectionTitle/SectionTitle";
import useAdvertise from "../../../../Hooks/useAdvertise/useAdvertise";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../Auth/UseAuth/useAuth";
import "aos/dist/aos.css";

const Advertise = () => {
  const { advertise, isLoading } = useAdvertise();
  const location = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleNotSignIN = () => {
    navigate("/signIn", { state: location?.pathname });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="ml-8">
        <SectionTitle
          title={"Best For You"}
          subtitle={"Checkout Out Best Collection"}
        ></SectionTitle>
      </div>
      <div className="grid lg:grid-cols-2 gap-16 mb-10">
        {advertise?.map((item) => (
          <AdvertiseCard item={item} key={item._id}></AdvertiseCard>
        ))}
      </div>
      <div className="w-full mx-auto flex justify-center mt-6">
        <Link to={"allProperties"}>
          <button
            className="relative px-8 py-2 mx-auto bg-[#072730] text-white  isolation-auto z-10 border rounded-full border-dashed border-main 
              before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-main hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            See All ProperTies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Advertise;
