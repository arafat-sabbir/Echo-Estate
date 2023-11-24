import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Container from "../../../Utils/Container/Container";
import useAxiosPublic from "../../../Hooks/AxiosPublic/useAxiosPublic";

const UpdateaddedProperties = () => {
  const imageHostingKey = import.meta.env.VITE_IMAGE_HOST_KEY;
  const axiosPublic = useAxiosPublic();
  const imageHostingAPi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const imagefile = { image: data?.photoUrl[0] };
    const res = await axiosPublic.post(imageHostingAPi, imagefile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data.data.display_url);
  };
  return (
    <div>
      <Container>
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
              placeholder="Property Title"
              name="title"
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
              placeholder="Property Location"
              name="location"
              className="input input-bordered bg-white border-dashed border-main focus:border-main"
              {...register("propertyLocation", { required: true })}
            />
            {errors.propertyLocation && (
              <p className="text-red-500 mt-4">Please Add Property Location</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Property Location</span>
            </label>
            <input
              type="text"
              placeholder="Property Location"
              name="location"
              defaultValue={"location"}
              className="input input-bordered bg-white border-dashed border-main focus:border-main"
            />
          </div>

          <div className="form-control mt-6">
            <input
              className="btn bg-white border-dashed border-main hover:border-main"
              type="submit"
              value="Sign In"
            />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default UpdateaddedProperties;
