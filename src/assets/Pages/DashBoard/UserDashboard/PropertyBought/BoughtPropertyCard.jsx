import { FaLocationDot } from "react-icons/fa6";

const BoughtPropertyCard = ({ item }) => {
  const {
    propertyImage,
    propertyTitle,
    propertyLocation,
    offerredPriceRange,
    offerStatus,
    agentName
  } = item;
  return (
    <div>
      <div>
        <div className="cursor-pointer rounded-xl bg-white p-3 shadow-[0_0_20px_#E6E6E6] hover:shadow-[0_0_10px_#FF5B22] w-[480px] mx-auto">
          <div className="relative flex items-end overflow-hidden rounded-xl w-full object-fill">
            <img src={propertyImage} alt="wallpaper" />
          </div>

          <div className="mt-1 p-2">
            <h2 className="text-slate-700 text-xl font-semibold mb-2">
              {propertyTitle}
            </h2>
            <div className="flex justify-between">
              <p className="mt-1 text-sm text-slate-600 font-semibold flex gap-2">
                <FaLocationDot className="text-xl text-black"></FaLocationDot>
                {propertyLocation}
              </p>
              <p className="font-semibold" >Status : <span className="uppercase text-main">{offerStatus}</span></p>
            </div>

            <div className="mt-3 flex items-end justify-between">
              <p>
                <span className="text-lg font-bold text-orange-500">
                  ${offerredPriceRange}
                </span>
                <span className="text-sm text-slate-400">/Offered-Price</span>
              </p>
              <p className="font-semibold"> Agent : <span className="text-main">{agentName}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoughtPropertyCard;
