import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../../../Auth/UseAuth/useAuth";
import SectionTitle from "../../../../../Utils/SectionTitle/SectionTitle";
import Loading from "../../../../../Components/Loading/Loading";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

const SoldProperties = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: soldProperties = [], isLoading } = useQuery({
    queryKey: ["soldProperties"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/getSoldProperties?email=${user.email}`
      );
      return res.data;
    },
  });

  const totalSoldAmount = soldProperties?.length
    ? soldProperties.reduce((total, item) => total + parseInt(item.offerredPriceRange), 0)
    : 0;
  if (isLoading) {
    return <Loading></Loading>
  }

  console.log(soldProperties);
  return (
    <div className="flex flex-col mb-10">
      <div className="ml-16 ">
        <SectionTitle
          title={"Sold Properties"}
          subtitle={`You've Sold a Total Amount of $${totalSoldAmount}`}
        ></SectionTitle>
      </div>
      <div className="flex flex-col lg:container max-w-[98vw] mx-auto">
        <div className="overflow-x-auto border-2 rounded-xl">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Property Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  property title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Property location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  buyer email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  buyer name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  sold price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {soldProperties?.map((item) => (
                <tr key={item._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                    <img src={item.propertyImage} className="w-16 h-16 rounded-xl" alt="" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                    {item.propertyTitle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {item.propertyLocation}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    <h3 className="">{item.buyerEmail}</h3>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {item.buyerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    ${item.offerredPriceRange}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t w-full mb-2"></p>
          <div className="flex justify-between mb-2 px-2  ">
            <button className=" px-4 py-2 font-semibold bg-gray-200 flex items-center"><IoChevronBackOutline />Prev</button>
            <button className=" px-4 py-2 font-semibold bg-gray-200 flex items-center">Next<IoChevronForwardOutline /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldProperties;
