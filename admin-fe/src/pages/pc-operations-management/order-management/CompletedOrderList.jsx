import { getAdminPC } from "../../../stores/admin/adminSlice";
import { OrderCard } from "./OrderCard";
import { useState, useEffect } from "react";
import {useSelector} from "react-redux"

export const CompletedOrderList = () => {

  const [completedorders, setCompletedOrders] = useState([]);
  const pcid = useSelector(getAdminPC)

  useEffect(() => {
    fetch("http://localhost:3001/api/order/get-pc-completed-orders", {
      method: "POST",
      body: JSON.stringify({
        pcid:pcid,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setCompletedOrders(data))
      .catch((e) => console.log(e));
  }, [pcid]);

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <div className="grid grid-row-4">
            {completedorders?.data &&
              completedorders.data.map((order) => {
                return <OrderCard orderobj={order} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
