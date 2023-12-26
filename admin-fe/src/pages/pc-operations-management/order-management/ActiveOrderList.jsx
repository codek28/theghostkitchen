import { getAdminPC } from "../../../stores/admin/adminSlice";
import { useSelector } from "react-redux";
import { OrderCard } from "./OrderCard";
import { useState, useEffect } from "react";

export const ActiveOrderList = () => {
  const [activeorders, setActiveOrders] = useState([]);
  const pcid = useSelector(getAdminPC);

  useEffect(() => {
    fetch("http://localhost:3001/api/order/get-pc-active-orders", {
      method: "POST",
      body: JSON.stringify({
        pcid: pcid
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => setActiveOrders(data))
      .catch((e) => console.log(e));
  }, [pcid]);

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <div className="p-2 grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {activeorders.length > 0 &&
              activeorders.map((order, index) => {
                return <OrderCard orderobj={order} key={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
