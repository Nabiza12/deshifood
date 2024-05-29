"use client"
import ProductCard from '@/components/shared/ProductCard';
import {useCreateOrderMutation} from '@/features/orders/ordersApi';
import {useRouter} from 'next/router';
import React, {use, useEffect, useState} from 'react'
import {toast} from 'react-hot-toast';
import {useSelector} from 'react-redux';
import {ClipLoader} from 'react-spinners';
import StripeContainer from "@/components/shared/StripeContainer";

function CartPage() {
  // const router = useRouter();
  const {cart, totalQuantity, total} = useSelector(state => state.cart);
  const {id, address,phone} = useSelector(state => state.auth);
  const [createOrder, {isError, isLoading, isSuccess}] = useCreateOrderMutation();
  const [isPayment, setIsPayment] = useState(false);
  useEffect(() => {
    if (isSuccess && !isPayment) {
      toast.success('Order created successfully');
    } else if (isError) {
      toast.error('Something went wrong');
    }
  }, [isSuccess, isError]);
  const handleCheckout = () => {
    if (!id) {
      toast.error('Please login first');
      return;
    }
    let data = {
      userId: id,
      orderItems: cart.map(item => ({
        id: item._id,
        name: item.foodName,
        image: item.image,
        price: item.price,
        qty: item.quantity
      })),
      shippingAddress: address,
      paymentMethod: 'Cash On Delivery',
      itemsPrice: total,
      shippingPrice: 10,
      paymentStatus: false,
      isCancelled: false,
      phone: phone
    }
    console.log("data", data);
    createOrder(data);
    // window.location.href = 'https://sandbox.sslcommerz.com/EasyCheckOut/testcde3e9e6129879d14892c676010b456dd21'

  }

  const handlePayment = () => {
    if (!id)  return toast.error('Please login first');
    setIsPayment(true);

  }


  if (totalQuantity === 0) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-3xl font-semibold'>Your cart is empty</h1>
      </div>
    )
  }
  return (
    <div className="container py-8">
      {
        isPayment ? (<div className="bg-[#2bd891] rounded-lg max-w-[500px] mx-auto p-10 my-40">
          <StripeContainer/>
        </div>) : (
          <>
            <h1 className="text-4xl text-center font-semibold pb-16">
              Your Cart Products
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 my-1 border-b border-gray-400 pb-5'>
              {
                cart.map((item, index) => (
                  <ProductCard key={index} item={item}/>
                ))
              }
            </div>
          </>
        )
      }

      {
        !isPayment && (

          <div className="flex justify-end">
            <div className="">
              <div className="">
                <h3 className="text-2xl font-semibold mt-5">
                  Total Quantity: {totalQuantity}
                </h3>
                <h3 className="text-2xl font-semibold mt-5">
                  Total Price: {total} tk
                </h3>
                <div className="flex gap-3">
                  <button onClick={
                    handlePayment
                  } className="w-full py-3 bg-[#1CCEA5] mt-5 text-white font-medium text-xl rounded">
                    Payment
                    <ClipLoader
                      color="#f5f5f5"
                      loading={isLoading}
                      size={25}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </button>
                  <button onClick={handleCheckout}
                          className="w-[400px]  py-3 bg-[#1CCEA5] mt-5 text-white font-medium text-xl rounded break-normal">
                    Cash On Delivery
                    <ClipLoader
                      color="#f5f5f5"
                      loading={isLoading}
                      size={25}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CartPage;