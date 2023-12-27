import React from "react";
import AllCartItems from "../features/cart/allCartItems";
import Heading from "../ui/Heading";

const CartPage = () => {
  return (
    <>
      <Heading>Your cart items</Heading>
      <AllCartItems />
    </>
  );
};

export default CartPage;
