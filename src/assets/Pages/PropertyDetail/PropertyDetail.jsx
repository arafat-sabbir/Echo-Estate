import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Container from "../../../Utils/Container/Container";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useGetUser from "../../../Hooks/GetUserInfo/useGetUser";
import useAuth from "../../../Auth/UseAuth/useAuth";
import { IoLocationSharp } from "react-icons/io5";

const PropertyDetail = () => {
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth()
  const { userinfo } = useGetUser();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const propertyDetail = useLoaderData();
  const {
    agentImage, agentName, agentEmail, propertyImage, propertyLocation, propertyTitle, minPrice, maxPrice, _id, listedFor, category, bedRooms, bathRooms, propertySize } = propertyDetail;
  const { data: propertyReview = [], isLoading } = useQuery({
    queryKey: ["propertyReview"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/getpropertyReview?propertyId=${_id}`);
      return res.data;
    },
  });
  const handleNotSignIN = () => {
    navigate("/signIn", { state: location?.pathname });
  };
  const handleAddtoWishlist = () => {
    if (userinfo.email === agentEmail) {
      return toast.error("You can't Add Your Own Product");
    } else if (userinfo.role === "agent" || userinfo.role === "admin") {
      return toast.error("Agent||Admin Can't Add Product To Wishlist");
    }

    const wishListData = {
      propertyImage,
      propertyTitle,
      agentImage,
      agentName,
      agentEmail,
      propertyLocation,
      minPrice,
      maxPrice,
      propertyVerificationStatus,
      propertyId: _id,
      wishedEmail: userinfo.email,
    };
    axiosSecure.post("/addToWishlist", wishListData).then((res) => {
      if (res.data.insertedId) {
        toast.success("Added To WishList SuccessFully");
        navigate("/dashboard/wishlist");
      }
    });
  };
  return (
    <div className="mt-[120px] bg-[#FDFCFB]">
      <Container>
        {/* Top Info */}
        <div>
          <span className="text-xs font-semibold px-2 py-1   text-white rounded-xl bg-main">{listedFor}</span>
          <span className="text-xs font-semibold px-2 py-1  ml-2 text-white rounded-xl bg-main">{category}</span>
          <h1 className="font-semibold text-4xl">{propertyTitle}</h1>
          <p className="flex items-center gap-1"><IoLocationSharp className="text-gray-600" size={22} /> {propertyLocation}</p>
        </div>
        {/* Property Image */}
        <img src={propertyImage} alt="" className="w-full lg:h-[600px] " />
        {/* Overview */}
      </Container>

    </div>
  );
};

export default PropertyDetail;
