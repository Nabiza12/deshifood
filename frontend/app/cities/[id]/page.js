"use client";
import { addToCart } from '@/features/cart/cartSlice';
import { useGetCityByIdQuery } from '@/features/cities/cityApi';
import React from 'react'
import { useDispatch } from 'react-redux';
import {toast} from "react-hot-toast";

function SingleCity({params:{id}}) {

  console.log("params", id)
  const {data} = useGetCityByIdQuery(id);
  const dispatch = useDispatch();
  console.log("data----->", data)
  return (
    <div className='py-24'>
      <div className="container">
      <h1 className="font-bold text-5xl mb-8">
          {data?.District} City Famous Food
      </h1>
        <div className="grid grid-cols-3 gap-6">
          {
            data?.famousFood?.map((food, index) => (
              <div key={food._id} className="">
            <div className="relative pb-[70%]">
            <img className='absolute w-full h-full object-cover ' src={food.image ? food.image : 'https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Barisal.jpg?width=720'} alt="" />
            <span className="absolute top-0 left-0 z-10 text-white bg-[#1CCEA5] py-3 px-4 text-lg font-medium">
              {food.Discount}
            </span>
            </div>
            <div className=" mt-5 flex justify-between">
              <h3 className="font-semibold text-3xl">
                {food.foodName}
              </h3>
              <p className="text-xl font-medium">
                {food.price} tk
              </p>
            </div>
            <button onClick={
              () => {
                dispatch(addToCart(food));
                toast.success('Food added to cart');
              }
            } className="w-full py-3 bg-[#1CCEA5] mt-5 text-white font-medium text-xl">
              Add to cart
            </button>
          </div>
            )
            )
          }
        </div>
      </div>

    </div>
  )
}

export default SingleCity;