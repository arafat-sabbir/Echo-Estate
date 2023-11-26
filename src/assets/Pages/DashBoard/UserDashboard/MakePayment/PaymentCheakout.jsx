import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";

const PaymentCheakout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleCheakoutSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if(error){
        console.log(error);
        toast.error(error.message,{
            style: {
              border: '1px solid #FF5B22',
              padding: '16px',
              color: '#000000',
            },
            iconTheme: {
              primary: '#d33',
              secondary: '#FFFAEE',
            },
          })
      }
      else{
        console.log(paymentMethod);
      }
  };
  return (
    <div className="w-1/2 mx-auto mt-16 shadow-[0_0_10px_#FF573B] p-10 rounded-2xl ">
      <form onSubmit={handleCheakoutSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#424770",
                "::placeholder": {
                  color: "#FF5B22",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center mt-10">
        <button
          type="submit"
          disabled={!stripe}
          className="relative px-8 py-2  bg-main text-white  isolation-auto z-10 border rounded-full border-dashed border-main 
            before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#072730] hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
        >
          Pay Now
        </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentCheakout;
