import { useLoaderData } from "react-router-dom";
import Container from "../../../Utils/Container/Container";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../../../Shared/Button";
import Review from "../../../Components/Review/Review";
import { useEffect } from "react";

const PropertyDetail = () => {
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
    propertyPriceRange,
    propertyVerificationStatus,
  } = propertyDetail;
  return (
    <Container>
      <div className="flex justify-between mt-20">
        <div className=" w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className=" w-full">
              <img src={propertyImage} alt="" className="rounded-xl" />
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
                  Price Range :{" "}
                  <span className="text-main">{propertyPriceRange}</span>
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
                  <Button title={"Add To WishList"}></Button>
                </div>
                <div className="">
                  <Review property={propertyDetail}></Review>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PropertyDetail;
