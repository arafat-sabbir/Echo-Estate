import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/getallUsers");
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Make The User Admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        const swal = toast.loading("Making User Admin");
        axiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            toast.success(`${user.name} is a Admin Now`, { id: swal });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="mt-10">
      <h3 className="text-3xl font-semibold text-center">
        Total User {users?.length}
      </h3>
      <div>
        <h3 className="text-3xl font-semibold text-center mt-10">
          Total ProperTies {users.length}
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
                            User Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            User Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Make Admin
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Make Agent
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Make As Fraud
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                          >
                            Delete User
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {users?.map((item) => (
                          <tr key={item._id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {item.email}
                            </td>
                            <td>
                              <button className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                Make Admin
                              </button>
                            </td>
                            <td>
                              <button className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                Make Admin
                              </button>
                            </td>
                            <td>
                              <button className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                Make Admin
                              </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                              <button
                                type="button"
                                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              >
                                Reject
                              </button>
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
    </div>
  );
};

export default ManageUsers;
