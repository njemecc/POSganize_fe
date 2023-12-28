import React from "react";
import AllCartItems from "../features/cart/AllCartItems";
import Heading from "../ui/Heading";

const CartPage = () => {
  return (
    <>
      <Heading>New membership trainings</Heading>
      <AllCartItems />
    </>
  );
};

export default CartPage;
