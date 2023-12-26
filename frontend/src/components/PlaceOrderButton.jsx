import React from "react";
import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/modcartSlice";

// check all requirements like user status & payment status & location status & cart status

export const PlaceOrderButton = () => {
  const cartList = useSelector(cartProducts);

  const OrderRequirementCheck = () => {
    cartList.length > 0 ? PlaceOrder() : sendOrderAlert();
  };

  return (
    <div>
      <button
        className=""
        onClick={() => {
          OrderRequirementCheck();
        }}
      >
        Place Order!
      </button>
    </div>
  );
};
