import { useState } from "react";

export const ZonalDeliveryOpsBanner = (activeTab) => {
  const [activedeliveryops, setActiveDeliveryOps] = useState("ZonalDelivery");

  let btnclass =
    activeTab === activedeliveryops ? "btn-primary" : "btn-secondary";

  return (
    <div className="">
      <ul className="menu menu-horizontal bg-base-200 rounded-box">
        <li>
          <button
            className={`btn ${btnclass} `}
            onClick={() => {
              setActiveDeliveryOps("ZonalDelivery");
            }}
          >
            Zonal Delivery
          </button>
        </li>
        <li>
          <button
            className={`btn ${btnclass} `}
            onClick={() => {
              setActiveDeliveryOps("ZonalDeliveryStats");
            }}
          >
            Zonal Delivery Stats
          </button>
        </li>
        <li>
          <button
            className={`btn ${btnclass} `}
            onClick={() => {
              setActiveDeliveryOps("ZonalDeliveryConfig");
            }}
          >
            Zonal Configuration
          </button>
        </li>
      </ul>
    </div>
  );
};
