import Swal from "sweetalert2";
import useGetUser from "../../../../../Hooks/GetUserInfo/useGetUser";
import useAddedProperty from "../../../../../Hooks/UseAddedProperty/useAddedProperty";
import Container from "../../../../../Utils/Container/Container";
import AddedPropertiesCard from "./AddedPropertiesCard";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import toast from "react-hot-toast";
import SectionTitle from "../../../../../Utils/SectionTitle/SectionTitle";
import Loading from "../../../../../Components/Loading/Loading";

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
      confirmButtonColor: "#d33",
      cancelButtonColor: "#0e3c49da",
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
  if(isLoading){
    return <Loading></Loading>
  }
  return (
   <>
   <div className="p-4">
     <Container>
    <div className="mt-10">
    <SectionTitle title={"Added Property"} subtitle={"See All The Property You've Added"}></SectionTitle>
    </div>
      <div className="mb-10">
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-10">
        {Properties?.map((item) => (
          <AddedPropertiesCard item={item} key={item._id} handleDelete={handleDelete} handleupdate={handleupdate}></AddedPropertiesCard>
        ))}
        </div>
      </div>
    </Container>
   </div>
   </>
  );
};

export default AddedProperties;
