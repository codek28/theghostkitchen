import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUid } from "../stores/user/userSlice";
import {
  clearOrderDetails,
  getOrderInit,
  getOrderToken
} from "../stores/order/orderSlice";
import {
  clearPaymentDetails,
  selectCartCoupon,
  selectPaymentID,
  selectSuperCoupon
} from "../stores/payment/paymentSlice";
import { clearCart } from "../stores/cart/modcartSlice";
import { clearLocation } from "../stores/location/geoSlice";

export const usePostOrderHandle = () => {
  const [postorderstatus, setPostOrderStatus] = useState(
    "post order not initialised"
  );
  const dispatchPostOrder = useDispatch();

  const userid = useSelector(getUid);
  const ordertoken = useSelector(getOrderToken);
  const cartdiscount = useSelector(selectCartCoupon);
  const superdiscount = useSelector(selectSuperCoupon);
  const paymentid = useSelector(selectPaymentID);
  const orderinit = useSelector(getOrderInit)

  const ipaddrupdateorder = process.env.REACT_APP_IPADDR + '/api/user/add-active-order'
  const ipaddrupdatecartdis = process.env.REACT_APP_IPADDR + '/api/user/update-user-cart-benefits'
  const ipaddrupdatesuperdis = process.env.REACT_APP_IPADDR + '/api/user/update-user-super-benefits'

  const updateUserOrderDB = async () => {
    await fetch(ipaddrupdateorder, {
      method: "POST",
      body: JSON.stringify({
        userID: userid,
        OrderToken: ordertoken
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateCartDiscountDB = async () => {
    await fetch(ipaddrupdatecartdis, {
      method: "POST",
      body: JSON.stringify({
        ID: userid,
        CouponCode: cartdiscount
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateSuperDiscountDB = async () => {
    await fetch(ipaddrupdatesuperdis, {
      method: "POST",
      body: JSON.stringify({
        ID: userid,
        CouponCode: superdiscount
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if ((ordertoken !== "") & (paymentid !== "") & (!orderinit)) {
      updateUserOrderDB() && updateCartDiscountDB() && updateSuperDiscountDB();
      dispatchPostOrder(clearCart());
      dispatchPostOrder(clearPaymentDetails());
      dispatchPostOrder(clearOrderDetails());
      dispatchPostOrder(clearLocation());
      setPostOrderStatus("post order hook db ops dispatched");
      console.log("post order hook db ops dispatched");
    } else {
      setPostOrderStatus("some error occured post order hook");
      console.log("some error occured post order hook");
    }
  }, []);

  return postorderstatus;
};
