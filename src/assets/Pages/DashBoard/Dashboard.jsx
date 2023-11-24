import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendar,
  FaCartPlus,
  FaEnvelope,
  FaHome,
  FaList,
  FaMoneyBill,
  FaShoppingBag,
  FaUser,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import useGetUser from "../../../Hooks/GetUserInfo/useGetUser";

// ... (previous imports and useGetUser hook)

const DashBoard = () => {
  const { userinfo, refetch } = useGetUser();
  const role = userinfo?.role;

  return (
    <div className="flex">
      <div className="h-screen w-64 bg-[#F2FFE9] rounded-2xl ">
        <ul className="menu p-4 space-y-2 uppercase mt-6">
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
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
