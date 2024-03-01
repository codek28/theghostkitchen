import { useDispatch, useSelector } from "react-redux";
import {
  selectDeliveryCharge,
  setSuperDiscount,
  setSuperDiscountAmount
} from "../../stores/payment/paymentSlice";
import { useState, useEffect } from "react";

export const SuperDiscounts = ({ discountname, discountleft }) => {
  const dispatchFromSuperDiscounts = useDispatch();
  const deliverycharge = useSelector(selectDeliveryCharge);
  const [superdiscountfetch, setSuperDiscountFetch] = useState({});
  const ipaddrsuperdis = process.env.REACT_APP_IPADDR + '/api/billing/get-super-discount'

  useEffect(() => {
    fetch(ipaddrsuperdis, {
      method: "POST",
      body: JSON.stringify({
        superdiscountcode: discountname
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => setSuperDiscountFetch(data))
      .catch((e) => console.log(e));
  }, [discountname]);

  const selectUserDiscount = (code) => {
    if (code === "SUPERDELIVERY") {
      dispatchFromSuperDiscounts(setSuperDiscountAmount(deliverycharge));
      dispatchFromSuperDiscounts(setSuperDiscount(code));
    }
  };

  return (
    <div className="flex flex-row p-2">
      <h3 className="">{discountname}</h3>
      {superdiscountfetch.superdiscountobj && (
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name={`radio-variant-${superdiscountfetch.superdiscountobj.DiscountType}`}
            className="radio radio-secondary"
            onChange={() => {
              selectUserDiscount(superdiscountfetch.superdiscountobj.Code);
            }}
          />
        </div>
      )}
      <div className="badge badge-outline">{discountleft} Left</div>
    </div>
  );
};
