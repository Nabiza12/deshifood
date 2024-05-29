"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
  totalQuantity: 0,
  isLoading: false,
  isError: false,
  error: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id, price} = action.payload;
      const existingItem = state.cart.find((item) => item._id === _id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.total += +price;
      state.totalQuantity += 1;
    },
    removeFromCart: (state, action) => {
      const { _id, price } = action.payload;
      const existingItem = state.cart.find((item) => item._id === _id);
      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item._id !== _id);
      } else {
        existingItem.quantity -= 1;
      }
      state.total -= +price;
      state.totalQuantity -= 1;
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;