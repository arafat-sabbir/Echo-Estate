import { Link, NavLink, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import useAuth from "../../Auth/UseAuth/useAuth";
import Button from "../../Shared/Button";
import useGetUser from "../../Hooks/GetUserInfo/useGetUser";

const Navbar = () => {
  const { userinfo } = useGetUser();

  const location = useLocation();



  const { user, signOutUser } = useAuth();
  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li
        className={
          location.pathname == "/"
            ? `hover:scale-110 duration-300 hover:text-main text-main font-bold`
            : "hover:scale-110 duration-300 hover:text-main"
        }
      >
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <ul className="lg:flex drop-shadow-2xl ">
        <li
          className={
            location.pathname == "/"
              ? `hover:scale-110 duration-300 hover:text-main text-white font-bold`
              : "hover:scale-110 duration-300 hover:text-main"
          }
        >
          <NavLink to={"/allProperties"}>All Properties</NavLink>
        </li>
        <li
          className={
            location.pathname == "/"
              ? `hover:scale-110 duration-300 hover:text-main text-white font-bold`
              : "hover:scale-110 duration-300 hover:text-main"
          }
        >
          <NavLink to={"/dashboard/myProfile"}>DashBoard</NavLink>
        </li>
      </ul>
    </>
  );
  return (
    <div className="">
      <div
        className={
          location.pathname == "/"
            ? `navbar  justify-center  py-6 relative container mx-auto  z-50`
            : "navbar  justify-center  py-6  container mx-auto z-50 "
        }
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-semibold mx-2 mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52 hover:scale-110"
            >
              {links}
            </ul>
          </div>
          <div className="hidden lg:flex  font-bold items-center">
            <Link
              to={"/"}
              className={
                location.pathname == "/"
                  ? `!flex font-black text-white  items-center  duration-300`
                  : "!flex font-bold items-center  duration-300"
              }
            >
              <img
                className="w-22 h-12"
                src="https://i.ibb.co/rbX4J5H/Untitled-design-2.png"
                alt=""
              />
              <p className="text-2xl  font-semibold">Echo Estate</p>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  font-semibold gap-4 px-1 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-bottom dropdown-end z-50 ">
            <label tabIndex={0} className="">
              {user && (
                <img
                  className="w-12 mr-4 h-12  rounded-full border-2 border-main  "
                  src={userinfo?.photo}
                  alt=""
                />
              )}
            </label>
            {user && (
              <ul className="p-2 shadow menu dropdown-content bg-[#072730da] z-[1]  rounded-box w-56">
                <img
                  className=" w-12 mx-auto  rounded-full mb-2 mt-2 border-2 border-main"
                  src={userinfo?.photo}
                  alt=""
                />
                <p className="font-semibold text-center mr-2 mb-2 text-main ">
                  {userinfo?.name}
                </p>
                <p className="font-semibold text-center mr-2 mb-2  text-main ">
                  {userinfo?.email}
                </p>
                <div className="pb-2 mx-auto" onClick={handleSignOut}>
                  <Button title={"Sign Out"}></Button>
                </div>
              </ul>
            )}
          </div>
          {user ? (
            ""
          ) : (
            <div>
              <Link to={"/signIn "} className="">
                <Button title={"Sign In"}></Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
