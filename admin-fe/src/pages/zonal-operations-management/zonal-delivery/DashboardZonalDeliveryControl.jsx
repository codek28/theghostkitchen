import { useState } from "react";
import { ZonalDelivery } from "./ZonalDelivery";
import { ZonalDeliveryOpsBanner } from "./ZonalDeliveryOpsBanner";


export const DashboardZonalDeliveryControl = () => {

  return (
    <div className="flex flex-col">
      <ZonalDeliveryOpsBanner />
      <ZonalDelivery/>
    </div>
  );
};
