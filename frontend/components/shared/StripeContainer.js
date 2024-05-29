import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51N5WcSDOcQTPK206mkopzILFGWOzJWMUb3CPVHiWoZGJJW2rWcFg6YLsFpPPWPi49PctAgAqxhfbrhY01odolJZa00LRXPfcVR"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
}