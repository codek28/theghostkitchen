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
  const [taxamount, setTaxAmount] = useState(0);
  const dispatchFromPriceCalculator = useDispatch();
  const cartprice = useSelector(cartTotalPrice);
  const cartdiscount = useSelector(selectCartDiscountPercent);
  const superdiscount = useSelector(selectSuperDiscountAmount);
  const deliverycharge = useSelector(selectDeliveryCharge);

  useEffect(() => {
    const ordertotalincltax =
      ((cartprice +
        deliverycharge +
        4.5 -
        superdiscount -
        (cartprice * cartdiscount) / 100) *
        105) /
      100;
    const taxamountcalculated =
      ((cartprice +
        deliverycharge +
        4.5 -
        superdiscount -
        (cartprice * cartdiscount) / 100) *
        5) /
      100;
    setTaxAmount(taxamountcalculated);
    setOrderPrice(ordertotalincltax);
    dispatchFromPriceCalculator(setPrice(ordertotalincltax));
  }, [cartprice, superdiscount, cartdiscount, deliverycharge]);

  return (
    <div className="">
      <div className="p-2">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row justify-between gap-4">
                <h2>Cart Amount</h2>
                <h2>{cartprice}</h2>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <h2>Delivery Charge</h2>
                <h2>{deliverycharge}</h2>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <h2>Discount coupons {cartdiscount} %</h2>
                <h2>{(cartprice * cartdiscount) / 100}</h2>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <h2>Super Discount</h2>
                <h2>{superdiscount}</h2>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <h2>Convinience Fee</h2>
                <h2>4.50</h2>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <h2>Tax 5 %</h2>
                <h2>{taxamount}</h2>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <h2>Net Payable </h2>
                <h2>{orderprice}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
