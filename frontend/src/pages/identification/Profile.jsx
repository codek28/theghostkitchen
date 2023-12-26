import { getUserName } from "../../stores/user/userSlice";
import { useSelector } from "react-redux";

export const Profile = () => {
  const username = useSelector(getUserName);

  return (
    <div>
      <div className="card w-[90%] bg-indigo-800 shadow-xl mx-auto">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-indigo-800 ring-offset-2 mx-auto mt-12">
            <img src="" />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <label className="label">
            <span className="label-text text-lg mx-auto">
              You are logged in as : {username}
            </span>
          </label>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={()=>{window.location.replace("http://localhost:3000/order")}}
            >
              Navigate to Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
