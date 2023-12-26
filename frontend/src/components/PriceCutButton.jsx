import { useState, useEffect } from "react";

export const PriceCutButton = ({ discountobject, incrementdiscount }) => {
  const [discountfetch, setDiscountFetch] = useState({});
  const discountcode = discountobject[0].DiscountID;
  const discounttype = discountobject[0].DiscountType;
  const discountpercent = discountfetch.discountobj
    ? discountfetch.discountobj.Percentage
    : 0;

  useEffect(() => {
    fetch("http://localhost:3001/api/billing/get-pricecut-discount", {
      method: "POST",
      body: JSON.stringify({
        pricecutcode: discountcode,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setDiscountFetch(data))
      .catch((e) => console.log(e));
    incrementdiscount(discountpercent);
  }, [discountpercent]);

  return (
    <div>
      <button className="btn">
        {discounttype}
        <div className="badge badge-secondary mx-2">{discountpercent}</div>
      </button>
    </div>
  );
};
