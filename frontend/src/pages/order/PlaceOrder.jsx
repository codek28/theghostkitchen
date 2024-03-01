import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePlaceOnlineOrder } from "../../hooks/usePlaceOnlineOrder";
import { setOrderId, setOrderInit } from "../../stores/order/orderSlice";
import {
  selectPaymentMethod,
  selectPaymentPrice,
  setPaymentId
} from "../../stores/payment/paymentSlice";
import { setPaymentMethod } from "../../stores/payment/paymentSlice";
import { getPhoneNumber, getUserName } from "../../stores/user/userSlice";

export const PlaceOrder = () => {
  const dispatchFromPlaceOrder = useDispatch();
  const paymode = useSelector(selectPaymentMethod);
  const placeorderobj = usePlaceOnlineOrder();

  const orderprice = useSelector(selectPaymentPrice);
  const orderusername = useSelector(getUserName);
  const orderusernumber = useSelector(getPhoneNumber);
  var intValue = Math.floor(parseFloat(orderprice));

  const [razOrderData, setRazOrderData] = useState({});
  const ipaddrcreaterazpay =
    process.env.REACT_APP_IPADDR + "/api/payment/create-payment-intent";

  const createOrderHandle = async () => {
    await fetch(ipaddrcreaterazpay, {
      method: "POST",
      body: JSON.stringify({
        amount: intValue * 100
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRazOrderData({ data });
        sessionStorage.setItem("orderid", data.order.id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const paymentHandle = async () => {
    const options = {
      key: process.env.Razorpay_API_KEY, // Enter the Key ID generated from the Dashboard AND check if key should be called via backend or frontend
      amount: razOrderData.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "The Ghost Kitchen",
      description: "Transaction for Ghost Kitchen",
      order_id: razOrderData.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        dispatchFromPlaceOrder(setOrderId(response.razorpay_order_id));
        dispatchFromPlaceOrder(setPaymentId(response.razorpay_payment_id));
        alert("payment success");
        dispatchFromPlaceOrder(setOrderInit());
      },
      prefill: {
        name: orderusername,
        email: "blank@example.com",
        contact: orderusernumber
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };
    
    const razor = new window.Razorpay(options);
    razor.open();
  };

  const checkPaymentMode = () => {
    try {
      if (paymode === "ONLINE") {
        paymentHandle();
      } else if (paymode === "COD") {
        dispatchFromPlaceOrder(setOrderInit());
      } else {
        alert("Please Select Payment Method");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
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
                  dispatchFromPlaceOrder(setPaymentMethod("COD"));
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
                  dispatchFromPlaceOrder(setPaymentMethod("ONLINE")) &&
                    createOrderHandle();
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <div>
            <button
              className="btn btn-primary flex flex-row mx-auto"
              onClick={checkPaymentMode}
            >
              Place Order
            </button>
          </div>
          <div role="alert" className="alert alert-warning">
            <span>{placeorderobj}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
