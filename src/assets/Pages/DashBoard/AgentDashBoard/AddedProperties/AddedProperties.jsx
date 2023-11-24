import Swal from "sweetalert2";
import useGetUser from "../../../../../Hooks/GetUserInfo/useGetUser";
import useAddedProperty from "../../../../../Hooks/UseAddedProperty/useAddedProperty";
import Container from "../../../../../Utils/Container/Container";
import AddedPropertiesCard from "./AddedPropertiesCard";

const AddedProperties = () => {
  const { Properties, refetch, isLoading, isError } = useAddedProperty();
  const { userinfo } = useGetUser();
  const handleDelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
  }
  const handleupdate =(id)=>{
    console.log(id);
  }
  return (
    <Container>
      <div>
        <h3 className="text-center text-3xl font-semibold my-20 ">
          Your Added Properties
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Properties?.map((item) => (
          <AddedPropertiesCard item={item} key={item._id} handleDelete={handleDelete} handleupdate={handleupdate}></AddedPropertiesCard>
        ))}
        </div>
      </div>
    </Container>
  );
};

export default AddedProperties;
