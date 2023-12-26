import { AdminPCBanner } from "./AdminPCBanner";
import { IndexPCTask } from "./IndexPCTask";

export const IndexPCOps = () => {
  return (
    <div className="flex flex-col gap-4 mx-auto">
      <div>
        <AdminPCBanner />
      </div>
      <div>
        <IndexPCTask />
      </div>
    </div>
  );
};
