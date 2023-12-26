import { MapplsMap } from "./MapplsMap";

export const ZonalDelivery = () => {
  return (
    <div className="flex flex-col">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Zonal Delivery</h2>
          <p>Zonal Active Orders will be redered here</p>
          <div className="card-actions">
            <button className="btn btn-primary">Pickup Pending</button>
            <button className="btn btn-secondary">Live Delivery</button>
          </div>
        </div>
      </div>
      <MapplsMap />
    </div>
  );
};
