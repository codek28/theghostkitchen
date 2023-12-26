import { useDispatch } from "react-redux";
import { setCartDiscount } from "../../stores/payment/paymentSlice";
import { setCartDiscountPercent } from "../../stores/payment/paymentSlice";
import { useEffect, useState } from "react";

export const UserDiscounts = ({ discountname, discountleft }) => {
  const dispatchFromUserDiscounts = useDispatch();
  const [userdiscountfetch, setUserDiscountFetch] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/api/billing/get-cart-user-discount", {
      method: "POST",
      body: JSON.stringify({
        userdiscountcode: discountname
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => setUserDiscountFetch(data))
      .catch((e) => console.log(e));
  }, [discountname]);

  const selectUserDiscount = (obj) => {
    dispatchFromUserDiscounts(setCartDiscountPercent(obj.Percentage));
    dispatchFromUserDiscounts(setCartDiscount(obj.Code));
  };

  return (
    <div className="flex flex-row p-2">
      <h3 className="">{discountname}</h3>
      {userdiscountfetch.cartdiscountobj && (
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name={`radio-variant-${userdiscountfetch.cartdiscountobj.DiscountType}`}
            className="radio radio-secondary"
            onChange={() => {
              selectUserDiscount(userdiscountfetch.cartdiscountobj);
            }}
          />
        </div>
      )}
      <div className="badge badge-outline">{discountleft} Left</div>
    </div>
  );
};
