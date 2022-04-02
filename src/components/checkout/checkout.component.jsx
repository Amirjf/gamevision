import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../checkout-item/checkout-item.component";
import SectionHeader from "../section-header/section-header.component";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <SectionHeader />
      {cartItems.length ? (
        <div className="flex">
          <div className="checkout w-3/5 relative">
            <AnimatePresence>
              {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </AnimatePresence>
          </div>
          {/* TODO */}
          <div className="w-2/5 relative">
            <div className="billing-form absolute w-full -right-10 bg-gradient-to-t to-darkPurple from-purple">
              <h2 className="text-2xl p-10 text-white ">Billing Form</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col">
          <i className="bx bx-cart text-9xl text-grey"></i>
          <h2 className="text-grey text-4xl">Cart is Empty .. </h2>
        </div>
      )}
    </>
  );
};

export default Checkout;
