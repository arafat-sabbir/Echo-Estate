import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../Auth/UseAuth/useAuth";
import Button from "../../Shared/Button";
import useGetUser from "../../Hooks/GetUserInfo/useGetUser";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { userinfo } = useGetUser();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        className={`font-semibold ${
          isScrolled ? "text-gray-600" : location.pathname === "/" ? "text-white hover:text-main" : "hover:text-main"
        } duration-300`}
      >
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li
        className={`font-semibold ${
          isScrolled ? "text-gray-600" : location.pathname === "/" ? "text-white hover:text-main" : "hover:text-main"
        } duration-300`}
      >
        <NavLink to={"/allProperties"}>All Properties</NavLink>
      </li>
      <li
        className={`font-semibold ${
          isScrolled ? "text-gray-600" : location.pathname === "/" ? "text-white hover:text-main" : "hover:text-main"
        } duration-300`}
      >
        <NavLink to={"/dashboard/myProfile"}>Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className={`w-full ${isScrolled ? "bg-white shadow-md" : "lg:bg-transparent bg-white"} fixed top-0 left-0 z-50`}>
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <Link to={"/"} className="flex items-center">
            <img className="w-22 h-12" src="https://i.ibb.co/rbX4J5H/Untitled-design-2.png" alt="Echo Estate" />
            <p className={`text-2xl font-semibold ml-2 ${location.pathname === "/" && !isScrolled ? "lg:text-white text-black" : "text-black"}`}>
              Echo Estate
            </p>
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="menu menu-horizontal gap-4">{links}</ul>
        </div>
        <div className="flex items-center">
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <img className="w-12 h-12 rounded-full border-2 border-main" src={userinfo?.photo} alt="User" />
              </label>
              <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-white rounded-box w-56">
                <li className="flex flex-col items-center">
                  <img className="w-16 h-16 rounded-full border-2 border-main mb-2" src={userinfo?.photo} alt="User" />
                  <p className="text-center font-semibold text-main mb-2">{userinfo?.name}</p>
                  <p className="text-center font-semibold text-main mb-2">{userinfo?.email}</p>
                  <Button title="Sign Out" onClick={handleSignOut} />
                </li>
              </ul>
            </div>
          )}
          {!user && (
            <Link to={"/signIn"}>
              <Button title="Sign In" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
