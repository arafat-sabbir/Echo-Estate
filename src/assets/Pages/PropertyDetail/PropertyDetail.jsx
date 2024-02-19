import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Container from "../../../Utils/Container/Container";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useGetUser from "../../../Hooks/GetUserInfo/useGetUser";
import useAuth from "../../../Auth/UseAuth/useAuth";
import { IoLocationSharp } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { PiBuildingsThin, PiBathtub } from "react-icons/pi";
import { TbResize } from "react-icons/tb";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

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
    agentImage, agentName, agentEmail, propertyImage, propertyLocation, propertyTitle, minPrice, maxPrice, _id, listedFor, category, bedRooms, bathRooms, propertySize, addedDate, rooms, builtYear, description } = propertyDetail;
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
    <div className="mt-[140px] bg-[#FDFCFB]">
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
        <div className="bg-white p-10 rounded-xl shadow-[0_0_100px_#F0EFEE] my-10">
          <span className="font-semibold text-xl tracking-wide">OverView</span>
          <div className="flex justify-between items-center">
            <p>Update On : {addedDate}</p>
            <p className="flex flex-col gap-3 cursor-pointer"><PiBuildingsThin size={29} className="mx-auto" /> {rooms} Rooms</p>
            <p className="flex flex-col gap-3 cursor-pointer"><IoBedOutline size={29} className="mx-auto" /> {bedRooms} Bedrooms</p>
            <p className="flex flex-col gap-3 cursor-pointer"><PiBathtub size={29} className="mx-auto" /> {bathRooms} Bathrooms</p>
            <p className="flex flex-col gap-3 cursor-pointer"><TbResize className="mx-auto" size={29} /><span>{propertySize} ft<sup>2</sup></span></p>
            <p className="flex flex-col gap-3 cursor-pointer"><IoCalendarNumberOutline size={29} className="mx-auto" /> YearBuilt: {builtYear}</p>
          </div>
        </div>
        {/* Description */}
        <div className="bg-white p-10 rounded-xl shadow-[0_0_100px_#F0EFEE] my-10">
          <span className="font-semibold text-xl">Description</span>
          <p className="tracking-wider leading-5">{description}</p>
        </div>
        {/* Address */}
        <div tabIndex={0} className="collapse bg-white px-4 rounded-xl shadow-[0_0_100px_#F0EFEE] my-10">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex items-center  justify-between">
            <p>Address</p> <p className="mr-4"><FaChevronDown /></p>
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </Container>

    </div>
  );
};

export default PropertyDetail;
