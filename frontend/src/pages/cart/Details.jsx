import React from "react";
import { Cart } from "./Cart";
import { Delivery } from "../order/Delivery";
import { Payment } from "../order/Payment";
import { AddLocation } from "../order/AddLocation";
import { Billing } from "../order/Billing";
import { PlaceOrder } from "../order/PlaceOrder";
import { Razorpay } from "../order/Razorpay";

export const Details = () => {
  return (
    <div>
      <div className="p-4">
        <div className="card w-[90%] bg-purple-600 text-primary-content">
          <div className="card-body flex flex-col align-middle justify-center">
            <h2 className="card-title justify-center">Your Details!</h2>
            <div className="flex flex-col gap-4">
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-base-300 bg-base-200"
              >
                <div className="collapse-title text-xl font-medium">
                  Click To Check Cart
                </div>
                <div className="collapse-content">
                  <Cart />
                </div>
              </div>
              <div className="mx-auto">
                <AddLocation />
              </div>

              <div className="flex flex-row gap-4 mx-auto">
                <div className="mx-auto">
                  <Delivery />
                </div>
              </div>

              <div className="flex flex-col gap-4 mx-auto">
                <div>
                  <Billing />
                </div>
                <div className="mx-auto p-2">
                  <PlaceOrder />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
