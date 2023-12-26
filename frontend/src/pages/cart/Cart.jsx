import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartProducts, clearCart } from "../../stores/cart/modcartSlice";
import { Pricebutton } from "../../components/PriceButton";
import CartProduct from "../../components/CartProduct";

export const Cart = () => {
  const cartList = useSelector(cartProducts);
  const dispatchFromCart = useDispatch();

  return (
    <div>
      <div className="flex flex-row justify-center py-2">
        <div className="card w-[90%] bg-purple-600 text-primary-content">
          <div className="card-body flex flex-col align-middle justify-center">
            <h2 className="card-title">Your Cart!</h2>
            {cartList.length > 0 ? (
              cartList.map((product, index) => {
                return (
                  <div className="flex flex-row " key={index}>
                    <div className="flex-grow">
                      <CartProduct product={product} />
                    </div>
                    <div className="py-2">
                      <Pricebutton product={product} />
                    </div>
                  </div>
                );
              })
            ) : (
              <h2>Please add items to cart to proceed</h2>
            )}
          </div>
          <button
            className="btn btn-glass"
            onClick={() => {
              dispatchFromCart(clearCart());
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};
