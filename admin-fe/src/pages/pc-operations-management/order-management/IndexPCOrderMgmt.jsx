import { DashboardProfitCenter } from "./DashboardProfitCenter";
import { OfflineOrderPOS } from "./offline-pos/OfflineOrderPOS";


export const IndexPCOrderMgmt = () => {

    return (
      <div>
        <DashboardProfitCenter />
        <OfflineOrderPOS />
      </div>
    );
  };