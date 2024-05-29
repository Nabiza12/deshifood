import { removeFromCart } from '@/features/cart/cartSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

function ProductCard({item}) {
  const dispatch = useDispatch();
  // console.log("item", item)
  return (
    <div
      className='shadow-lg rounded-3xl border bg-white  p-3 flex flex-col text-indigo-900'
      // key={product._id}
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={item.image ? item.image : 'https://st3.depositphotos.com/15340366/35894/v/600/depositphotos_358943022-stock-illustration-double-burger-with-bacon-hand.jpg '} alt="" />
      </div>
      <h1 className='font-bold text-center'>
        {item.foodName}
      </h1>
      <p className='text-center font-semibold mb-3'>price: 
      {
        item.price
      }
      </p>
      <p className='text-center font-semibold mb-3'>Quantity: 
      {
        item.quantity
      }
      </p>
      <div className='flex gap-2 mt-5'>
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-2 px-4 rounded-full mx-auto text--white'
          onClick={() => {
            // REMOVE_FROM_CART
            dispatch(removeFromCart(item))
          }}
        >
        Remove from Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard