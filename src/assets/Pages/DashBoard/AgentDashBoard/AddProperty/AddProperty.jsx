import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Container from "../../../../../Utils/Container/Container";
import useGetUser from "../../../../../Hooks/GetUserInfo/useGetUser";
import axios from "axios";
import { useState } from "react";
import AddPropertyForm from "./AddPropertyForm";
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
  const [category, setCategory] = useState(null)
  const [listedFor, setListedFor] = useState(null)
  const [division, setDivision] = useState(null)
  const [district, setDistrict] = useState(null)
  const [upozila, setUpozila] = useState(null)
  // Interior Facilities
  let interiorFacilities = []
  const handleInteriorFacilities = (e) => {
    if (e.target.checked) {
      // Add facility to the array if checked
      interiorFacilities.push(e.target.value);
    } else {
      // Remove facility from the array if unchecked
      interiorFacilities = interiorFacilities.filter(facility => facility !== e.target.value);
    }
  };
  // Outdoor Facilities
  let outdoorFacilities = []
  const handleOutdoorFacilities = (e) => {
    if (e.target.checked) {
      // Add facility to the array if checked
      outdoorFacilities.push(e.target.value);
    } else {
      // Remove facility from the array if unchecked
      outdoorFacilities = outdoorFacilities.filter(facility => facility !== e.target.value);
    }
  };
  // Other Facilities
  let otherFacilities = []
  const handleOtherFacilities = (e) => {
    if (e.target.checked) {
      // Add facility to the array if checked
      otherFacilities.push(e.target.value);
    } else {
      // Remove facility from the array if unchecked
      otherFacilities = otherFacilities.filter(facility => facility !== e.target.value);
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
      interiorFacilities,
      outdoorFacilities,
      otherFacilities,
      zipCode: item.zipCode,
      bedRooms: item.bedrooms,
      bathRooms: item.bathRooms,
      rooms: item.rooms,
      builtYear: item.builtYear,
      associationFee: item.associationFee,
      yearlyTax: item.yearlyTax,
      upozila,
      district,
      division,
      listedFor,
      category,
    };
    console.log(propertyData);
    // Sent the data to server
    // axiosSecure.post(`/addProperty`, propertyData)
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data.insertedId) {
    //       toast.success("Property Added Successfully", { id: toastId });
    //       navigate("/dashboard/addedProperties");
    //     }
    //   })
    //   .catch(error => {
    //     toast.error(error, { id: toastId })
    //   })
  };



  return (
    <Container>
      <div className="  rounded-xl mt-24 ">
        <AddPropertyForm handleOtherFacilities={handleOtherFacilities} handleOutdoorFacilities={handleOutdoorFacilities} handleInteriorFacilities={handleInteriorFacilities} handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors} setCategory={setCategory} photoName={photoName} handlePhotoUpload={handlePhotoUpload} register={register} setListedFor={setListedFor} setDistrict={setDistrict} setUpozila={setUpozila} setDivision={setDivision} />
      </div>
    </Container>
  );
};

export default AddProperty;
