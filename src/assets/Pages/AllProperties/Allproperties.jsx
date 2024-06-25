import { useEffect, useState } from "react";
import Container from "../../../Utils/Container/Container";
import PropertyCard from "./PropertyCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";
import ScrollToTop from "../../../Utils/ScroolToTop/ScrollToTop";
import AllPropertiesSkeleton from "./AllPropertiesSkeleton";
import Category from "../../../Utils/useCategoryIcon";

const Allproperties = () => {
  const axiosSecure = useAxiosSecure();
  // Get the searchText priceSort priceRange Value From SessionalStorage
  const [searchText, setSearchText] = useState(sessionStorage.getItem("searchText") || "Search By Property Title");
  const [priceSort, setPriceSort] = useState(sessionStorage.getItem("priceSort") || "All");
  const [priceRange, setPriceRange] = useState(sessionStorage.getItem("priceRange") || "All")
  const [selectedCategory, setSelectedCategory] = useState("")
  console.log(selectedCategory);
  useEffect(() => {
    ScrollToTop()
    sessionStorage.clear()
  }, [])
  const {
    data: properties = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["properties", searchText, priceSort, priceRange, selectedCategory],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/getVerifiedProperties?search=${searchText}&&priceSort=${priceSort}&&priceRange=${priceRange}&&category=${selectedCategory}`
      );
      return res.data;
    },
  });
  return (
    <>
      <div className="mb-10 lg:mt-[100px] container mx-auto p-4">
        <Helmet>
          <title>Echo Estate || All Property</title>
        </Helmet>
        <SectionTitle
          title={"All Property"}
          subtitle={"Choose The Property You Like From Here.."}
        ></SectionTitle>
        <div className="lg:w-9/12 w-[90vw] mx-auto">
          <div className="join w-full flex flex-wrap gap-2 lg:gap-0">
            <div className="w-full sm:w-auto flex-grow">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={"Search By Property Title"}
                defaultValue={`${searchText !== "Search By Property Title" ? searchText : ""}`}
                className="input w-full font-semibold input-bordered bg-gray-100/50 focus:bg-white focus:outline-none rounded-lg focus:border-main join-item"
              />
            </div>
            <div className="w-full sm:w-auto flex-grow">
              <select
                onChange={(e) => setPriceSort(e.target.value)}
                defaultValue={priceSort}
                className="select-input w-full"
              >
                <option className="font-bold" disabled value={""}>
                  Search By Price
                </option>
                <option value={"All"}>All</option>
                <option value={"asc"}>Low To High</option>
                <option value={"desc"}>High To Low</option>
              </select>
            </div>
            <div className="w-full sm:w-auto flex-grow">
              <select
                defaultValue={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="select-input w-full"
              >
                <option className="font-bold" value={""} disabled>
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
        </div>
        <div className="flex gap-8 justify-items-center items-center justify-center my-14 max-w-[90vw] overflow-x-auto lg:overflow-visible">
          {Category.map(item => (
            <p key={item.category} onClick={() => setSelectedCategory(item.category)} className={`flex flex-col gap-1 cursor-pointer ${selectedCategory === item.category ? "text-main border-b-2 border-b-main" : ""}`}>
              <item.icon size={26} className="mx-auto" />
              {item.category}
            </p>
          ))}
        </div>
        {isLoading || isPending ? <AllPropertiesSkeleton /> : ""
        }
        {
          properties.length !== 0 && (
            <Container>
              <div
                className={
                  properties.length !== 0
                    ? `grid grid-cols-1 items-stretch justify-items-center md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10 mt-12`
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
          <div className="flex flex-col justify-items-center mb-16 -mt-8 justify-center items-center ">
            <img
              loading="lazy"
              className="mx-auto"
              src="https://i.ibb.co/PFzsmpn/icons8-404-restricted-web-page-on-internet-browser-layout-100.png"
              alt=""
            />
            <h3 className="text-3xl font-semibold text-center text-main">No Properties Available</h3>
          </div>
        )
      }
    </>
  );
};

export default Allproperties;
