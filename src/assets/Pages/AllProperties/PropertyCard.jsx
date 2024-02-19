import { PropTypes } from "prop-types"
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const { agentImage, agentName, agentEmail, propertyImage, propertyLocation, propertyTitle, minPrice, maxPrice, _id, listedFor, category, bedRooms, bathRooms, propertySize } = property;
  return (
    <>
      <Link to={`/propertyDetail/${_id}`}>
        <div className=" cursor-pointer overflow-hidden rounded-xl group group-hover:rounded-xl">
          <div className="relative">
            <img className="max-h-[176px]  group-hover:scale-105 transition duration-300  max-w-[298px] min-h-[176px] min-w-[298px] rounded-xl" src={propertyImage} alt="" />
          <span className="text-xs font-semibold px-2 py-1 absolute top-4 right-4 text-white rounded-xl bg-main">{listedFor}</span>
            <Link to={`/agentProfile/${agentEmail}`}>
              <img className="h-10 absolute bottom-4 left-4 border-2 border-white w-10 rounded-full" src={agentImage} alt="" />
            </Link>
          </div>
          <h1 className="mt-6 font-semibold text-lg">{propertyTitle}</h1>
          <div className="text-sm  flex gap-1 my-1">
            <span>{category}</span>.
            <span>{listedFor}</span>
          </div>
          <div className="text-sm  flex gap-1 my-1">
            <span>{bedRooms} BedRooms</span>.
            <span>{bathRooms} Bathrooms</span>.
            <span>Size {propertySize} ft<sup>2</sup></span>
          </div>
          <p className="font-semibold my-1 text-main">$ {minPrice}-{maxPrice}</p>
        </div>
      </Link>
    </>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  property: PropTypes.obj
}