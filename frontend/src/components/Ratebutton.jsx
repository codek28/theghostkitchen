import { useEffect } from "react";

export const Ratebutton = ({ customproduct }) => {
  
  useEffect(()=>{},[customproduct])

  return (
    <div className="indicator">
      <span className="indicator-item indicator-center badge badge-secondary">
        {customproduct.discountpercent}
      </span>
      <button className="btn text-lg line-through">
        {customproduct.productprice}
      </button>
      <button className="btn text-lg">
        {customproduct.productprice -
          (customproduct.productprice * customproduct.discountpercent) / 100}
      </button>
    </div>
  );
};
