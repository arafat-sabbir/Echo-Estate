
const PropertyBought = () => {
    const {data:}
    return (
        <div>
            <div className="cursor-pointer rounded-xl bg-white p-3 shadow-[0_0_20px_#E6E6E6] hover:shadow-[0_0_10px_#FF5B22] w-1/2 mx-auto">
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img src={propertyImage} alt="wallpaper" />

              <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <span className="ml-1 text-sm text-slate-400">4.9</span>
              </div>
            </div>

            <div className="mt-1 p-2">
              <h2 className="text-slate-700 text-xl font-semibold mb-2">
                {propertyTitle}
              </h2>
              <p className="mt-1 text-sm text-slate-600 font-semibold flex gap-2">
                <FaLocationDot className="text-xl text-black"></FaLocationDot>
                {propertyLocation}
              </p>

              <div className="mt-3 flex items-end justify-between">
                <p>
                  <span className="text-lg font-bold text-orange-500">
                    {propertyPriceRange}
                  </span>
                  <span className="text-sm text-slate-400">/Price</span>
                </p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default PropertyBought;