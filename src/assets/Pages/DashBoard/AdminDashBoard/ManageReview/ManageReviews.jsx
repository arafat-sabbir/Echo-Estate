import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";

const ManageReviews = () => {
    const axiosSecure = useAxiosSecure()
    const { data: reviews = [] } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
          const res = await axiosSecure.get("/getallReviews");
          return res.data;
        },
      });
      console.log(reviews);
    return (
        <div>
            <h3 className="text-3xl font-semibold text-center mt-10">Total Review {reviews.length}</h3>
        </div>
    );
};

export default ManageReviews;