import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPaymentMethod
} from "../../stores/payment/paymentSlice";

export const Payment = () => {
  const dispatchFromPayment = useDispatch();

  return (
    <div className="bg-indigo-800">
      <div className="form-control">
        <label className="label cursor-pointer">
          <button className="btn btn-secondary text-md bg-slate-500">
            Cash on Delivery
          </button>
          <input
            type="radio"
            name="radio-payment"
            className="radio checked:bg-red-500"
            onChange={() => {
              dispatchFromPayment(setPaymentMethod("COD"));
            }}
          />
        </label>
        <label className="label cursor-pointer">
          <button className="btn btn-secondary text-md bg-slate-500">
            Online Payment
          </button>
          <input
            type="radio"
            name="radio-payment"
            className="radio checked:bg-red-500"
            onChange={() => {
              dispatchFromPayment(setPaymentMethod("ONLINE"))
            }}
          />
        </label>
      </div>
    </div>
  );
};
