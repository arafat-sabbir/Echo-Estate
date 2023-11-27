import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import toast from "react-hot-toast";
import Loading from "../../../../../Components/Loading/Loading";

const AdvertIseProperty = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: advertise = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await axiosSecure.get("/getVerifiedProperty");
      return res.data;
    },
  });

  const handleAdvertiseProperty = (id) => {
    axiosSecure
      .patch(`/updateAdvertise/${id}?advertiseStatus=advertise`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success("Property Advertised Successfully");
        }
      });
  };

  const handledisAdvertiseProperty = (id) => {
    axiosSecure
      .patch(`/updateAdvertise/${id}?advertiseStatus=disadvertise`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success("Property DisAdvertised Successfully");
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-3xl font-semibold text-center mt-10">
        Advertise Properties {advertise.length}
      </h3>
      <div>
        <div>
          <div className="flex flex-col container mx-auto">
            <div className="-m-1.5 overflow-x-auto mt-10">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Property Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Property Location
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Agent Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Agent Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Price Range
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                        >
                          Verify
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                        >
                          Reject
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {advertise?.map((item) => (
                        <tr key={item._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                            {item.propertyTitle}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            {item.propertyLocation}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            {item.agentName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            {item.agentEmail}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            ${item.minPrice}-${item.maxPrice}
                          </td>
                          <td className=" py-4 whitespace-nowrap text-end text-sm font-medium">
                            {item.advertiseStatus !== "advertise" && (
                              <button
                                onClick={() =>
                                  handleAdvertiseProperty(item._id)
                                }
                                type="button"
                                className="px-3 py-3 flex z-50  items-center gap-2 cursor-pointer rounded-full shadow-2xl text-white font-semibold bg-[#17645a] hover:shadow-xl hover:shadow-[#072730da] hover:scale-110 duration-300"
                              >
                                <FaCheck />
                                Advertise
                              </button>
                            )}
                          </td>
                          <td className=" py-4 whitespace-nowrap text-end text-sm font-medium ">
                            {item.advertiseStatus !== "disadvertise" && (
                              <button
                                onClick={() =>
                                  handledisAdvertiseProperty(item._id)
                                }
                                type="button"
                                className="px-3 py-3 z-50 flex  items-center gap-2 cursor-pointer rounded-full shadow-2xl text-white font-semibold bg-red-500 hover:shadow-xl hover:shadow-red-500 hover:scale-110 duration-300"
                              >
                                <span>
                                  <MdOutlineCancel />
                                </span>
                                disAdverTise
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertIseProperty;
