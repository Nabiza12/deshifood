"use client"
import { removeFromCart } from '@/features/cart/cartSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
import {useGetOrderByIdQuery} from "@/features/orders/ordersApi";

function SingleOrder({params:{id}}) {
  const {data} = useGetOrderByIdQuery(id);
  console.log("data", data)
  // console.log("item", item)
  return (
    <div className="grid grid-cols-3">
      {
        data && data.orderItems.map(item => (
          <div
            className='shadow-lg rounded-3xl border bg-white  p-3 flex flex-col text-indigo-900'
            key={item._id}
          >
            <div className='h-52 w-52 mx-auto'>
              <img src={item.image ? item.image : 'https://st3.depositphotos.com/15340366/35894/v/600/depositphotos_358943022-stock-illustration-double-burger-with-bacon-hand.jpg '} alt="" />
            </div>
            <h1 className='font-bold text-center'>
              {item.name}
            </h1>
            <p className='text-center font-semibold mb-3'>price:
              {
                item.price
              }
            </p>
            <p className='text-center font-semibold mb-3'>Quantity:
              {
                item.qty
              }
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default SingleOrder