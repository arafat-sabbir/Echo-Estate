import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../../../Hooks/AxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Container from "../../../../../Utils/Container/Container";
import useGetUser from "../../../../../Hooks/GetUserInfo/useGetUser";
import axios from "axios";

const AddProperty = () => {
  const imageHostingKey = import.meta.env.VITE_IMAGE_HOST_KEY;
  const axiosSecure = useAxiosSecure();
  const { userinfo } = useGetUser();
  const navigate = useNavigate();
  const imageHostingAPi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (item) => {
    const toastid = toast.loading("Adding Property");
    const imagefile = { image: item?.photoUrl[0] };
    const res = await axios.post(imageHostingAPi, imagefile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const propertydata = {
      propertyImage: res.data.data.display_url,
      propertyTitle: item.propertyTitle,
      propertyLocation: item.propertyLocation,
      propertyPriceRange: item.propertyPriceRange,
      propertyVerificationStatus: "pending",
      agentName: userinfo.name,
      agentEmail: userinfo.email,
      agentImage: userinfo.photo,
    };
    axiosSecure.post(`/addProperty`, propertydata).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Property Added Successfully", { id: toastid });
        navigate("/dashboard/addedProperties");
      }
    });
  };
  return (
    <Container>
      <div className="shadow-[0_0_20px_#E6E6E6] rounded-xl mt-36">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-error w-full border-dashed"
              {...register("photoUrl", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Property Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Property Title"
              required
              className="input input-bordered bg-white border-dashed border-main focus:border-main"
              {...register("propertyTitle", { required: true })}
            />
            {errors.propertyTitle && (
              <p className="text-red-500 mt-4">Please Add Property Title</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Property Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Property Location"
              className="input input-bordered bg-white border-dashed border-main focus:border-main"
              {...register("propertyLocation", { required: true })}
            />
            {errors.propertyLocation && (
              <p className="text-red-500 mt-4">Please Add Property Location</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price Range</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Price Range"
              className="input input-bordered bg-white border-dashed border-main focus:border-main"
              {...register("propertyPriceRange", { required: true })}
            />
            {errors.propertyPriceRange && (
              <p className="text-red-500 mt-4">Please Add a PriceRange</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Agent Name</span>
            </label>
            <input
              type="text"
              defaultValue={userinfo.name}
              name="location"
              disabled={true}
              className="input input-bordered bg-white border-dashed border-main focus:border-main"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Agent Email</span>
            </label>
            <input
              type="text"
              defaultValue={userinfo.email}
              name="location"
              disabled={true}
              className="input input-bordered bg-white border-dashed border-main focus:border-main"
            />
          </div>

          <div className="form-control mt-6">
            <button
              className="relative px-8 py-2  bg-[#072730] text-white  isolation-auto z-10 border rounded-full border-dashed border-main 
    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-main hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddProperty;
