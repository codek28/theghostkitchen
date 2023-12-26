import { useSelector } from "react-redux";
import { useEffect } from "react";
import { cartTotalAmount, cartTotalPrice } from "../../stores/cart/modcartSlice";

// improve functionality if possible

export const Cartalert = () => {
  const cartprice = useSelector(cartTotalPrice);
  const cartamount = useSelector(cartTotalAmount)

  const CartAlertDisplay = () => {
    try {
      if (cartamount > 0) {
        return (
          <div className="flex flex-row bg-indigo-600 rounded-md space">
            <span className="text-white text-lg flex-grow p-2">
              you have items in cart
            </span>
            <button className="btn btn-primary">{cartprice}</button>
          </div>
        );
      } else {
        return <></>;
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {}, [cartTotalPrice]);

  return <div className="w-full p-2">{CartAlertDisplay()}</div>;
};
