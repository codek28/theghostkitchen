import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CartProduct from "../../components/CartProduct";
import { useSelector } from "react-redux";
import { selectOrderPrice } from "../../stores/payment/paymentSlice";

export const IndexOrderCard = () => {
  const [orderobj, setOrderObj] = useState([]);
  const refparam = useParams();
  const ordertoken = refparam.ordertoken;
  const ipaddrgetorder = process.env.REACT_APP_IPADDR + "/api/order/get-order";

  useEffect(() => {
    fetch(ipaddrgetorder, {
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
        <div className="card-body flex flex-col justify-center gap-2">
          <h2 className="card-title">Order Token - {ordertoken}</h2>
          <p>Order Contents</p>
          {orderobj?.OrderToken ? (
            orderobj.Contents.map((contentobj, index) => {
              return <CartProduct product={contentobj} key={index} />;
            })
          ) : (
            <div>Loading</div>
          )}
          <div className=" btn btn-primary">Order Price = </div>
        </div>
      </div>
    </div>
  );
};
