import { BsFillHousesFill } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { AiOutlineShop } from "react-icons/ai";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import {
  MdApartment,
  MdOutlineFamilyRestroom,
  MdOutlineOtherHouses,
  MdOutlineHouseSiding,
  MdOutlinePeople,
  MdOtherHouses,
} from "react-icons/md";
import { SiRobloxstudio } from "react-icons/si";

const Category = [
  { category: "Commercial", icon: BsFillHousesFill },
  { category: "Office", icon: HiOutlineOfficeBuilding },
  { category: "Shop", icon: AiOutlineShop },
  { category: "Residential", icon: HiOutlineBuildingLibrary },
  { category: "Apartment", icon: MdApartment },
  { category: "Condo", icon: MdOutlineFamilyRestroom },
  { category: "Multi Family House", icon: MdOutlineOtherHouses },
  { category: "Single Family House", icon: MdOutlinePeople },
  { category: "Other", icon: MdOtherHouses },
  { category: "SiRobloxstudio", icon: SiRobloxstudio },
];

export default Category;
