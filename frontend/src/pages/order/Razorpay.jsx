import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setOrderId, setOrderInit } from "../../stores/order/orderSlice";

export const Razorpay = () => {
  const [orderData, setOrderData] = useState({});
  const dispatchFromRazorpay = useDispatch();

  const createOrderHandle = async () => {
    await fetch("http://localhost:3001/api/payment/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({
        Amount: 10000
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrderData({ data });
        dispatchFromRazorpay(setOrderId(data.order.id));
        dispatchFromRazorpay(setOrderInit());
        sessionStorage.setItem("orderid", data.order.id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const paymentHandle = async () => {
    const options = {
      key: process.env.RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard AND check if key should be called via backend or frontend
      amount: orderData.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "The Ghost Kitchen",
      description: "Test Transaction for Ghost Kitchen",
      image: "https://example.com/your_logo",
      order_id: orderData.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:3001/api/payment/payment-verification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
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

  return (
    <div>
      <div className="flex flex-row gap-2">
        <div className="">
          <button className="btn btn-accent" onClick={createOrderHandle}>
            CREATE RAZORPAY ORDER
          </button>
        </div>
        <div className="">
          <button className="btn btn-accent" onClick={paymentHandle}>
            CHECKOUT RAZORPAY ORDER
          </button>
        </div>
      </div>
    </div>
  );
};
