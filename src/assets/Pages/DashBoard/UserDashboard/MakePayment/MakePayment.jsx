import { loadStripe } from "@stripe/stripe-js";
import useAuth from "../../../../../Auth/UseAuth/useAuth";
import { Elements } from "@stripe/react-stripe-js";
import PaymentCheakout from "./PaymentCheakout";

const MakePayment = () => {
    const {user} = useAuth()
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
    return (
        <div>
            <h3 className="text-3xl font-semibold text-center mt-60"> <span className="text-main font-bold">{user.displayName}</span> Pay Now For Your Purchase</h3>
            <div>
                <Elements stripe={stripePromise}>
                    <PaymentCheakout></PaymentCheakout>
                </Elements>
            </div>
        </div>
    );
};

export default MakePayment;