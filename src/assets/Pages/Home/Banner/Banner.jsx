import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


const Banner = () => {
  // https://i.ibb.co/QvxP2b3/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg
  // https://i.ibb.co/qxsnQcF/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg
  // https://i.ibb.co/jHgyCMv/todd-carter-J8-v-XF8bpc-unsplash.jpg
  // https://i.ibb.co/ZTfGQt2/andreas-KRNVe-PAZw-Mg-unsplash.jpg
  // https://i.ibb.co/wBBx9gg/webaliser-TPTXZd9m-Oo-unsplash.jpg
  const [searchText, setSearchText] = useState(" ");
  const [priceSort, setPriceSort] = useState(" ");
  const [priceRange, setPriceRange] = useState(" ")

  const navigate = useNavigate()

  const handlePriceSort = (e) => {
    if (e.target.value) {
      setPriceSort(e.target.value)
    }
  };

  const handlePriceRange = (e) => {
    if (e.target.value) {
      setPriceRange(e.target.value)
    }
  }

  const handleSearch = (e) => {
    if (e.target.value) {
      setSearchText(e.target.value)
    }
  }

  const handleSubmit = () => {
    if (searchText || priceRange || priceSort) {
      sessionStorage.setItem("priceSort", priceSort)
      sessionStorage.setItem("priceRange", priceRange)
      sessionStorage.setItem("searchText", searchText)
      navigate("/allProperties")
    }
  }

  return (
    <div className="relative bg-[url('https://i.postimg.cc/c4PL0xjF/header.jpg')] w-full h-[70vh] bg-cover bg-no-repeat -mt-28 z-10">
      <div className=" absolute top-[45%] left-[20%] ">
        <div>
          <div className="lg:w-[1200px] w-[80vw] mx-auto ">
            <form onSubmit={handleSubmit} className="join w-full flex justify-center items-center justify-items-center bg-white p-4 shadow-[0_0_20px_#C4C4C4] rounded-full">
              <div className="w-1/2">
                <input
                  onChange={handleSearch}
                  className="input md:w-full placeholder:text-black border-none  font-semibold input-bordered rounded-full   focus:outline-none"
                  placeholder="Search by Title"
                />
              </div>
              <div className="divider lg:divider-horizontal"></div>
              <select
                onChange={handlePriceSort}
                className="select  lg:w-auto w-[20vw] focus:border-none  font-bold focus:outline-none  rounded-full  join-item"
              >
                <option className="font-bold " disabled selected>
                  Search By Price
                </option>
                <option value={"asc"}>Low To High</option>
                <option value={"desc"}>High To Low</option>
              </select>
              <div className="divider lg:divider-horizontal"></div>
              <select
                defaultValue={""}
                onChange={handlePriceRange}
                className="select  lg:w-auto w-[20vw] focus:outline-none focus:border-none font-bold rounded-full  join-item"
              >
                <option className="font-bold " disabled value={""}>
                  Search By Price Range
                </option>
                <option value={"50000-100000"}>$50000-$100000</option>
                <option value={"100000-200000"}>$100000-$200000</option>
                <option value={"200000-400000"}>$200000-$400000</option>
                <option value={"400000-600000"}>$400000-$600000</option>
                <option value={"600000-800000"}>$600000-$800000</option>
                <option value={"800000-900000"}>$800000-$900000</option>
                <option value={"900000+"}>$900000 Or Above</option>
              </select>
              <button type="submit" className="bg-main hover:bg-white hover:text-main duration-300 transition rounded-full p-4 text-white"><HiOutlineSearch size={24} /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
