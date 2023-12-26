import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserZone } from "../../stores/user/userSlice";
import { setPageFlow } from "../../stores/pageflow/pageSlice";
import { setTabFlow } from "../../stores/pageflow/pageSlice";
import { getTab } from "../../stores/pageflow/pageSlice";

export const ZoneSelect = () => {
  const currentTab = useSelector(getTab)
  const dispatchFromZoneSelect = useDispatch();
  const navigateforZone = useNavigate();

  const navigateZoneBhilwara = () => {
    dispatchFromZoneSelect(setPageFlow("ZONE"));
    dispatchFromZoneSelect(setTabFlow("RJ06BHL"));
    dispatchFromZoneSelect(setUserZone("RJ06BHL"));
    dispatchFromZoneSelect({ type: "tab/tozone" });
    navigateforZone(`/zone/bhilwara`);
    sessionStorage.setItem("tabname", JSON.stringify("ZONE"));
  };

  const navigateZoneKota = () => {
    dispatchFromZoneSelect(setPageFlow("ZONE"));
    dispatchFromZoneSelect(setTabFlow("RJ20KOT"));
    dispatchFromZoneSelect(setUserZone("RJ20KOTA"));
    dispatchFromZoneSelect({ type: "tab/tozone" });
    navigateforZone(`/zone/kota`);
    sessionStorage.setItem("tabname", JSON.stringify("ZONE"));
  };

  return (
    <div className="flex flex-row mx-auto my-2">
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Choose Location
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button
              className="btn-sm lg:btn"
              onClick={() => {
                navigateZoneBhilwara();
              }}
            >
              Bhilwara
            </button>
          </li>
          <li>
            <button
              className="btn-sm lg:btn"
              onClick={() => {
                navigateZoneKota();
              }}
            >
              Kota
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
