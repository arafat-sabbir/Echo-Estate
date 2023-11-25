import useAuth from "../../../../../Auth/UseAuth/useAuth";

const MakePayment = () => {
    const {user} = useAuth()
    return (
        <div>
            <h3 className="text-3xl font-semibold text-center mt-10"> <span className="text-main font-bold">{user.displayName}</span> Pay Now For Your Purchase</h3>
        </div>
    );
};

export default MakePayment;