import { useDispatch, useSelector } from "react-redux";
import { cartTotalPrice } from "../../stores/cart/modcartSlice";
import {
  selectCartDiscountPercent,
  selectDeliveryCharge,
  selectOrderPrice,
  selectSuperDiscountAmount,
  setPrice
} from "../../stores/payment/paymentSlice";
import { useState, useEffect } from "react";

// find available cartdiscount for user

export const PriceCalculator = () => {
  const [orderprice, setOrderPrice] = useState(0);
  const dispatchFromPriceCalculator = useDispatch();
  const cartprice = useSelector(cartTotalPrice);
  const cartdiscount = useSelector(selectCartDiscountPercent);
  const superdiscount = useSelector(selectSuperDiscountAmount);
  const deliverycharge = useSelector(selectDeliveryCharge);

  useEffect(() => {
    setOrderPrice(
      cartprice +
        deliverycharge +
        4.5 -
        superdiscount -
        (cartprice * cartdiscount) / 100
    ) 
      dispatchFromPriceCalculator(
        setPrice(
          cartprice +
            deliverycharge +
            4.5 -
            superdiscount -
            (cartprice * cartdiscount) / 100
        )
      );
  }, [cartprice, superdiscount, cartdiscount, deliverycharge]);

  return (
    <div className="">
      <div className="p-2">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                <h2>Cart Amount</h2>
                <h2>{cartprice}</h2>
              </div>
              <div className="flex flex-row gap-4">
                <h2>Delivery Charge</h2>
                <h2>{deliverycharge}</h2>
              </div>
              <div className="flex flex-row gap-4">
                <h2>Discount coupons {cartdiscount} %</h2>
                <h2>{(cartprice * cartdiscount) / 100}</h2>
              </div>
              <div className="flex flex-row gap-4">
                <h2>Super Discount</h2>
                <h2>{superdiscount}</h2>
              </div>
              <div className="flex flex-row gap-4">
                <h2>Convinience Fee</h2>
                <h2>4.50</h2>
              </div>
              <div className="flex flex-row gap-4">
                <h2>Order Payable</h2>
                <h2>{orderprice}</h2>
              </div>
              <div className="flex flex-row gap-4">
                <h2>Tax 5 %</h2>
                <h2>{(orderprice * 5) / 100}</h2>
              </div>
              <div className="flex flex-row gap-4">
                <h2>Net Payable </h2>
                <h2>{(orderprice * 105) / 100}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
