export const MapplsMap = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Deivery Map
            <div className="badge badge-secondary">No Pending Delivery</div>
          </h2>
          <p>Select From below to check delivery</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Pending Delivery</div>
            <div className="badge badge-outline">Active Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
};
