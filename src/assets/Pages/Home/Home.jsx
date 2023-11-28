import Banner from "./Banner/Banner";
import Advertise from "./Advertise/Advertise";
import LatestReview from "./LatestReview/LatestReview";
import SeeRooms from "./SeeRooms/SeeRooms";
import Ourpartner from "./OurPartner/Ourpartner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>,
            <Advertise></Advertise>,
            <LatestReview></LatestReview>,
            <SeeRooms></SeeRooms>,
            <Ourpartner></Ourpartner>
        </div>
    );
};

export default Home;