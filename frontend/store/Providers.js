'use client';

import { Provider } from "react-redux";
import store from "./store";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { Toaster } from 'react-hot-toast';
export const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <Toaster />
    <Header />
      {children}
      <Footer />
    </Provider>
  )
}