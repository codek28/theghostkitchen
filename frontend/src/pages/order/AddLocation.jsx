import { useDispatch } from "react-redux";
import { AddressSaved } from "../../components/AddressSaved";
import { Form } from "./Form";
import { Location } from "./Location";
import { CreateNewAddress, setSaveDetails } from "../../stores/location/geoSlice";
import { useGeoCreator } from "../../hooks/useGeoCreator";

export const AddLocation = () => {
  const dispatchFromAddLocation = useDispatch();
  const geoobj = useGeoCreator()

  const onSaveDetails = () => {
    dispatchFromAddLocation(setSaveDetails()) &&
    dispatchFromAddLocation(CreateNewAddress(geoobj))
  };

  return (
    <div>
      <div className="card bg-primary text-primary-content">
        <div className="card-body">
          <AddressSaved />
          <div className="flex flex-col gap-2">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <h2 className="card-title collapse-title text-xl font-medium">
                Add a new Address!
              </h2>
              <div className="">
                <Form />
                <Location />
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-secondary text-md bg-slate-500"
                    onClick={onSaveDetails}
                  >
                    Save Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
