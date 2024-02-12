import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";


const Banner = () => {
  // https://i.ibb.co/QvxP2b3/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg
  // https://i.ibb.co/qxsnQcF/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg
  // https://i.ibb.co/jHgyCMv/todd-carter-J8-v-XF8bpc-unsplash.jpg
  // https://i.ibb.co/ZTfGQt2/andreas-KRNVe-PAZw-Mg-unsplash.jpg
  // https://i.ibb.co/wBBx9gg/webaliser-TPTXZd9m-Oo-unsplash.jpg
  const [searchText, setSearchText] = useState("");
  const [priceSort, setPriceSort] = useState("");

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

  console.log(priceSort, searchText);

  return (
    <div className="relative bg-[url('https://i.postimg.cc/c4PL0xjF/header.jpg')] w-[100vw] h-[70vh] bg-cover bg-no-repeat -mt-28 z-10">
      <div className=" absolute top-[45%] left-[20%] ">
        <div>
          <div className="lg:w-[1200px] w-[90vw] mx-auto">
            <div className="join w-full">
              <div className="w-full">
                <div className="w-full">
                  <input
                    onChange={handleSearch}
                    className="input md:w-full  font-semibold input-bordered border-main  rounded-full focus:border-main join-item"
                    placeholder="Search by Title"
                  />
                </div>
              </div>
              <select
                onChange={handlePriceSort}
                className="select select-bordered lg:w-auto w-[20vw] font-bold border-main focus:border-main rounded-full  join-item"
              >
                <option className="font-bold " disabled selected>
                  Search By Price
                </option>
                <option>High To Low</option>
                <option>Low To High</option>
              </select>
              <select
                defaultValue={""}
                onChange={handlePriceRange}
                className="select select-bordered lg:w-auto w-[20vw] font-bold border-main focus:border-main rounded-full  join-item"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
