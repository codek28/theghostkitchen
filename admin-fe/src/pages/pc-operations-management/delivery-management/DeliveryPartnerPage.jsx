import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DeliveryPartnerMap } from "./DeliveryPartnerMap";
import { ActiveOrderList } from "../order-management/ActiveOrderList";
import { getAdminOrder } from "../../../stores/admin/adminSlice";

export const DeliveryPartnerPage = ({}) => {
  const [orderstate, setOrderState] = useState([]);
  const ordertoken = useSelector(getAdminOrder);

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
      .then((data) => setOrderState(data))
      .catch((e) => console.log(e));
  }, [ordertoken]);

  return (
    <div>
      <div className="card bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Delivery Partner</h2>
          <button className="btn btn-accent mx-auto">Active Orders</button>
          <ActiveOrderList />

          {orderstate?.OrderToken && (
            <div>
              <div className="flex sm:flex-col lg:flex-row gap-2">
                <div className="flex flex-col gap-2 p-2">
                  <h2 className="bg-secondary mx-auto">Order Token: {ordertoken}</h2>
                  <div>
                    <DeliveryPartnerMap ordertoken={ordertoken} geoid={orderstate.OrderLocation.DispatchedFrom} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
