import { useDispatch } from "react-redux";
import { usePlaceOnlineOrder } from "../../hooks/usePlaceOnlineOrder";
import { setOrderInit } from "../../stores/order/orderSlice";

export const PlaceOrder = () => {
  const dispatchFromPlaceOrder = useDispatch()
  const placeorderobj = usePlaceOnlineOrder();

  return (
    <div className="flex flex-col gap-2">
      <div>
        <button className="btn btn-primary" onClick={()=>{dispatchFromPlaceOrder(setOrderInit())}}>Place Order</button>
      </div>
      <div role="alert" className="alert alert-warning">
        <span>{placeorderobj}</span>
      </div>
    </div>
  );
};
