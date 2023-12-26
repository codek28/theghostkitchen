import { useSelector } from "react-redux";
import { getTask } from "../../stores/page/pageSlice";
import { IndexPCOrderMgmt } from "./order-management/IndexPCOrderMgmt";
import {IndexPCDeliveryManagement} from "./delivery-management/IndexPCDeliveryManagement"
import {IndexPCSupportManagement} from "./support-management/IndexPCSupportManagement"
import {IndexPCConfig} from "./configuration-management/IndexPCConfig"

export const IndexPCTask = ({
 
}) => {
  const currenttask = useSelector(getTask)

  return (
    <div>
      <div>
        {currenttask === "ORDER-MANAGEMENT" && <IndexPCOrderMgmt />}
      </div>
      <div>
        {currenttask === "SUPPORT-MANAGEMENT" && <IndexPCSupportManagement />}
      </div>
      <div>
        {currenttask === "DELIVERY-MANAGEMENT" && <IndexPCDeliveryManagement />}
      </div>
      <div>
        {currenttask === "CONFIGURATION-MANAGEMENT" && <IndexPCConfig />}
      </div>
    </div>
  );
};