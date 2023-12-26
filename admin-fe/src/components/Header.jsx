import { useNavigate } from "react-router-dom";
import skull from "../assets/skull.png";

// improve header elements positioning

export const Header = () => {
  const navigatefromHeader = useNavigate();

  const navigateAdminHome = () => {
    navigatefromHeader(`/home`);
    sessionStorage.setItem("tabname", JSON.stringify("ADMIN-HOME"));
  };

  const navigateAdminControls = () => {
    navigatefromHeader(`/controls`);
    sessionStorage.setItem("tabname", JSON.stringify("ADMIN-CONTROLS"));
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
              <button className="btn-sm lg:btn">Options</button>
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
              navigateAdminHome();
            }}
          >
            Ghost Kitchen Admins
          </button>
        </div>
        <div className="flex-1">
          <label className="btn glass rounded-btn" tabIndex={0}>
            <img
              src={skull}
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              alt="cart logo link"
            />
            <button
              onClick={() => {
                navigateAdminControls();
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
