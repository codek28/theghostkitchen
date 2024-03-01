import { useState, useEffect } from "react";

export const PriceCutButton = ({ discountobject, incrementdiscount }) => {
  const [discountfetch, setDiscountFetch] = useState({});
  const discountcode = discountobject[0].DiscountID;
  const discounttype = discountobject[0].DiscountType;
  const discountpercent = discountfetch.discountobj
    ? discountfetch.discountobj.Percentage
    : 0;
    const ipaddrpricecutbtn = process.env.REACT_APP_IPADDR + '/api/billing/get-pricecut-discount';

  useEffect(() => {
    fetch(ipaddrpricecutbtn, {
      method: "POST",
      body: JSON.stringify({
        pricecutcode: discountcode,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setDiscountFetch(data) & incrementdiscount(discountpercent))
      .catch((e) => console.log(e));
    ;
  }, [discountpercent]);

  return (
    <div>
      <button className="btn btn-sm">
        {discounttype}
        <div className="badge badge-secondary mx-2">{discountpercent}</div>
      </button>
    </div>
  );
};
