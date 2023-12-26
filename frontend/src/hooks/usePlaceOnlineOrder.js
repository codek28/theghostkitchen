import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearOrderInit,
  createMongoOrder,
  getOrderInit,
  getOrderToken
} from "../stores/order/orderSlice";
import { getUserLogin } from "../stores/user/userSlice";
import { selectGeoId } from "../stores/location/geoSlice";
import {
  createMongoPayment,
  selectPaymentID
} from "../stores/payment/paymentSlice";
import { cartProducts } from "../stores/cart/modcartSlice";
import { usePaymentCreator } from "./usePaymentCreator";
import { useOrderCreator } from "./useOrderCreator";

export const usePlaceOnlineOrder = () => {
  const [placeonlineorderalert, setPlaceOnlineOrderAlert] = useState(
    "Click To Place Order"
  );
  const dispatchFromPlaceOnlineOrder = useDispatch();
  const payobj = usePaymentCreator();
  const orderobj = useOrderCreator();
  const ordertoken = useSelector(getOrderToken);
  const paymentid = useSelector(selectPaymentID);
  const cartcontents = useSelector(cartProducts);
  const orderinit = useSelector(getOrderInit);
  const userloginstatus = useSelector(getUserLogin);
  const usergeoid = useSelector(selectGeoId);

  useEffect(() => {
    if (
      orderinit &
      userloginstatus &
      (usergeoid !== "") &
      (cartcontents.length > 0)
    ) {
      setPlaceOnlineOrderAlert("Order Processing");
      dispatchFromPlaceOnlineOrder(createMongoPayment(payobj));
      dispatchFromPlaceOnlineOrder(createMongoOrder(orderobj));
      if ((ordertoken !== "") & (paymentid !== "")) {
        dispatchFromPlaceOnlineOrder(clearOrderInit());
        window.location.replace("http://localhost:3000/order");
      }
    } else if (
      orderinit &
      userloginstatus &
      (usergeoid !== "") &
      (cartcontents.length === 0)
    ) {
      // send alert to add items in cart
      setPlaceOnlineOrderAlert("Please Add Items in Cart");
    } else if (
      orderinit &
      userloginstatus &
      (usergeoid === "") &
      (cartcontents.length > 0)
    ) {
      // send alert to select a location for delivery
      setPlaceOnlineOrderAlert("Please Select Location");
    } else if (
      orderinit &
      userloginstatus &
      (usergeoid !== "") &
      (cartcontents.length > 0)
    ) {
      // send alert to select a option for payment
      setPlaceOnlineOrderAlert("Please Select Payment");
    } else if (
      orderinit &
      !userloginstatus &
      (usergeoid !== "") &
      (cartcontents.length > 0)
    ) {
      // send alert to login first
    } else {
      setPlaceOnlineOrderAlert("Click above to place order");
    }
  }, [orderinit, cartcontents, userloginstatus, usergeoid]);

  return placeonlineorderalert;
};
