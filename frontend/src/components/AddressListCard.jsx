import { useDispatch, useSelector } from "react-redux";
import { setGeoID } from "../stores/location/geoSlice";
import { setOrderLocID } from "../stores/order/orderSlice";

export const AddressListCard = ({ geoobj }) => {
  const dispatchFromAddressListCard = useDispatch();

  return (
    <div className="flex flex-col bg-blue-900">
      <h2>{geoobj.Label}</h2>
      <div className="flex flex-row gap-2">
        <h2>{geoobj.Address.Line1Name}</h2>
        <h2>{geoobj.Address.Line2Street}</h2>
        <h2>{geoobj.Address.Line3Locality}</h2>
        <input
          type="radio"
          name="selectgeo"
          className="radio radio-warning self-end"
          onChange={() => {
            dispatchFromAddressListCard(setGeoID(geoobj.GeoID));
            dispatchFromAddressListCard(setOrderLocID(geoobj.GeoID))
          }}
        />
      </div>
    </div>
  );
};
