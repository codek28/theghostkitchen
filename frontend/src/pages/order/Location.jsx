import { useDispatch, useSelector } from "react-redux";
import useGeoLocation from "../../hooks/useGeoLocation";
import { selectLocationStatus, setLocation } from "../../stores/location/geoSlice";
// set Location running twice
// not running when req

// improve dispatching state

export const Location = () => {
    const dispatchFromLoc = useDispatch();
  const locator = useGeoLocation();
  const locstatus = useSelector(selectLocationStatus)

  const onFetchLoc = () => {
    if (locator.coordinates.lat !== "") {
      dispatchFromLoc(setLocation(locator));
      console.log("location fetched success", locator);
    } else {
      dispatchFromLoc(setLocation(locator));
      console.log("location fetched success", locator);
    }
  };

  return (
    <div>
      <div className="card bg-indigo-800 shadow-xl mx-auto">
        <div className="card-body items-center text-center flex flex-col">
          <h2 className="card-title mx-auto">Provide Location!</h2>
          <div className="text-lime-300 flex flex-col gap-2 p-2">
            <h3>
              kindly allow browser to fetch location for seamless delivery
              process
            </h3>
            <button className="btn btn-primary" onClick={onFetchLoc}>
              Fetch Location
            </button>
            <div className="badge badge-secondary badge-outline">Location {locstatus ? <h2>Fetched</h2> : <h2>Pending</h2>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
