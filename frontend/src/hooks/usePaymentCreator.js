import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getPhoneNumber,
  getUid,
  getUserLogin,
  getUserName
} from "../stores/user/userSlice";
import { cartTotalPrice } from "../stores/cart/modcartSlice";
import {
  selectCartDiscountPercent,
  selectDeliveryCharge,
  selectPaymentID,
  selectSuperDiscountAmount
} from "../stores/payment/paymentSlice";
import {
  getOrderId,
  getOrderPC
} from "../stores/order/orderSlice";

export const usePaymentCreator = () => {
  const [paycreatoralert, setPayCreatorAlert] = useState("payment not initialised");

  const cartamount = useSelector(cartTotalPrice);
  const orderid = useSelector(getOrderId);
  const orderpc = useSelector(getOrderPC);

  const userid = useSelector(getUid);
  const username = useSelector(getUserName);
  const userphone = useSelector(getPhoneNumber);

  const cartdiscountpercent = useSelector(selectCartDiscountPercent);
  const deliverychargeamount = useSelector(selectDeliveryCharge);
  const superdiscountamount = useSelector(selectSuperDiscountAmount);
  const paymentid = useSelector(selectPaymentID);

  const orderpayable =
    cartamount +
    deliverychargeamount +
    4.5 -
    (cartamount * cartdiscountpercent) / 100 -
    superdiscountamount;
  const taxpayable = (orderpayable * 5) / 100;
  const totalpayable = (orderpayable * 105) / 100;

  const [payinfo, setPayInfo] = useState({
    PaymentID: "",
    OrderID: "",
    PaymentComponents: {
      CartAmount: 0,
      CartDiscount: 0,
      DeliveryCharge: 0,
      PlatformFee: 4.5,
      SuperDiscount: 0,
      TaxAmount: 0
    },
    PayableAmount: 0,
    PaymentStatus: "UN-PAID",
    PaymentUser: {
      Name: "",
      Contact: 0,
      ID: ""
    },
    PaymentTo: ""
  });

  const userloginstatus = useSelector(getUserLogin);

  useEffect(() => {
    const stateCheck = async () => {
      try {
        if (userloginstatus & (cartamount > 0)) {
          setPayInfo({
            PaymentID: paymentid,
            OrderID: orderid,
            PaymentComponents: {
              CartAmount: cartamount,
              CartDiscount: (cartamount * cartdiscountpercent) / 100,
              DeliveryCharge: deliverychargeamount,
              PlatformFee: 4.5,
              SuperDiscount: superdiscountamount,
              TaxAmount: taxpayable
            },
            PayableAmount: totalpayable,
            PaymentStatus: "UN-PAID",
            PaymentUser: {
              Name: username,
              Contact: userphone,
              ID: userid
            },
            PaymentTo: orderpc
          });
          setPayCreatorAlert("created pay Info");
          console.log(paycreatoralert);
        } else {
          setPayCreatorAlert("pay info not complete") &&
            console.log(paycreatoralert);
        }
      } catch (e) {
        setPayCreatorAlert("Some Problem Occured to create geo Info");
        console.log(e);
      }
    };

    stateCheck();
  }, [
    cartamount,
    cartdiscountpercent,
    deliverychargeamount,
    superdiscountamount
  ]);

  return payinfo;
};
