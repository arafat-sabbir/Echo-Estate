import { useLocation } from "react-router-dom";
import Banner from "./Banner/Banner";
import Navbar from "../../../Components/Navbar/Navbar";
import Loading from "../../../Components/Loading/Loading";

const Home = () => {
    const location = useLocation()
    console.log(location.pathname);
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;