import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../../../Auth/UseAuth/useAuth";
import Container from "../../../../../Utils/Container/Container";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: wishlist = [] } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/getWishlist?email=${user.email}`);
      return res.data;
    },
  });
  console.log(wishlist);

  return (
    <div>
       <Container>
       <div className="text-3xl font-semibold text-center mt-10"> <span className="text-main font-bold">{user.displayName}</span> Here is Your Wishlist</div>
       <div className="mt-10">
        {
            wishlist.map(item => <WishlistCard item={item} key={item._id}></WishlistCard>)
        }
       </div>
       </Container>
    </div>

  );
};

export default Wishlist;
