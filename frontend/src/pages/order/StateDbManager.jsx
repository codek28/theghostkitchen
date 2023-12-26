import { CreateNewAddress } from "../../stores/location/geoSlice";
import { createMongoOrder } from "../../stores/order/orderSlice";
import { createMongoPayment } from "../../stores/payment/paymentSlice";
import { useGeoCreator } from "../../hooks/useGeoCreator";
import { useOrderCreator } from "../../hooks/useOrderCreator";
import { usePaymentCreator } from "../../hooks/usePaymentCreator";
import { useDispatch } from "react-redux";
import { clearOrderDetails } from "../../stores/order/orderSlice";
import { clearLocation } from "../../stores/location/geoSlice";
import { clearPaymentDetails } from "../../stores/payment/paymentSlice";

export const StateDbManager = () => {
  const dispatchFromStateDbManager = useDispatch();
  const geoobj = useGeoCreator();
  const orderobj = useOrderCreator();
  const payobj = usePaymentCreator();

  const onClearOrder = () => {
    dispatchFromStateDbManager(clearOrderDetails());
  };
  const onClearPay = () => {
    dispatchFromStateDbManager(clearPaymentDetails());
  };
  const onClearLoc = () => {
    dispatchFromStateDbManager(clearLocation());
  };
  const onSaveLoc = () => {
    dispatchFromStateDbManager(CreateNewAddress(geoobj));
  };
  const onSaveOrder = () => {
    dispatchFromStateDbManager(createMongoOrder(orderobj));
  };
  const onSavePay = () => {
    dispatchFromStateDbManager(createMongoPayment(payobj));
  };

  return (
    <div>
      <div className="grid grid-col mx-auto gap-4">
        <div className="flex flex-row gap-2">
          <div className="">
            <button className="btn btn-accent" onClick={onClearLoc}>
              CLEAR LOC STATE
            </button>
          </div>
          <div className="">
            <button className="btn btn-accent" onClick={onClearPay}>
              CLEAR PAY STATE
            </button>
          </div>
          <div className="">
            <button className="btn btn-accent" onClick={onClearOrder}>
              CLEAR ORDER STATE
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <div className="">
            <button className="btn btn-accent" onClick={onSaveLoc}>
              INITIATE LOCATION DB
            </button>
          </div>
          <div className="">
            <button className="btn btn-accent" onClick={onSavePay}>
              INITIATE PAYMENT DB
            </button>
          </div>
          <div className="">
            <button className="btn btn-accent" onClick={onSaveOrder}>
              INITIATE ORDER DB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
