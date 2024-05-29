// "use client";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
// import axios from "axios"
import React, { useState } from 'react'
import {useSelector} from "react-redux";
import {toast} from "react-hot-toast";
import {useCreateOrderMutation} from "@/features/orders/ordersApi";


const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      maxWidth: "400px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "red"
    }
  }
}

export default function PaymentForm() {
  const {cart, totalQuantity, total} = useSelector(state => state.cart);
  const {id, address,phone} = useSelector(state => state.auth);
  const [success, setSuccess ] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const [createOrder, {isError, isLoading, isSuccess}] = useCreateOrderMutation();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })


    if(!error) {
      try {
        const {id} = paymentMethod
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
          paymentMethod: 'Card',
          itemsPrice: total,
          shippingPrice: 10,
          paymentStatus: true,
          amount: 1000,
          id,
          phone:phone,
        }
          createOrder(data);
          toast.success('Order created successfully');
        const response = await fetch('https://deshifood-zbcn-4y9hx34p8-hadidbilla.vercel.app/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
          console.log("Successful payment")
          setSuccess(true)
      } catch (error) {
        console.log("Error", error)
      }
    } else {
      console.log(error.message)
    }
  }

  return (
    <>
      {!success ?
        <form onSubmit={handleSubmit} className="max-w-[500px] mx-auto" >
          <h1 className="mb-10 font-medium text-2xl text-center text-white">
            Please enter your payment information
          </h1>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS}/>
            </div>
          </fieldset>
          <button className="payment__btn">Pay</button>
        </form>
        :
        <div>
          <h2>Congrats this is the best decision of you're life</h2>
        </div>
      }

    </>
  )
}