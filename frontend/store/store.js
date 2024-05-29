'use client';
import apiSlice from "@/features/api/apiSlice";
import authSlice from "@/features/auth/authSlice";
import cartSlice from "@/features/cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // [authSlice.name] === ['auth'
    auth: authSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;