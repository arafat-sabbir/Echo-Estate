import Swal from "sweetalert2";
import useGetUser from "../../../../../Hooks/GetUserInfo/useGetUser";
import useAddedProperty from "../../../../../Hooks/UseAddedProperty/useAddedProperty";
import Container from "../../../../../Utils/Container/Container";
import AddedPropertiesCard from "./AddedPropertiesCard";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import toast from "react-hot-toast";

const AddedProperties = () => {
  const { Properties, refetch, isLoading, isError } = useAddedProperty();
  const { userinfo } = useGetUser();
  const axiosSecure = useAxiosSecure()
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
        axiosSecure.delete(`/delete-property/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch()
            toast.success("SuccessFully Deleted Property")   
          }
        });
      }
    });
  };
  const handleupdate =(id)=>{
    console.log(id);
  }
  return (
    <Container>
      <div>
        <h3 className="text-center text-3xl font-semibold my-20 ">
          Your Added Properties
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Properties?.map((item) => (
          <AddedPropertiesCard item={item} key={item._id} handleDelete={handleDelete} handleupdate={handleupdate}></AddedPropertiesCard>
        ))}
        </div>
      </div>
    </Container>
  );
};

export default AddedProperties;
