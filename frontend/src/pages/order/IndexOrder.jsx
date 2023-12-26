import { AllOrders } from "./AllOrders";
import { OrderAlert } from "./OrderAlert";

export const IndexOrder = () => {
    return (
      <div className="flex flex-col mx-auto gap-2">
        <OrderAlert/>
        <AllOrders />
      </div>
    );
  };