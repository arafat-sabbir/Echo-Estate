import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../../../Auth/UseAuth/useAuth";
import Container from "../../../../../Utils/Container/Container";
import WishlistCard from "./WishlistCard";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Loading from "../../../../../Components/Loading/Loading";

const Wishlist = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: wishlist = [],refetch,isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/getWishlist?email=${user.email}`);
      return res.data;
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#0e3c49da",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-wish/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch()
            toast.success("SuccessFully Deleted Wish")   
          }
        });
      }
    });
  };
  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="p-4">
       <Container>
       <div className="lg:text-3xl text-xl font-semibold text-center mt-10"> <span className="text-main font-bold">{user.displayName}</span> Here is Your Wishlist</div>
       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            wishlist.map(item => <WishlistCard item={item} key={item._id} handleDelete={handleDelete}></WishlistCard>)
        }
       </div>
       </Container>
    </div>

  );
};

export default Wishlist;
