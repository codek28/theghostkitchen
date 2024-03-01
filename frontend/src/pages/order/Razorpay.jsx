import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import skull from "../../assets/skull.png";
import { getPhoneNumber, getUserName } from "../../stores/user/userSlice";
import { setOrderInit } from "../../stores/order/orderSlice";

export const Razorpay = () => {
  const [orderData, setOrderData] = useState({});
  const orderusername = useSelector(getUserName);
  const orderusernumber = useSelector(getPhoneNumber);
  const dispatchFromRazorpay = useDispatch();
  const ipaddrcreaterazpay =
    process.env.REACT_APP_IPADDR + "/api/payment/create-payment-intent";

  const createOrderHandle = async () => {
    await fetch(ipaddrcreaterazpay, {
      method: "POST",
      body: JSON.stringify({
        amount: 10000
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrderData({ data });
        sessionStorage.setItem("orderid", data.order.id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const paymentHandle = async () => {
    const options = {
      key: process.env.Razorpay_API_KEY, // Enter the Key ID generated from the Dashboard AND check if key should be called via backend or frontend
      amount: orderData.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "The Ghost Kitchen",
      description: "Transaction for Ghost Kitchen",
      image: { skull },
      order_id: orderData.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        dispatchFromRazorpay(setOrderInit())
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
