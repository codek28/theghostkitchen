import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryStatus } from "../../stores/order/orderSlice";
import { setCookingInstruction } from "../../stores/order/orderSlice";
import { setDeliveryCharge } from "../../stores/payment/paymentSlice";
import { selectDeliveryStatus, selectGeoId, setGeoID } from "../../stores/location/geoSlice";

export const Delivery = () => {
  const { register, getValues } = useForm({
    defaultValues: {
      instruction: "",
    },
  });
  const dispatchFromDelivery = useDispatch();
  const geoid = useSelector(selectGeoId)

  const onSubmit = () => {
    const data = getValues()
    dispatchFromDelivery(setCookingInstruction(data.instruction));
  };

  return (
    <div className="bg-indigo-800">
      <div>
        <label className="label cursor-pointer">
          <button className="btn btn-secondary text-md bg-slate-500">
            Home-Delivery
          </button>
          <input
            type="radio"
            name="deliverystatus"
            className="radio checked:bg-red-500"
            onChange={() => {
              dispatchFromDelivery(setDeliveryStatus("HOME-DELIVERY")) && dispatchFromDelivery(setDeliveryCharge(30)) && dispatchFromDelivery(setGeoID(geoid))
            }}
          />
        </label>
        <label className="label cursor-pointer">
          <button className="btn btn-secondary text-md bg-slate-500">
            Take-away
          </button>
          <input
            type="radio"
            name="deliverystatus"
            className="radio checked:bg-red-500"
            onChange={() => {
              dispatchFromDelivery(setDeliveryStatus("TAKE-AWAY")) && dispatchFromDelivery(setDeliveryCharge(0)) && dispatchFromDelivery(setGeoID("TAKE-AWAY"))
            }}
          />
        </label>
      </div>

      <div className="form-control">
          <label className="label cursor-pointer">
            <button className="btn btn-secondary text-md bg-slate-500">
              Cooking Instruction
            </button>
            <input
              {...register("instruction")}
              id="instruction"
              name="instruction"
              type="text"
              placeholder="enter instruction here"
              className="input input-bordered"
            />
          </label>
          <button
            className="btn btn-secondary text-md bg-slate-500"
            onClick={onSubmit}
          >
            Submit
          </button>
      </div>
    </div>
  );
};
