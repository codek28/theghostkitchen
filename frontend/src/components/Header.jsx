import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import skull from "../assets/skull.png";
import cart from "../assets/shopping-basket.png";
import online from "../assets/Icons/onlinelogo.png"
import { setPageFlow, setTabFlow } from "../stores/pageflow/pageSlice";

// improve header elements positioning

export const Header = () => {
  const dispatchFromHeader = useDispatch();
  const navigateforHeader = useNavigate();

  const navigateLogger = () => {
    dispatchFromHeader(setPageFlow("EVENT-FLOW"))
    dispatchFromHeader(setTabFlow("LOGGER"))
    navigateforHeader(`/logger`)
    sessionStorage.setItem("tabname", JSON.stringify("LOGGER"));
  }

  const navigateHome = () => {
    dispatchFromHeader(setPageFlow("LANDING"))
    dispatchFromHeader(setTabFlow("LANDING"))
    dispatchFromHeader({ type: "tab/tohome" });
    navigateforHeader(`/`);
    sessionStorage.setItem("tabname", JSON.stringify("HOME"));
  };

  const navigateCart = () => {
    dispatchFromHeader(setPageFlow("EVENT-FLOW"))
    dispatchFromHeader(setTabFlow("CART"))
    dispatchFromHeader({ type: "tab/tocart" });
    navigateforHeader(`/cart`);
    sessionStorage.setItem("tabname", JSON.stringify("CART"));
  };

  const navigateSideNav = () => {
    dispatchFromHeader(setPageFlow("SIDE-NAV"))
    dispatchFromHeader(setTabFlow("SIDE-NAV"))
    dispatchFromHeader({ type: "tab/tosidenav" });
    navigateforHeader(`/sidenav`);
    sessionStorage.setItem("tabname", JSON.stringify("SIDENAV"));
  };

  return (
    <nav id="header" className="flex flex-row space-evenly">
      <div className="navbar gap-2 ">
        <div className="dropdown dropdown-bottom flex-1">
          <label className="btn glass rounded-btn" tabIndex={0}>
            <img
              src={skull}
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              alt="skull logo link"
            />
          </label>
          <ul
            tabIndex={0}
            className="shadow menu menu-compact dropdown-content bg-base-100 rounded-box "
          >
            <li>
              <button
                className="btn-sm lg:btn"
                onClick={() => {
                  navigateSideNav();
                }}
              >
                Options
              </button>
            </li>
            <li>
              <button className="btn-sm lg:btn">Settings</button>
            </li>
            <li>
              <button className="btn-sm lg:btn">Logout</button>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <button
            className="btn btn-ghost text-bold text-lg md:text-xl"
            onClick={() => {
              navigateHome();
            }}
          >
            Ghost Kitchen
          </button>
        </div>
        <div className="flex-1">
        <label className="btn glass rounded-btn" tabIndex={0}>
            <img
              src={online}
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              alt="cart logo link"
            />
            <button
              onClick={() => {
                navigateLogger();
              }}
            ></button>
          </label>
        </div>
        <div className="flex-1">
          <label className="btn glass rounded-btn" tabIndex={0}>
            <img
              src={cart}
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              alt="cart logo link"
            />
            <button
              onClick={() => {
                navigateCart();
              }}
            ></button>
          </label>
        </div>
      </div>
    </nav>
  );
};

//<a href="https://www.flaticon.com/free-icons/skull" title="skull icons">Skull icons created by Freepik - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/add-to-cart" title="add to cart icons">Add to cart icons created by Freepik - Flaticon</a>
