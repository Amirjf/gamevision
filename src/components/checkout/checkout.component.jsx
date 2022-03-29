import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../checkout-item/checkout-item.component";
import SectionHeader from "../section-header/section-header.component";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <>
      <SectionHeader />
      <div className="checkout relative">
        {cartItems.map((cartItem) => (
          <CheckoutItem cartItem={cartItem} />
        ))}
      </div>
    </>
  );
};

export default Checkout;
