import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../../Auth/UseAuth/useAuth";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import ReviewCard from "./ReviewCard";
import Container from "../../../../../Utils/Container/Container";

const MyReview = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: myReview = [], refetch } = useQuery({
    queryKey: ["myReview"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/getUserReview?email=${user.email}`);
      return res.data;
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const tid = toast.loading("Deleting Review");
        axiosSecure.delete(`/delete-review/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            toast.success("Review Deleted", { id: tid });
            refetch();
          }
        });
      }
    });
  };
  return (
   <div className="">
    <h3 className="text-3xl font-semibold text-center mt-20 ">Hey <span className="text-main font-bold">{user.displayName}</span> Here Are Your Review</h3>
     <Container>
      <div className="grid grid-cols-3 mt-10 items-stretch">
        {myReview.map((item) => (
          <ReviewCard
            item={item}
            key={item._id}
            handleDelete={handleDelete}
          ></ReviewCard>
        ))}
      </div>
    </Container>
   </div>
  );
};

export default MyReview;
