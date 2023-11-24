import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import Button from "../../../Shared/Button";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
    const {agentImage,agentName,propertyImage,propertyLocation,propertyTitle,propertyPriceRange,propertyVerificationStatus,_id}  = property;
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-[0_0_5px_#FF573B] border border-dashed border-main  text-black">
        <div className="flex space-x-4">
          <img
            alt=""
            src={agentImage}
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 "
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {agentName}
            </a>
            <span className="text-xs text-black">{Math.floor(Math.random(1,10)*10)} hours ago</span>
          </div>
        </div>
        <div>
          <img
            src={propertyImage}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 rounded-xl"
          />
          <div className="mb-1 text-xl font-semibold flex justify-between">
            <h1>{propertyTitle}</h1>
            <h1 className="text-sm flex justify-center items-center">
              <FaLocationDot className="text-xl text-main"></FaLocationDot>
              <span className="ml-1">{propertyLocation}</span>
            </h1>
          </div>
         <div className="flex justify-between mt-2">
         <p className="text-md font-medium text-black">Price Range : <span className="font-bold">{propertyPriceRange}</span></p>
         <p className="text-md font-medium flex justify-center items-center">Status : {propertyVerificationStatus=="pending"?<MdOutlinePendingActions className="ml-1 mr-[2px]"></MdOutlinePendingActions>:""} {propertyVerificationStatus}</p>
         </div>
        </div>
        <Link to={`/propertyDetail/${_id}`} className="flex justify-end">
          <Button title={"See Detail"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
