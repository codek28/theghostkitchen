import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getPhoneNumber,
  getUid,
  getUserLogin,
  getUserName,
  getUserZone
} from "../stores/user/userSlice";
import { selectGeoId } from "../stores/location/geoSlice";
import {
  getOrderCookingInstruction,
  getOrderDeliveryStatus,
  getOrderId,
  getOrderPC
} from "../stores/order/orderSlice";
import { cartProducts, cartTotalAmount } from "../stores/cart/modcartSlice";
import {
  selectPaymentMethod,
  selectPaymentPrice
} from "../stores/payment/paymentSlice";

export const useOrderCreator = () => {
  const [ordercreatoralert, setOrderCreatorAlert] = useState(
    "order not initialised"
  );

  const userloginstatus = useSelector(getUserLogin);
  const userid = useSelector(getUid);
  const usercontact = useSelector(getPhoneNumber);
  const username = useSelector(getUserName);
  const userzone = useSelector(getUserZone);
  const orderpc = useSelector(getOrderPC);
  const ordergeoid = useSelector(selectGeoId);
  const orderprice = useSelector(selectPaymentPrice);
  const cartitems = useSelector(cartTotalAmount);
  const ordercontents = useSelector(cartProducts);
  const deliverystatus = useSelector(getOrderDeliveryStatus);
  const instruction = useSelector(getOrderCookingInstruction);
  const paymentmode = useSelector(selectPaymentMethod);
  const orderid = useSelector(getOrderId)

  const [orderinfo, setOrderInfo] = useState({
    OrderID: "",
    Contents: [],
    OrderStatus: "ACTIVE",
    OrderDetails: {
      ETA: 45,
      Preparation: {
        PreparationStatus: "YET-TO-PREPARE",
        PreparationAlert: "NO-DELAY"
      },
      Delivery: {
        DeliveryStatus: "",
        DeliveryPartnerID: ""
      },
      Instructions: ""
    },
    OrderBusinessType: "CLOUD-KITCHEN",
    OrderLocation: {
      DispatchedFrom: "",
      DispatchedTo: ""
    },
    OrderPayment: {
      PaymentAmount: 0,
      PaymentMode: "",
      PaymentStatus: "",
      PaymentID: ""
    },
    OrderForPC: "",
    OrderZone: "",
    OrderUser: {
      ID: "",
      Contact: "",
      Name: ""
    }
  });

  useEffect(() => {
    const stateCheck = async () => {
      try {
        if (userloginstatus & (cartitems > 0)) {
          setOrderInfo({
            OrderID: orderid,
            Contents: [...ordercontents],
            OrderStatus: "ACTIVE",
            OrderDetails: {
              ETA: 45,
              Preparation: {
                PreparationStatus: "YET-TO-PREPARE",
                PreparationAlert: "NO-DELAY"
              },
              Delivery: {
                DeliveryStatus: deliverystatus,
                DeliveryPartnerID: ""
              },
              Instructions: instruction
            },
            OrderBusinessType: "CLOUD-KITCHEN",
            OrderLocation: {
              DispatchedFrom: ordergeoid,
              DispatchedTo: orderpc
            },
            OrderPayment: {
              PaymentAmount: orderprice,
              PaymentMode: paymentmode,
              PaymentStatus: "PAID",
              PaymentID: ""
            },
            OrderForPC: orderpc,
            OrderZone: userzone,
            OrderUser: {
              ID: userid,
              Contact: usercontact,
              Name: username
            }
          });
          setOrderCreatorAlert("created order Info");
          console.log(ordercreatoralert);
        } else {
          setOrderCreatorAlert("order info not complete") &&
            console.log(ordercreatoralert);
        }
      } catch (e) {
        setOrderCreatorAlert("Some Problem Occured to create order Info");
        console.log(e);
      }
    };

    stateCheck();
  }, [
    orderid,
    ordercontents,
    paymentmode,
    ordergeoid,
    orderprice,
    userloginstatus,
    ordercontents,
    instruction
  ]);

  return orderinfo;
};
