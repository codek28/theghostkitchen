import { useState, useEffect } from "react";
import { PricecutDiscountButton } from "./PricecutDiscountButton";
import usePriceCutFetcher from "../hooks/usePriceCutFetcher";
import { useRef } from "react";

export const DiscountInfoButton = ({
  DiscountObj,
  IDobj,
  customproduct,
  setCustomProduct,
}) => {
  const [pricecutarray, setPriceCutArray] = useState([]);
  const array = usePriceCutFetcher(DiscountObj, IDobj);
  const discounttotalref = useRef(0);

  const incrementdiscount = (val) => {
    (discounttotalref.current += val) &&
      setCustomProduct({
        ...customproduct,
        discountpercent: discounttotalref.current,
      });
  };

  useEffect(() => {
    array.then((val) => setPriceCutArray(val));
  }, [array]);

  return (
    <div>
      {pricecutarray.length > 0 ? (
        <PricecutDiscountButton
          pricecutarray={pricecutarray}
          incrementdiscount={incrementdiscount}
        />
      ) : (
        <button className="btn">
          Discount
          <div className="badge badge-secondary mx-2">0 %</div>
        </button>
      )}
    </div>
  );
};
