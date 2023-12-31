import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Headroom from "react-headroom";

const MainLayout = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
