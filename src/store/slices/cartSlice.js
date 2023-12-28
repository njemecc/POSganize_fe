import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems?.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push(newItem);
        toast.success(
          `${newItem.name} succesfully added to membership package`
        );
      } else {
        toast.error(`${newItem.name} alredy exists in your membership package`);
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity--;

        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
