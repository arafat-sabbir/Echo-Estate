import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [searchText, setSearchText] = useState("Search By Property Title");
  const [priceSort, setPriceSort] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText || priceRange || priceSort) {
      sessionStorage.setItem("priceSort", priceSort);
      sessionStorage.setItem("priceRange", priceRange);
      sessionStorage.setItem("searchText", searchText);
      navigate("/allProperties");
    }
  };

  return (
    <div className="relative bg-[url('https://i.postimg.cc/c4PL0xjF/header.jpg')] w-full h-[70vh] bg-cover bg-no-repeat -mt-28 z-10">
      <div className="h-full bg-black inset-0 opacity-10 w-full absolute"></div>
      <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-center items-center z-50 px-4">
        <div className="w-full max-w-7xl">
          <form onSubmit={handleSubmit} className="join w-full flex mt-48 lg:mt-0 flex-wrap md:flex-nowrap justify-center items-center bg-white md:p-4 py-10 px-4 md:py-3 md:space-y-0 space-y-2 shadow-[0_0_20px_#C4C4C4] md:rounded-full gap-2">
            <div className="md:flex-1 flex-grow">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                className="input w-full placeholder:text-gray-600 md:border-none font-semibold input-bordered rounded-full border border-main focus:border-main focus:outline-none"
                placeholder="Search by Title"
              />
            </div>
            <div className="divider lg:divider-horizontal hidden lg:block"></div>
            <select
              onChange={(e) => setPriceSort(e.target.value)}
              className="select md:flex-1 w-full border border-main lg:w-auto focus:outline-none md:border-none font-bold rounded-full md:join-item focus:border-main"
            >
              <option className="font-bold" value="" disabled selected>
                Search By Price
              </option>
              <option value="asc">Low To High</option>
              <option value="desc">High To Low</option>
            </select>
            <div className="divider lg:divider-horizontal hidden lg:block"></div>
            <select
              defaultValue=""
              onChange={(e) => setPriceRange(e.target.value)}
              className="select md:flex-1 w-full border border-main  lg:w-auto focus:outline-none md:border-none font-bold rounded-full md:join-item focus:border-main"
            >
              <option className="font-bold " value="" disabled>
                Search By Price Range
              </option>
              <option value="50000-100000">$50000-$100000</option>
              <option value="100000-200000">$100000-$200000</option>
              <option value="200000-400000">$200000-$400000</option>
              <option value="400000-600000">$400000-$600000</option>
              <option value="600000-800000">$600000-$800000</option>
              <option value="800000-900000">$800000-$900000</option>
              <option value="900000-+">$900000 Or Above</option>
            </select>
            <button type="submit" className="bg-main flex-1 md:flex-none  md:px-4 hover:bg-white hover:text-main duration-300 transition  rounded-full md:p-4 p-3 text-white">
              <HiOutlineSearch className=" mx-auto" size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
