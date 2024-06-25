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
        <div className="w-full max-w-4xl">
          <form onSubmit={handleSubmit} className="join w-full flex flex-wrap lg:flex-nowrap justify-center items-center bg-white p-4 shadow-[0_0_20px_#C4C4C4] rounded-full gap-2">
            <div className="flex-grow">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                className="input w-full placeholder:text-black border-none font-semibold input-bordered rounded-full focus:outline-none"
                placeholder="Search by Title"
              />
            </div>
            <div className="divider lg:divider-horizontal hidden lg:block"></div>
            <select
              onChange={(e) => setPriceSort(e.target.value)}
              className="select w-full lg:w-auto focus:border-none font-bold focus:outline-none rounded-full join-item"
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
              className="select w-full lg:w-auto focus:outline-none focus:border-none font-bold rounded-full join-item"
            >
              <option className="font-bold" value="" disabled>
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
            <button type="submit" className="bg-main hover:bg-white hover:text-main duration-300 transition rounded-full p-4 text-white">
              <HiOutlineSearch size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
