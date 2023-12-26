import React from "react";
import { useForm } from "react-hook-form";
import { setAddress } from "../../stores/location/geoSlice";
import { useDispatch } from "react-redux";

// update data to global user and push to database if order live
// add checkbox feature ask user if they want to keep password saved
// load saved passwords from db to ease order process

// https://blog.logrocket.com/react-hook-form-complete-guide/

export const Form = () => {
  const dispatchFromForm = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      label: "",
      address1: "",
      address2: "",
      address3: "",
    },
  });

  const onSubmitForm = (data) => {
    dispatchFromForm(setAddress(data));
    console.log(data);
  };

  return (
    <div>
      <div>
        <form className="" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="card bg-indigo-800 shadow-xl mx-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Form!</h2>
              <div className="form-control my-2 text-lime-300">
                <label className="label  mx-auto">
                  <span className="label-text text-xl font-bold text-orange-400">
                    Enter Your Address
                  </span>
                </label>
                <label className="input-group my-2">
                  <span>Label</span>
                  <input
                    {...register("label")}
                    id="label"
                    name="label"
                    type="text"
                    placeholder="Enter label (optional)"
                    className="input input-bordered"
                  />
                </label>
                <label className="input-group my-2">
                  <span>Address</span>
                  <div className="flex flex-col gap-2">
                  <input
                    {...register("address1")}
                    id="address1"
                    name="address1"
                    type="text"
                    placeholder="address line 1"
                    className="input input-bordered"
                  />
                  <input
                    {...register("address2")}
                    id="address2"
                    name="address2"
                    type="text"
                    placeholder="address line 2"
                    className="input input-bordered"
                  />
                  <input
                    {...register("address3")}
                    id="address3"
                    name="address3"
                    type="text"
                    placeholder="address line 3"
                    className="input input-bordered"
                  />
                  </div>
                </label>
                <div className="card-actions">
                  <button type="submit" className="btn btn-secondary mx-auto">
                    Submit address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
