import React from "react";
import AllCartItems from "../features/cart/AllCartItems";
import Heading from "../ui/Heading";
//redux
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return cartItems.length > 0 ? (
    <>
      <Heading>New membership trainings</Heading>
      <AllCartItems cartItems={cartItems} />
    </>
  ) : (
    <Heading>Membership package empty</Heading>
  );
};

export default CartPage;
