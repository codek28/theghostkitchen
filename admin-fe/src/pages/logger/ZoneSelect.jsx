import { useDispatch } from "react-redux";
import { setAdminZone } from "../../stores/admin/adminSlice";

export const ZoneSelect = () => {
  const dispatchFromZoneSelect = useDispatch();

  const dispatchZoneBhilwara = () => {
    dispatchFromZoneSelect(setAdminZone("RJ06BHL"));
    sessionStorage.setItem("tabname", JSON.stringify("ZONE"));
  };

  const dispatchZoneKota = () => {
    dispatchFromZoneSelect(setAdminZone("RJ20KOT"));
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
                dispatchZoneBhilwara();
              }}
            >
              Bhilwara
            </button>
          </li>
          <li>
            <button
              className="btn-sm lg:btn"
              onClick={() => {
                dispatchZoneKota();
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
