import { useState, useEffect } from "react";

export const CategoryDiscountButton = ({ DiscountID }) => {
  const [discountobject, setDiscountObject] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/api/billing/get-pricecut-discount", {
      method: "POST",
      body: JSON.stringify({
        pricecutcode: DiscountID,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setDiscountObject(data))
      .catch((e) => console.log(e));
  }, [DiscountID]);

  // create a function from discountarray to sum total all applied price cuts
  // push total discount to product collapse to edit rate button

  return (
    <div>
      {discountobject.discountobj ? (
        <button className="btn">
          Category Discount
          <div className="badge badge-secondary mx-2">
           {discountobject.discountobj.Percentage} %
          </div>
        </button>
      ) : (
        <button className="btn">
          Category Discount
          <div className="badge badge-secondary mx-2">0 %</div>
        </button>
      )}
    </div>
  );
};
