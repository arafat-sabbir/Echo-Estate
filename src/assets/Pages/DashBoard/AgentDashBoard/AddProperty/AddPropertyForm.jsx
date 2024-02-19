/* eslint-disable react/prop-types */
import { divisions, districts, categoryOptions, upazilas } from "../../../../../Utils/useGetPlaces"
import { FaUpload } from "react-icons/fa";



const AddPropertyForm = ({ handleSubmit, onSubmit, handleInteriorFacilities, handleOtherFacilities, handleOutdoorFacilities, register, errors, handlePhotoUpload, photoName, setCategory, setUpozila, setDistrict, setDivision, setListedFor }) => {


    return (
        <div>
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
                        <textarea  {...register("description", { required: true })} className="textarea border-2 bg-gray-100 border-gray-200 focus:bg-white focus:outline-none h-24" placeholder="Property Description"></textarea>
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
                                placeholder="Association Fee"
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
                                placeholder="Yearly Tax"
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
                <div>
                    <h1 className="font-semibold my-4">Select Categories</h1>
                    <div className="input-container">
                        <select
                            className="select-input flex-1"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option className="font-bold " disabled value={""}>
                                Category
                            </option>
                            {categoryOptions?.map((category, index) => <option key={index} value={category}>{category}</option>)}
                        </select>
                        <select
                            className="select-input flex-1"
                            defaultValue={""}
                            onChange={(e) => setListedFor(e.target.value)}
                        >
                            <option className="font-bold " disabled value={""}>
                                Listed On
                            </option>
                            <option value={"For Rent"}>For Rent</option>
                            <option value={"For Sale"}>For Sale</option>
                        </select>
                    </div>
                </div>
                {/* Property Location */}
                <div >
                    <h1 className="font-semibold my-4">Property Location</h1>
                    <div className="input-form">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter Address"
                            className="input-field"
                            {...register("address", { required: true })}
                        />
                        {errors.address && (
                            <p className="text-red-500 mt-4">Please Add Property Address</p>
                        )}
                    </div>
                    {/* Division And District */}
                    <div className="input-container">
                        <select
                            className="select-input flex-1"
                            defaultValue={"division"}
                            onChange={(e) => setDivision(e.target.value)}
                        >
                            <option className="font-bold" disabled value={"division"}>
                                Select Division
                            </option>
                            {divisions?.map((division, index) => <option key={index} value={division}>{division}</option>)}
                        </select>
                        <select
                            className="select-input flex-1 my-4"
                            defaultValue={"Districts"}
                            onChange={(e) => setDistrict(e.target.value)}
                        >
                            <option className="font-bold " disabled value={"Districts"}>
                                Select Districts
                            </option>
                            {districts?.map((district, index) => <option key={index} value={district}>{district}</option>)}
                        </select>

                    </div>
                    {/* Upozilla And Zip */}
                    <div className="input-container">
                        <select
                            className="select-input flex-1"
                            defaultValue={"Upozila"}
                            onChange={(e) => setUpozila(e.target.value)}
                        >
                            <option className="font-bold " disabled value={"Upozila"}>
                                Select Upazila
                            </option>
                            {upazilas?.map((upozila, index) => <option key={index} value={upozila}>{upozila}</option>)}
                        </select>
                        {/* zip */}
                    </div>
                    {/* Longitude and Latitude */}
                    <div className="input-container my-4">
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Latitude (for Google Maps)</span>
                            </label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Latitude (for Google Maps)"
                                className="input-field"
                                {...register("latitude", { required: true })}
                            />
                            {errors.latitude && (
                                <p className="text-red-500 mt-4">Please Add Latitude For Google Map</p>
                            )}
                        </div>
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Longitude (for Google Maps)</span>
                            </label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Longitude (for Google Maps)"
                                className="input-field"
                                {...register("longitude", { required: true })}
                            />
                            {errors.longitude && (
                                <p className="text-red-500 mt-4">Please Add Longitude For Google Map</p>
                            )}
                        </div>
                    </div>
                </div>
                {/*  */}
                <div>
                    <h1 className="font-semibold my-4">Property Detail</h1>
                    <div className="input-container">
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Size in ft2 (*only numbers)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Size in ft2"
                                className="input-field"
                                {...register("propertySize", { required: true })}
                            />
                            {errors.propertySize && (
                                <p className="text-red-500 mt-4">Please Add PropertySize</p>
                            )}
                        </div><div className="input-form">
                            <label className="label">
                                <span className="label-text">Rooms (*only numbers)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Number of Rooms"
                                className="input-field"
                                {...register("rooms", { required: true })}
                            />
                            {errors.rooms && (
                                <p className="text-red-500 mt-4">Please Add Total Number Of Rooms</p>
                            )}
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Bedrooms (*only numbers)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Number of  Bedrooms"
                                className="input-field"
                                {...register("bedrooms", { required: true })}
                            />
                            {errors.bedrooms && (
                                <p className="text-red-500 mt-4">Please Add Number Of Bedrooms</p>
                            )}
                        </div><div className="input-form">
                            <label className="label">
                                <span className="label-text">Bathrooms (*only numbers)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Number of Bathrooms"
                                className="input-field"
                                {...register("bathrooms", { required: true })}
                            />
                            {errors.bathrooms && (
                                <p className="text-red-500 mt-4">Please Add Number of Bathrooms</p>
                            )}
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-form">
                            <label className="label">
                                <span className="label-text">Year Built (*numeric)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Property Built Year"
                                className="input-field"
                                {...register("builtYear", { required: true })}
                            />
                            {errors.builtYear && (
                                <p className="text-red-500 mt-4">Please Add The Year Of the Property Was Build</p>
                            )}
                        </div><div className="input-form">
                            <label className="label">
                                <span className="label-text">
                                    Estimated Taxes (*text)</span>
                            </label>
                            <input
                                type="number"
                                name="location"
                                placeholder="Estimated Taxes (*text)"
                                className="input-field"
                                {...register("estimatedTaxes ", { required: true })}
                            />
                            {errors.estimatedTaxes && (
                                <p className="text-red-500 mt-4">Please Add a Estimated Tax</p>
                            )}
                        </div>
                    </div>
                </div>
                {/* Checkbox */}
                <div>
                    <h1 className="font-semibold my-4">Amenities and Features</h1>
                    <h3 className="font-medium my-4">Interior Details</h3>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Equipped Kitchen"} onChange={handleInteriorFacilities} className="checkbox checkbox-error" />
                            <span>Equipped Kitchen</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Fireplace"} onChange={handleInteriorFacilities} className="checkbox checkbox-error" />
                            <span>Fireplace</span>
                        </div> <div className="flex gap-2">
                            <input type="checkbox" value={"Hot Bath"} onChange={handleInteriorFacilities} className="checkbox checkbox-error" />
                            <span>Hot Bath</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Gym"} onChange={handleInteriorFacilities} className="checkbox checkbox-error" />
                            <span>Gym</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Laundry"} onChange={handleInteriorFacilities} className="checkbox checkbox-error" />
                            <span>Laundry</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Media Room"} onChange={handleInteriorFacilities} className="checkbox checkbox-error" />
                            <span>Media Room</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium my-4">Outdoor Detail</h1>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Back yard"} onChange={handleOutdoorFacilities} className="checkbox checkbox-error" />
                            <span>Back yard</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Basketball court"} onChange={handleOutdoorFacilities} className="checkbox checkbox-error" />
                            <span>Basketball court</span>
                        </div> <div className="flex gap-2">
                            <input type="checkbox" value={"Chair Accessible"} onChange={handleOutdoorFacilities} className="checkbox checkbox-error" />
                            <span>Chair Accessible</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Garage Attached"} onChange={handleOutdoorFacilities} className="checkbox checkbox-error" />
                            <span>Garage Attached</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Pool"} onChange={handleOutdoorFacilities} className="checkbox checkbox-error" />
                            <span>Pool</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Water"} onChange={handleOutdoorFacilities} className="checkbox checkbox-error" />
                            <span>Water</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium my-4">Other Features</h1>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Elevator"} onChange={handleOtherFacilities} className="checkbox checkbox-error" />
                            <span>Elevator</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"Washer and dryer"} onChange={handleOtherFacilities} className="checkbox checkbox-error" />
                            <span>Washer and dryer</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={"WiFi"} onChange={handleOtherFacilities} className="checkbox checkbox-error" />
                            <span>WiFi</span>
                        </div>
                    </div>
                </div>
                <div className="relative w-full mt-6">
                    <label className="label absolute -z-1 py-20 input pt-2 opacity-100  input-bordered  hover:bg-gray-100 border-dashed border-main focus:border-main w-full">
                        <span className="  m-auto mt-6 flex items-center gap-2"><FaUpload size={20} />{photoName || 'Upload Property Picture'}</span>
                    </label>
                    <input
                        onChange={handlePhotoUpload}
                        accept="images/*"
                        type="file"
                        placeholder="upload your Photo"
                        name="email"
                        className="input  w-full pt-2 py-20 z-50 opacity-0 input-bordered bg-gray-100 hover:bg-gray-100 border-dashed border-main focus:border-main"
                    />
                </div>
                {/* Add Property Button */}
                <button
                    className="relative px-8 py-2 mt-6  bg-[#072730] text-white  isolation-auto z-10 border rounded-full border-dashed border-main 
                     before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-main hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                >
                    Add Property
                </button>
            </form>
        </div>
    );
};

export default AddPropertyForm;