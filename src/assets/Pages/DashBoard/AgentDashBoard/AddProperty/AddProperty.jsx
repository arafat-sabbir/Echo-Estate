import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Container from "../../../../../Utils/Container/Container";
import useGetUser from "../../../../../Hooks/GetUserInfo/useGetUser";
import axios from "axios";
import { useState } from "react";
const AddProperty = () => {
  // ImgbbHostingKey
  const imageHostingKey = import.meta.env.VITE_IMAGE_HOST_KEY;

  // Get the axios Secure instance For Sending Token To The Server
  const axiosSecure = useAxiosSecure();

  // Get the currently Logged in User Data From Database
  const { userinfo } = useGetUser();

  // Get the PhotoName From User PhotoUpload
  const [photoName, setPhotoName] = useState(null);

  // Get the photoFile From User PhotoUpload
  const [photo, setPhoto] = useState(null);

  // User Navigate To Navigate The User
  const navigate = useNavigate();
  const imageHostingAPi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  // ImageUpload Input Handler
  const handlePhotoUpload = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    if (e.target.files.length > 0) {
      setPhotoName(e.target.files[0].name);
      setPhoto({ image: e.target.files[0] })
    }
  };

  // Form Submit Handler
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (item) => {
    const toastId = toast.loading("Adding Property");
    const res = await axios.post(imageHostingAPi, photo, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    // Get the new Property Data From Form
    const propertyData = {
      propertyImage: res.data.data.display_url,
      propertyTitle: item.propertyTitle,
      propertyLocation: item.propertyLocation,
      minPrice: parseInt(item.minPrice),
      maxPrice: parseInt(item.maxPrice),
      propertyVerificationStatus: "pending",
      agentName: userinfo.name,
      agentEmail: userinfo.email,
      agentImage: userinfo.photo,
    };
    // Sent the data to server
    axiosSecure.post(`/addProperty`, propertyData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Property Added Successfully", { id: toastId });
          navigate("/dashboard/addedProperties");
        }
      })
      .catch(error => {
        toast.error(error, { id: toastId })
      })
  };
  return (
    <Container>
      <div className="  rounded-xl mt-24 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body lg:w-8/12 mx-auto shadow-[0_0_20px_#E6E6E6] rounded-xl"
        >
          {/* Property Description */}
          <div>
            <h3 className="font-semibold mb-4">Property Description</h3>
            <div className="input-form">
              <label className="label">
                <span className="label-text">Property Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Property Title"
                required
                className="input-field"
                {...register("propertyTitle", { required: true })}
              />
              {errors.propertyTitle && (
                <p className="text-red-500 mt-4">Please Add Property Title</p>
              )}
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Property Description</span>
              </div>
              <textarea className="textarea textarea-bordered h-24" placeholder="Property Description"></textarea>
            </label>
          </div>
          {/* Property Prices */}
          <div >
            <h1 className="font-semibold my-4">Property Prices</h1>
            <div className="input-container">
              <div className="input-form">
                <label className="label">
                  <span className="label-text">Min Price</span>
                </label>
                <input
                  type="number"
                  name="location"
                  placeholder="min Price"
                  className="input-field"
                  {...register("minPrice", { required: true })}
                />
                {errors.minPrice && (
                  <p className="text-red-500 mt-4">Please Add a Min Price</p>
                )}
              </div>
              <div className="input-form">
                <label className="label">
                  <span className="label-text">Max Price</span>
                </label>
                <input
                  type="number"
                  name="location"
                  placeholder="max Price"
                  className="input-field"
                  {...register("maxPrice", { required: true })}
                />
                {errors.maxPrice && (
                  <p className="text-red-500 mt-4">Please Add a Max Price</p>
                )}
              </div>

            </div>
            <div className="input-container">
              <div className="input-form">
                <label className="label">
                  <span className="label-text">Homeowners Association Fee(monthly)</span>
                </label>
                <input
                  type="number"
                  name="location"
                  placeholder="min Price"
                  className="input-field"
                  {...register("associationFee", { required: true })}
                />
                {errors.associationFee && (
                  <p className="text-red-500 mt-4">Homeowners Association Fee(monthly)</p>
                )}
              </div>
              <div className="input-form">
                <label className="label">
                  <span className="label-text">Yearly Tax</span>
                </label>
                <input
                  type="number"
                  name="location"
                  placeholder="max Price"
                  className="input-field"
                  {...register("yearlyTax", { required: true })}
                />
                {errors.yearlyTax && (
                  <p className="text-red-500 mt-4">Please Add a Yearly Tax Rate</p>
                )}
              </div>
            </div>
          </div>
          {/* Property Category */}
          {/* Property Location */}
          <div className="input-container">
            <div className="input-form">
              <label className="label">
                <span className="label-text">Property Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Property Location"
                className="input-field"
                {...register("propertyLocation", { required: true })}
              />
              {errors.propertyLocation && (
                <p className="text-red-500 mt-4">Please Add Property Location</p>
              )}
            </div>

            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <div className="relative w-full">
              <label className="label absolute -z-1 input pt-2 opacity-100  input-bordered  hover:bg-gray-100 border-dashed border-main focus:border-main w-full ">
                <span className="label-text ">{photoName || 'Choose Property Picture'}</span>
              </label>
              <input
                onChange={handlePhotoUpload}
                accept="images/*"
                type="file"
                placeholder="upload your Photo"
                name="email"
                className="input w-full pt-2 z-50 opacity-0 input-bordered bg-gray-100 hover:bg-gray-100 border-dashed border-main focus:border-main"
              />
            </div>

          </div>

          <div className="input-container">

            <div className="input-form">
              <label className="label">
                <span className="label-text">Agent Name</span>
              </label>
              <input
                type="text"
                defaultValue={userinfo.name}
                name="location"
                disabled={true}
                className="input-field"
              />
            </div>

          </div>
          <div className="input-container">
            <div className="input-form">
              <label className="label">
                <span className="label-text">Agent Email</span>
              </label>
              <input
                type="text"
                defaultValue={userinfo.email}
                name="location"
                disabled={true}
                className="input-field"
              />
            </div>
            <div className="input-form">
              <label className="label">
                <span className="label-text">Agent Email</span>
              </label>
              <input
                type="text"
                defaultValue={userinfo.email}
                name="location"
                disabled={true}
                className="input-field"
              />
            </div>
          </div>
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Property Description</span>
              </div>
              <textarea className="textarea textarea-bordered h-24" placeholder="Pr"></textarea>
            </label>
          </div>
          {/* Add Property Button */}
          <button
            className="relative px-8 py-2  bg-[#072730] text-white  isolation-auto z-10 border rounded-full border-dashed border-main 
    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-main hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            Add Property
          </button>
        </form>
      </div>
    </Container>
  );
};

export default AddProperty;
