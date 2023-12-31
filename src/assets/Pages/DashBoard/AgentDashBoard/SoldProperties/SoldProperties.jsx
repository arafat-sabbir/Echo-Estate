import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../../../Auth/UseAuth/useAuth";
import { IoWarningOutline } from "react-icons/io5";
import SectionTitle from "../../../../../Utils/SectionTitle/SectionTitle";
import Loading from "../../../../../Components/Loading/Loading";

const SoldProperties = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: soldProperties = [], refetch,isLoading } = useQuery({
    queryKey: ["soldProperties"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/getSoldProperties?email=${user.email}`
      );
      return res.data;
    },
  });
  
  const totalSoldamount = soldProperties?.length
  ? soldProperties.reduce((total, item) => total + parseInt(item.offerredPriceRange), 0)
  : 0;
if(isLoading){
  return <Loading></Loading>
}
  return (
    <div>
      <div className="ml-16">
        <SectionTitle
          title={"Sold Properties"}
          subtitle={`You've Sold a Total Amount of $${totalSoldamount}`}
        ></SectionTitle>
      </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldProperties;
