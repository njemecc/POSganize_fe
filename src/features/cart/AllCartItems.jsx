import CartItem from "./CartItem";
import styles from "./AllCartItems.module.css";

//redux
import { useSelector } from "react-redux";
import Button from "../../ui/Button";

//stripe api
import { stripeCheckout } from "../../services/apiStripe";

import { useUser } from "../authentication/useUser";

const AllCartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
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
    <div className={styles.allCartItems}>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          id={item.id}
        />
      ))}
      <div className={styles["button-wrapper"]}>
        <Button onClick={sendToStripeHandler}>Pay with stripe</Button>
      </div>
    </div>
  );
};

export default AllCartItems;
