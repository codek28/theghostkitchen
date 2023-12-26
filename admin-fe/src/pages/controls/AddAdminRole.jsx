import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { clearAdmin } from "../../stores/admin/adminSlice";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const AddAdminRole = () => {
  const dispatchFromLogger = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const values = getValues();

  const Logout = () => {
    signOut(auth)
      .then(() => {
        dispatchFromLogger(clearAdmin());
        console.log("signOut confirmed");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = () => {
    console.log(values)
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("sign up confirmed");
      })
      .catch((error) => {
        if (error.code === "auth/id-already-in-use") {
          console.log("id already in use");
        } else {
          console.log("crashed at sign in functionality" + error);
        }
      });
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter your email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <label className="label">
              <span className="label-text-alt">person@gmail.com</span>
              <span className="label-text-alt">smallcase</span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter your password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}

            <label className="label">
              <span className="label-text-alt">ghost-password</span>
              <span className="label-text-alt">smallcase</span>
            </label>
          </div>
          <div className="card-actions justify-end gap-2">
            <button onClick={onSubmit} className="btn btn-primary">
              Sign-up
            </button>
            <button className="btn btn-primary"><input type="submit" /></button>
            <button onClick={Logout} className="btn btn-secondary">
              Sign-out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
