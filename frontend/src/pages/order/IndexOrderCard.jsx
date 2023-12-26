import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CartProduct from "../../components/CartProduct";

export const IndexOrderCard = () => {
  const [orderobj, setOrderObj] = useState([]);
  const refparam = useParams();
  const ordertoken = refparam.ordertoken;

  useEffect(() => {
    fetch("http://localhost:3001/api/order/get-order", {
      method: "POST",
      body: JSON.stringify({
        ordertoken: ordertoken
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => setOrderObj(data))
      .catch((e) => console.log(e));
  }, [ordertoken]);

  return (
    <div>
      <div className="card bg-primary text-primary-content">
        <div className="card-body flex flex-col gap-2">
          <h2 className="card-title">Order Token - {ordertoken}</h2>
          <p>Cart Contents</p>
          {orderobj?.OrderToken &&
            orderobj.Contents.map((contentobj, index) => {
              return <CartProduct product={contentobj} key={index} />;
            })}
          <p>Cart Price = </p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
