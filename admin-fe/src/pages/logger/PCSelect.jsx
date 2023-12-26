import { useDispatch } from "react-redux";
import { setAdminPC } from "../../stores/admin/adminSlice";

export const PCSelect = () => {
  const dispatchFromPCSelect = useDispatch();

  const dispatchPCBhilwara = () => {
    dispatchFromPCSelect(setAdminPC("RJ06BHL-PC001"));
  };

  const dispatchPCKota = () => {
    dispatchFromPCSelect(setAdminPC("RJ20KOT-PC001"));
  };

  return (
    <div className="flex flex-row mx-auto my-2">
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Choose Center
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button
              className="btn-sm lg:btn"
              onClick={() => {
                dispatchPCBhilwara();
              }}
            >
              Bhilwara Kitchen
            </button>
          </li>
          <li>
            <button
              className="btn-sm lg:btn"
              onClick={() => {
                dispatchPCKota();
              }}
            >
              Kota Kitchen
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
