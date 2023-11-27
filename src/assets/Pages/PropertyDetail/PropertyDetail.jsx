import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Container from "../../../Utils/Container/Container";
import { FaLocationDot } from "react-icons/fa6";
import Review from "../../../Components/Review/Review";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import useGetUser from "../../../Hooks/GetUserInfo/useGetUser";
import Loading from "../../../Components/Loading/Loading";

const PropertyDetail = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { userinfo } = useGetUser();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const propertyDetail = useLoaderData();
  const {
    propertyImage,
    propertyTitle,
    agentImage,
    agentName,
    propertyLocation,
    propertyVerificationStatus,
    minPrice,
    maxPrice,
    _id,
    agentEmail,
  } = propertyDetail;
  const { data: propertyReview = [], isLoading } = useQuery({
    queryKey: ["propertyReview"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/getpropertyReview?propertyId=${_id}`);
      return res.data;
    },
  });
  const handleAddtoWishlist = (id) => {
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
    <Container>
      <div className="flex justify-between mt-28 container mx-auto">
        <div className=" w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className=" w-full">
              <img
                src={propertyImage}
                alt=""
                className="rounded-xl h-96 w-[700px]"
              />
            </div>
            <div className="md:w-2/3 m-4 ">
              <div className="flex text-gray-500 text-sm m-2">
                <div className="text-sm flex items-center">
                  <FaLocationDot className="text-xl text-main"></FaLocationDot>
                  <h3 className="ml-1 ">{propertyLocation}</h3>
                </div>
              </div>
              <div className="flex items-center">
                <h3 className="font-bold  text-3xl text-gray-600 m-2">
                  {propertyTitle}
                </h3>
              </div>
              <h3 className="m-2 font-semibold">
                Status : {propertyVerificationStatus}
              </h3>
              <div className="text-sm text-gray-600 mt-4 m-2">
                <h3 className="text-xl font-semibold">
                  Price Range :
                  <span className="text-main">
                    ${minPrice}-${maxPrice}
                  </span>
                </h3>
              </div>
              <div className="divider divider-error"></div>
              <div className="flex cursor-pointer ">
                <div className="m-2">
                  <img
                    src={agentImage}
                    alt=""
                    className=" rounded-full w-12 h-12"
                  />
                </div>
                <div className="grid m-1">
                  <div className="font-bold text-sm hover:text-gray-600 mt-2">
                    {agentName}
                  </div>
                  <div className=" text-sm hover:text-gray-700 font-medium mb-4">
                    Seller Agent
                  </div>
                </div>
              </div>
              <div className="flex gap-10 mt-4">
                <div className="border-r-2 pr-8 border-r-main">
                  <button
                    onClick={() => handleAddtoWishlist(_id)}
                    className="relative px-8 py-2  bg-main text-white  isolation-auto z-10 border rounded-full border-dashed border-main 
                    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#072730] hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                  >
                    Add To WishList
                  </button>
                </div>
                <div className="">
                  <Review property={propertyDetail}></Review>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {propertyReview.length > 0 &&
        (isLoading ? (
          <Loading></Loading>
        ) : (
          <div className="lg:ml-[185px]">
            <SectionTitle
              title={"Client Review"}
              subtitle={"See What Client Say About This Property"}
            ></SectionTitle>
            <div className="grid grid-cols-3 gap-6 mb-10">
              {propertyReview.map((item) => (
                <div
                  key={item._id}
                  className="w-full max-w-md px-8 py-4 mt-16 relative bg-white h-[230px] border border-dashed border-main rounded-lg shadow-lg dark:bg-gray-800"
                >
                  <div className="flex justify-center -mt-16 md:justify-end">
                    <img
                      src={item.reviewerPhoto}
                      className="object-cover w-20 h-20 border-2 border-main rounded-full dark:border-blue-400"
                      alt=""
                    />
                  </div>

                  <h2 className="text-sm mb-4 font-semibold text-gray-800 dark:text-white md:mt-0">
                    {item.reviewDate}
                  </h2>
                  <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                    {item.propertyTitle}
                  </h2>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                    {item.review}
                  </p>

                  <div className="flex justify-between items-center mt-6 mb-3 absolute bottom-2 right-0 left-0 px-10 ">
                    <p
                      className="text-lg font-medium  dark:text-blue-300"
                      tabIndex="0"
                    >
                      Reviewer :{" "}
                      <span className="text-main">{item.reviewerName}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </Container>
  );
};

export default PropertyDetail;
