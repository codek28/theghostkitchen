import { useDispatch } from "react-redux";
import { setAdminOrder } from "../../../stores/admin/adminSlice";
import { completeOnlineOrder } from "../../../functions/completeOnlineOrder";

export const OrderCard = ({ orderobj }) => {
  const dispatchFromOrderCard = useDispatch();
  const userid = orderobj.OrderUser.ID;
  const username = orderobj.OrderUser.Name;
  const ordertoken = orderobj.OrderToken;
  const usercontact = orderobj.OrderUser.Contact;

  return (
    <div>
      <div className="card bg-blue-900 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title flex flex-col gap-2">
            Order Token - {ordertoken}
          </h2>
          <div className="card-body">
            <h2 className="card-title">UserName - {username}</h2>
            <h2 className="card-title">UserNumber - {usercontact}</h2>
          </div>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatchFromOrderCard(setAdminOrder(ordertoken))
              }}
            >
              Select Order
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                completeOnlineOrder({ userid, ordertoken });
              }}
            >
              Complete Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
