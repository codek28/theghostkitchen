import { Login } from "../identification/Login";

export const Verification = () => { 

  return (
    <div>
      <div className="flex flex-row justify-center py-4">
        <div className="card w-[90%] bg-purple-600 text-primary-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title justify-center">OTP verification</h2>
           <Login />
          </div>
        </div>
      </div>
    </div>
  );
};