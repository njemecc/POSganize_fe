import TrainingCardv3 from "./TrainingCardv3";
//redux
import { useSelector } from "react-redux";
import Button from "../../ui/Button";

//stripe api
import { stripeCheckout } from "../../services/apiStripe";

import { useUser } from "../authentication/useUser";

const AllCartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { email } = useUser();
  const firstName = localStorage.getItem("user").firstName;

  const sendToStripeHandler = () => {
    stripeCheckout({
      cartItems,
      email,
      firstName,
    });
  };

  return (
    <div>
      {cartItems.map((cartItem) => (
        <TrainingCardv3 training={cartItem} />
      ))}
      <Button onClick={sendToStripeHandler}>Pay with stripe</Button>
    </div>
  );
};

export default AllCartItems;
