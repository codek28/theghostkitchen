import { Login } from "./Login";
import { Profile } from "./Profile";
import { Form } from "../order/Form";
import { useSelector } from "react-redux";
import { getLoginStatus } from "../../stores/user/userSlice";

export const IndexLogger = () => {
  const userverified = useSelector(getLoginStatus)

  return (
    <div>
      <div className="flex flex-column">
        <div className=" p-4 shadow-2xl mx-auto">
          <Login />
        </div>
      </div>
    </div>
  );
};
