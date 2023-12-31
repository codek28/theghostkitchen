import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import {
  clearAdmin,
  setAdminEmailId,
  setAdminUid,
  setLogin
} from "../../stores/admin/adminSlice";
import { useForm } from "react-hook-form";

export const Logger = () => {
  const dispatchFromLogger = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const Logout = () => {
    signOut(auth)
      .then(() => {
        dispatchFromLogger(clearAdmin());
        reset()
        console.log("signOut confirmed");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("signed in", user);
        dispatchFromLogger(setAdminUid(user.uid));
        dispatchFromLogger(setAdminEmailId(user.email));
        dispatchFromLogger(setLogin())
      })
      .catch((error) => {
        console.log("crashed at sign in functionality" + error);
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
            <button onClick={Logout} className="btn btn-secondary">
              Sign-out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
