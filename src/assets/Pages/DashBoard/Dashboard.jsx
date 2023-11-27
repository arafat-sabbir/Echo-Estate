import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendar,
  FaCartPlus,
  FaHome,
  FaList,
  FaMoneyBill,
  FaUser,
  FaUtensils,
  FaListUl
} from "react-icons/fa";
import useGetUser from "../../../Hooks/GetUserInfo/useGetUser";

// ... (previous imports and useGetUser hook)

const DashBoard = () => {
  const { userinfo, refetch } = useGetUser();
  const role = userinfo?.role;
  const dashboarditem = (
    <ul className="menu p-4 space-y-2 uppercase ">
      {role === "admin" ? (
        <>
          {/* admin sidebar */}
          <li>
            <NavLink to={"/dashboard/myProfile"}>
              <FaUser />
              Admin Profile
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageProperties"}>
              <FaUtensils /> Manage ProperTies
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageUsers"}>
              <FaList />
              Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageReviews"}>
              <FaBook />
              Manage Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/adverTiseProperty"}>
              <FaBook />
              AdverTise Property
            </NavLink>
          </li>
        </>
      ) : role === "user" ? (
        // user navbar
        <>
          <li>
            <NavLink to={"/dashboard/myProfile"}>
              <FaUser /> My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/wishlist"}>
              <FaCalendar /> WishList
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/propertyBought"}>
              <FaMoneyBill /> Property Bought
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/myReview"}>
              <FaCartPlus /> My Review
            </NavLink>
          </li>
        </>
      ) : role === "agent" ? (
        <>
          <li>
            <NavLink to={"/dashboard/myProfile"}>
              <FaUser /> Agent Profile
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addProperty"}>
              <FaUser /> Add Property
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addedProperties"}>
              <FaUser /> My Added Properties
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/soldProperties"}>
              <FaUser /> My Sold Properties
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/requestedProperties"}>
              <FaUser /> Requested Properties
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <div className="divider divider-error"></div>
      <li>
        <NavLink to={"/"}>
          <FaHome></FaHome> Home
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="flex">
      <div className="h-screen w-72 bg-[#F2FFE9] rounded-2xl hidden lg:block">
        <img
          src={userinfo.photo}
          className="w-20 h-20 rounded-full p-4 mx-auto border border-dashed border-main  mt-6"
          alt=""
        />
        <h3 className="text-lg font-semibold text-center">Welcome Back</h3>
        <h3 className="text-center text-2xl font-semibold mt-1">
          <span className="text-main  font-bold">{userinfo.name}</span>
        </h3>
        <div className="divider divider-error px-4 -mb-1"></div>
        {dashboarditem}
      </div>
      <div className="drawer lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="flex">
          <label htmlFor="my-drawer" className="drawer-button z-50">
            <p className="pt-4 pl-4 text-2xl"><FaListUl></FaListUl></p>
          </label>
          <div className="flex lg:hidden">
            <Outlet></Outlet>
          </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 bg-[#F2FFE9] text-base-content h-screen">
            <div>
            <img
              src={userinfo.photo}
              className="w-20 h-20 rounded-full p-4 mx-auto border border-dashed border-main  mt-6"
              alt=""
            />
            <h3 className="text-center text-xl font-semibold mt-1">
              Hello <span className="text-main font-bold">{userinfo.name}</span>
            </h3>
            <div className="divider divider-error px-4 -mb-1"></div>
            <div>
            {dashboarditem}
            </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex-1 hidden lg:block">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
