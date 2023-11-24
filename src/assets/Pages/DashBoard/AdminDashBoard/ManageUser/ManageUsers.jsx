import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/getallUsers");
      return res.data;
    },
  });
  console.log(users);
  return (
    <div className="mt-10">
      <h3 className="text-3xl font-semibold text-center">Total User {users?.length}</h3>
    </div>
  );
};

export default ManageUsers;
