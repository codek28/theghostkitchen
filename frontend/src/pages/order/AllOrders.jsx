// at line no. 1 , list all of live orders of person 1
//can use state for initial testing but ultimately load from database
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUid } from "../../stores/user/userSlice";
import { Order } from "./Order";

export const AllOrders = () => {
  const [allorders, setOnlineOrder] = useState([]);
  const userid = useSelector(getUid);
  const ipaddractiveorder = process.env.REACT_APP_IPADDR + '/api/order/get-user-active-orders'

  useEffect(() => {
    fetch(ipaddractiveorder, {
      method: "POST",
      body: JSON.stringify({
        userid: userid
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setOnlineOrder(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userid]);

  return (
    <div className="flex flex-row mx-auto">
      <div
        tabIndex={0}
        className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
      >
        <div className="collapse-title">Select To Track Placed Orders</div>
        <div>
          <div className="p-2 grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {allorders.length > 0 ?
              allorders.map((orderobj, index) => {
                return <Order orderobj={orderobj} key={index} />;
              }) : <div>Loading</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
