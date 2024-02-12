import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


const Banner = () => {
  // https://i.ibb.co/QvxP2b3/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg
  // https://i.ibb.co/qxsnQcF/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg
  // https://i.ibb.co/jHgyCMv/todd-carter-J8-v-XF8bpc-unsplash.jpg
  // https://i.ibb.co/ZTfGQt2/andreas-KRNVe-PAZw-Mg-unsplash.jpg
  // https://i.ibb.co/wBBx9gg/webaliser-TPTXZd9m-Oo-unsplash.jpg
  const [searchText, setSearchText] = useState("");
  const [priceSort, setPriceSort] = useState("");

  const navigate = useNavigate()

  const handlePriceSort = (e) => {
    const sort = e.target.value;
    if (sort === "Low To High") {
      setPriceSort("asc");
    } else if (sort === "High To Low") {
      setPriceSort("desc");
    }
  };

  const handlePriceRange = () => {

  }

  const handleSearch = () => {

  }

  const handleSubmit = () => {
    navigate("/allProperties")
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
                <option>High To Low</option>
                <option>Low To High</option>
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
                <option>$50000-$100000</option>
                <option>$100000-$200000</option>
                <option>$200000-$400000</option>
                <option>$400000-$600000</option>
                <option>$600000-$800000</option>
                <option>$800000-$900000</option>
                <option>$900000-$1000000</option>
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
