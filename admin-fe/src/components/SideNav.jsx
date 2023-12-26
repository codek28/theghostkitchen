import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOperation } from "../stores/page/pageSlice";
import { setTask } from "../stores/page/pageSlice";
import { setPage } from "../stores/page/pageSlice";

export const SideNav = () => {
  const navigateFromSideNav = useNavigate();
  const dispatchFromSideNav = useDispatch();

  const navigateToPCOps = () => {
    navigateFromSideNav(`/pcops`);
    dispatchFromSideNav(setOperation("PCOPS"));
  };

  const navigateToZonalOps = () => {
    navigateFromSideNav(`/zonalops`);
    dispatchFromSideNav(setOperation("PCOPS"));
  };

  const navigateToBzDev = () => {
    navigateFromSideNav(`/bzdev`);
    dispatchFromSideNav(setOperation("PCOPS"));
  };

  const navigateToControls = () => {
    navigateFromSideNav(`/controls`);
    dispatchFromSideNav(setOperation("PCOPS"));
  };

  return (
    <div>
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
          <button
            className="btn-sm lg:btn"
            onClick={() => {
              navigateToZonalOps();
            }}
          >
            Zonal-Ops
          </button>
          <ul>
            <li>
              <a href="#0">Zonal Delivery</a>
              <ul>
                <li>
                  <a href="#0">Zonal Delivery Map</a>
                </li>
                <li>
                  <a href="#0">Zonal Delivery Stats</a>
                </li>
                <li>
                  <a href="#0">Zonal Delivery Config</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">Zonal Orders</a>
              <ul>
                <li>
                  <a href="#0">Zonal PC Order List</a>
                </li>
                <li>
                  <a href="#0">Zonal Order Stats</a>
                </li>
                <li>
                  <a href="#0">Zonal Order Config</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">Zonal Finance</a>
            </li>
            <li>
              <a href="#0">Zonal Support</a>
            </li>
            <li>
              <a href="#0">Zonal Tasks</a>
            </li>
            <li>
              <a href="#0">Zonal HR</a>
            </li>
          </ul>
        </li>

        <li>
          <button
            className="btn-sm lg:btn"
            onClick={() => {
              navigateToPCOps();
            }}
          >
            PC-Ops
          </button>
          <ul>
            <li>
              <button
                className="btn-sm lg:btn"
                onClick={() => {
                  dispatchFromSideNav(setTask("ORDER-MANAGEMENT"));
                }}
              >
                Order-Management
              </button>
              <ul>
                <li>
                  <a href="#0">PC Order List</a>
                </li>
                <li>
                  <a href="#0">PC Order Stats</a>
                </li>
                <li>
                  <a href="#0">PC Order Config</a>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="btn-sm lg:btn"
                onClick={() => {
                  dispatchFromSideNav(setTask("DELIVERY-MANAGEMENT"));
                }}
              >
                Delivery-Management
              </button>
              <ul>
                <li>
                  <button
                    className="btn-sm lg:btn"
                    onClick={() => {
                      dispatchFromSideNav(setPage("DELIVERY-PARTNER"));
                    }}
                  >
                    PC Delivery Partner Page
                  </button>
                </li>
                <li>
                  <button
                    className="btn-sm lg:btn"
                    onClick={() => {
                      dispatchFromSideNav(setPage("DELIVERY-TRACKING"));
                    }}
                  >
                    PC Delivery Tracking
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="btn-sm lg:btn"
                onClick={() => {
                  dispatchFromSideNav(setTask("CONFIGURATION-MANAGEMENT"));
                }}
              >
                Configuration-Management
              </button>
            </li>
            <li>
              <button
                className="btn-sm lg:btn"
                onClick={() => {
                  dispatchFromSideNav(setTask("SUPPORT-MANAGEMENT"));
                }}
              >
                Support-Management
              </button>
            </li>
          </ul>
        </li>

        <li>
          <button
            className="btn-sm lg:btn"
            onClick={() => {
              navigateToBzDev();
            }}
          >
            Bz-Dev
          </button>
          <ul>
            <li>
              <a href="#0">Business Developement Portals</a>
              <ul>
                <li>
                  <a href="#0">Event Dashboard</a>
                </li>
                <li>
                  <a href="#0">Marketing Dashboard</a>
                </li>
                <li>
                  <a href="#0">R&D Dashboard</a>
                </li>
                <li>
                  <a href="#0">Feedback Dashboard</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <button
            className="btn-sm lg:btn"
            onClick={() => {
              navigateToControls();
            }}
          >
            Controls
          </button>
          <ul>
            <li>
              <a href="#0">Admin Control Portals</a>
              <ul>
                <li>
                  <a href="#0">Role Management Dashboard</a>
                </li>
                <li>
                  <a href="#0">Self Service Dashboard</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
