import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import Allproperties from "../Pages/AllProperties/Allproperties";
import DashBoard from "../Pages/DashBoard/Dashboard";
import Profile from "../Pages/DashBoard/Profile/Profile";
import Wishlist from "../Pages/DashBoard/UserDashboard/Wishlist/Wishlist";
import PropertyBought from "../Pages/DashBoard/UserDashboard/PropertyBought/PropertyBought";
import MyReview from "../Pages/DashBoard/UserDashboard/MyReview/MyReview";
import AddedProperties from "../Pages/DashBoard/AgentDashBoard/AddedProperties/AddedProperties";
import SoldProperties from "../Pages/DashBoard/AgentDashBoard/SoldProperties/SoldProperties";
import RequestedProperties from "../Pages/DashBoard/AgentDashBoard/Requested Properties/RequestedProperties";
import ManageProperties from "../Pages/DashBoard/AdminDashBoard/ManageProperties/ManageProperties";
import ManageUsers from "../Pages/DashBoard/AdminDashBoard/ManageUser/ManageUsers";
import ManageReviews from "../Pages/DashBoard/AdminDashBoard/ManageReview/ManageReviews";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allProperties",
        element: <Allproperties></Allproperties>,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      // all user routes
      {
        path: "myProfile",
        element: <Profile></Profile>,
      },
      // admin routes
      {
        path: "manageProperties",
        element: <ManageProperties></ManageProperties>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageReviews",
        element: <ManageReviews></ManageReviews>,
      },
      // user routes
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "propertyBought",
        element: <PropertyBought></PropertyBought>,
      },
      {
        path: "myReview",
        element: <MyReview></MyReview>,
      },
      // agent routes
      {
        path: "addedProperties",
        element: <AddedProperties></AddedProperties>,
      },
      {
        path: "soldProperties",
        element: <SoldProperties></SoldProperties>,
      },
      {
        path: "requestedProperties",
        element: <RequestedProperties></RequestedProperties>,
      },
    ],
  },
]);
