import { CompletedOrderList } from "./CompletedOrderList";
import { ActiveOrderList } from "./ActiveOrderList";

export const DashboardProfitCenter = ({}) => {
  return (
    <div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">All Orders</h2>
        <div>
          <h2>Active Order!</h2>
          <div className="">
            <ActiveOrderList />
          </div>
        </div>
        <div>
          <h2>Completed Orders!</h2>
          <div className="">
            <CompletedOrderList />
          </div>
        </div>
      </div>
    </div>
  );
};
