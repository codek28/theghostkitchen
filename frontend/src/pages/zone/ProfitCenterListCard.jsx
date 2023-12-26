import { PCSelectMenuCard } from "./PCSelectMenuCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPageFlow } from "../../stores/pageflow/pageSlice";
import { setTabFlow } from "../../stores/pageflow/pageSlice";
import { setOrderPC } from "../../stores/order/orderSlice";

export const ProfitCenterListCard = ({ profitcenter }) => {
  const dispatchFromPCList = useDispatch();
  const navigateFromPCList = useNavigate();

  const navigateToPC = ({ profitcenter }) => {
    dispatchFromPCList(setOrderPC(profitcenter.ID));
    dispatchFromPCList(setPageFlow("PROFIT-CENTER"));
    dispatchFromPCList(setTabFlow(profitcenter.ID));
    navigateFromPCList(`/pc/${profitcenter.ID}`);
  };

  return (
    <div className="p-4">
      <div className="card bg-indigo-800 shadow-xl p-2">
        <div className="card-body gap-4">
          <h2 className="card-title">{profitcenter.Name}</h2>
          <p>{profitcenter.Tagline}</p>
          <div>
            <PCSelectMenuCard />
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                navigateToPC({ profitcenter });
              }}
            >
              Browse Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
