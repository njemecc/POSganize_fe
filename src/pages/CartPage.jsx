import React from "react";
import AllCartItems from "../features/cart/AllCartItems";
import Heading from "../ui/Heading";
//redux
import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  return cartItems.length > 0 ? (
    <>
      <Heading>New membership trainings</Heading>
      <AllCartItems cartItems={cartItems} />
    </>
  ) : (
    <div>
      <Heading>Membership package empty</Heading>
      <Button
        onClick={() => navigate("/trainings")}
        style={{ marginTop: "1rem" }}
      >
        check trainings
      </Button>
    </div>
  );
};

export default CartPage;
