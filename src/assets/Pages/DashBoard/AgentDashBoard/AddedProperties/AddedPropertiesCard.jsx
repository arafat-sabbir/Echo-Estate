import { FaLocationDot } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdUpdate } from "react-icons/md";

const AddedPropertiesCard = ({ item,handleDelete,handleupdate }) => {
  const {
    propertyImage,
    propertyTitle,
    _id,
    propertyPriceRange,
    propertyLocation,
  } = item;
  return (
    <div className="overflow-hidden w-[420px] bg-white rounded-lg  border border-dashed border-main shadow-[0_0_10px_#FF573B]">
      <img
        className="object-cover w-full h-64"
        src={propertyImage}
        alt="Article"
      />

      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            Product
          </span>
          <h3
            className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabIndex="0"
            role="link"
          >
            {propertyTitle}
          </h3>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-md text-gray-600">
              Price Range : {propertyPriceRange}
            </p>
            <h1 className="text-sm flex justify-center items-center">
              <FaLocationDot className="text-xl text-main"></FaLocationDot>
              <span className="ml-1">{propertyLocation}</span>
            </h1>
          </div>
          <div className="flex justify-between mt-4">

          <button onClick={()=>handleupdate(_id)} className="flex justify-center items-center gap-2 w-24 h-11 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#072730] via-[#072730da] to-[#072730da] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#072730da] hover:to-[#072730da]">
                <MdUpdate></MdUpdate>
            </button>
            <button onClick={()=> handleDelete(_id)} className="flex justify-center items-center gap-2 w-24 h-11 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                <MdDelete></MdDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedPropertiesCard;
