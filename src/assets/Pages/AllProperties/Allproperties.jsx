import { useEffect, useState } from "react";
import Container from "../../../Utils/Container/Container";
import PropertyCard from "./PropertyCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";
import ScrollToTop from "../../../Utils/ScroolToTop/ScrollToTop";
import AllPropertiesSkeleton from "./AllPropertiesSkeleton";
import { BsFillHousesFill } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { AiOutlineShop } from "react-icons/ai";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdApartment, MdOutlineFamilyRestroom, MdOutlineOtherHouses, MdOutlineHouseSiding, MdOutlinePeople, MdOtherHouses } from "react-icons/md";
import { SiRobloxstudio } from "react-icons/si";

const Allproperties = () => {
  const axiosSecure = useAxiosSecure();
  // Get the searchText priceSort priceRange Value From SessionalStorage
  const [searchText, setSearchText] = useState(sessionStorage.getItem("searchText") || "Search By Property Title");
  const [priceSort, setPriceSort] = useState(sessionStorage.getItem("priceSort") || "All");
  const [priceRange, setPriceRange] = useState(sessionStorage.getItem("priceRange") || "All")
  useEffect(() => {
    ScrollToTop()
    sessionStorage.clear()
  }, [])
  const {
    data: properties = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["properties", searchText, priceSort, priceRange],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/getVerifiedProperties?search=${searchText}&&priceSort=${priceSort}&&priceRange=${priceRange}`
      );
      return res.data;
    },
  });
  console.log("search", searchText);
  return (
    <>
      <div className="mb-10 lg:mt-[100px] container 2xl mx-auto p-4">

        <Helmet>
          <title>Echo Estate || All Property</title>
        </Helmet>
        <SectionTitle
          title={"All Property"}
          subtitle={"Chose The Property You Like From Here.."}
        ></SectionTitle>
        <div className="lg:w-9/12 w-[90vw] mx-auto">
          <div className="join w-full">
            <div className="w-full">
              <div className="w-full">
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder={"Search By Property Title"}
                  defaultValue={`${searchText !== "Search By Property Title" ? searchText : ""}`}
                  className="input md:w-full  font-semibold input-bordered bg-gray-100/50 focus:bg-white focus:outline-none rounded-lg focus:border-main join-item"

                />
              </div>
            </div>
            <select
              onChange={(e) => setPriceSort(e.target.value)}
              defaultValue={priceSort}
              className="select-input"
            >
              <option className="font-bold " disabled value={""}>
                Search By Price
              </option>
              <option value={"All"}>All</option>
              <option value={"asc"}>Low To High</option>
              <option value={"desc"}>High To Low</option>
            </select>
            <select
              defaultValue={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="select-input"
            >
              <option className="font-bold " value={""} disabled>
                Search By Price Range
              </option>
              <option value={"All"}>All</option>
              <option value={"50000-100000"}>$50000-$100000</option>
              <option value={"100000-200000"}>$100000-$200000</option>
              <option value={"200000-400000"}>$200000-$400000</option>
              <option value={"400000-600000"}>$400000-$600000</option>
              <option value={"600000-800000"}>$600000-$800000</option>
              <option value={"800000-900000"}>$800000-$900000</option>
              <option value={"900000-Above"}>$900000 Or Above</option>
            </select>
          </div>
        </div>
        <div className="flex gap-8 justify-items-center items-center justify-center my-14">
          <p className="flex flex-col gap-1 cursor-pointer"><p className="mx-auto"><MdOutlineOtherHouses size={26} /></p>Multi Family House</p>
          <p className="flex flex-col gap-1 cursor-pointer"><p className="mx-auto"><BsFillHousesFill size={26} /></p> Commercial</p>
          <p className="flex flex-col gap-1 cursor-pointer"><p className="mx-auto"><HiOutlineOfficeBuilding size={26} /></p>Office</p>
          <p className="flex flex-col gap-1 cursor-pointer"><p className="mx-auto"><AiOutlineShop size={26} /></p>Shop</p>
          <p className="flex flex-col gap-1 cursor-pointer"><p className="mx-auto"><HiOutlineBuildingLibrary size={26} /></p>Residential</p>
          <p className="flex flex-col gap-1 cursor-pointer"><p className="mx-auto"><MdApartment size={26} /></p>Apartment</p>
          <p className="flex flex-col gap-1 cursor-pointer"><p className="mx-auto"><MdOutlineFamilyRestroom size={26} /></p>Condo</p>
          <p className="flex flex-col gap-1 cursor-pointer"><p className="mx-auto"><SiRobloxstudio size={26} /></p>Studio</p>
          <p className="flex flex-col gap-1 cursor-pointer"><p className="mx-auto"><MdOtherHouses size={26} /></p>Other</p>
          <p className="flex flex-col gap-1 cursor-pointer"><p className="mx-auto"><MdOutlineHouseSiding size={26} /></p>Single Family House</p>
        </div>
        {isLoading || isPending ? <AllPropertiesSkeleton /> : ""
        }
        {
          properties.length !== 0 && (
            <Container>
              <div
                className={
                  properties.length !== 0
                    ? `grid grid-cols-1 items-stretch justify-items-center md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-4 gap-8 my-10 mt-12`
                    : ""
                }
              >
                {properties?.map((property) => (
                  <PropertyCard
                    property={property}
                    key={property._id}
                  ></PropertyCard>
                ))}
              </div>
            </Container>
          )
        }
      </div >
      {/* If no Property Available Show A Message */}
      {
        properties.length === 0 && !isLoading && (
          <div className="flex flex-col justify-items-center  h-[40vh] justify-center items-center ">
            <img
              loading="lazy"
              className="mx-auto"
              src="https://i.ibb.co/PFzsmpn/icons8-404-restricted-web-page-on-internet-browser-layout-100.png"
              alt=""
            />
            <h3 className="text-3xl font-semibold text-center text-main">No Properties AvailAble</h3>
          </div>
        )
      }
    </>
  );
};

export default Allproperties;
