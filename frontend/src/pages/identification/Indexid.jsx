import { Login } from "./Login";
import { Profile } from "./Profile";
import { Form } from "../order/Form";

export const Indexid = () => {
  return (
    <div>
      <div className="flex flex-column">
        <div className=" p-4 shadow-2xl mx-auto">
          <Profile />
        </div>
      </div>
    </div>
  );
};
