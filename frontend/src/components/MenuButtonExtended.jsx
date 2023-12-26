import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTab, setPageFlow } from "../stores/pageflow/pageSlice";
import { setTabFlow } from "../stores/pageflow/pageSlice";

import pizzaicon from "../assets/Icons/pizza.png";

const MenuButtonExtended = ({ menu }) => {

  const navigateFromMenuExtended = useNavigate();
  const dispatchFromMenuExtended = useDispatch()
  const activeTab = useSelector(getTab);

  const navigateToMenu = ({ menu }) => {
    dispatchFromMenuExtended(setPageFlow("MENU"))
    dispatchFromMenuExtended(setTabFlow(menu.ID))
    navigateFromMenuExtended(`/pc/${menu.MenuOwnership.ProfitCenterID}/${menu.ID}`);
    sessionStorage.setItem("tabname", JSON.stringify(menu.ID));
  };

  let buttonclassname = menu.ID === activeTab ? "btn-outline btn-secondary" : "btn-outline btn-info";
  
  return (
    <div className="flex flex-row">
      <button className={`sticky  ${buttonclassname} btn gap-2 h-18`}
      onClick={() => {
        navigateToMenu({ menu });
      }}>
        <img
          src={pizzaicon}
          className="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          alt="freeicons.io"
        />
        {menu.Name}
      </button>
    </div>
  );
};

export default MenuButtonExtended;
