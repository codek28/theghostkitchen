import { ProfitCenterDeliveryTracking } from "./ProfitCenterDeliveryTracking";
import { useSelector, useDispatch } from "react-redux";
import { getPage, setPage } from "../../../stores/page/pageSlice";
import { DeliveryPartnerPage } from "./DeliveryPartnerPage";

export const IndexPCDeliveryManagement = ({}) => {
  const currentpage = useSelector(getPage);
  const dispatchFromPCDelivery = useDispatch();

  return (
    <div>
      <div className="card bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">PC Delivery Management</h2>
          <div className="bg-secondary mx-auto">
            <div className="join gap-2">
              <button
                className="btn join-item"
                onClick={() => {
                  dispatchFromPCDelivery(setPage("DELIVERY-PARTNER"));
                }}
              >
                DELIVERY-PARTNER
              </button>
              <button
                className="btn join-item"
                onClick={() => {
                  dispatchFromPCDelivery(setPage("DELIVERY-TRACKING"));
                }}
              >
                DELIVERY-TRACKING
              </button>
            </div>
          </div>
          {
            <div>
              <div>
                {currentpage === "DELIVERY-TRACKING" && (
                  <ProfitCenterDeliveryTracking />
                )}
              </div>
              <div>
                {currentpage === "DELIVERY-PARTNER" && <DeliveryPartnerPage />}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};
