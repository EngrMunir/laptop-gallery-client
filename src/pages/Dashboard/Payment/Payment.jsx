import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements, loadStripe } from "@stripe/react-stripe-js"

// TODO add publishable key
const stripePromise = loadStripe('')
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    
                </Elements>
            </div>
        </div>
    );
};

export default Payment;