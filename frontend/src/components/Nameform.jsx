import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../stores/user/userSlice";
import useLogger from "../hooks/useLogger";
import { selectNameOfUser } from "../stores/user/userSlice";
import { useEffect } from "react";

export const Nameform = () => {
  const dispatchFromNameform = useDispatch();
  const { register, handleSubmit } = useForm();
  const logger = useLogger();
  const nameselector = useSelector(selectNameOfUser);

  useEffect(() => {
    setUserName(nameselector);
  }, [nameselector]);

  const onSubmitName = (data) => {
    dispatchFromNameform(setUserName(data.name));
  };

  // see if logged in , no need to enter name form
  return (
    <div className="bg-indigo-900">
      <form onSubmit={handleSubmit(onSubmitName)}>
        <div className="form-control justify-center align-center ">
          <div className="text-lime-300 mx-auto flex flex-col">
            <div className="badge badge-info gap-2">
              logged in as {nameselector}
            </div>
            {nameselector === "" ? (
              <div>
                <label htmlFor="firstName" className="text-md">
                  Enter Name to register
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Enter name"
                  className="input input-bordered"
                />
                <button className="btn btn-accent btn-sm" type="submit">
                  Submit
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
