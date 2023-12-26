import React, { useState, useEffect } from "react";
import { Nameform } from "../../components/Nameform";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OTPInput, { ResendOTP } from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import { auth } from "../../firebase.config";
import {
  setUserUid,
  setUserPhone,
  clearUser
} from "../../stores/user/userSlice";
import { getUid } from "../../stores/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";

export const Login = () => {
  const userUidState = useSelector(getUid);
  const dispatchFromLogin = useDispatch();
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");

  // check signOut applying in firebase logout or not

  const Logout = async () => {
    return signOut(auth)
      .then(() => {
        dispatchFromLogin(clearUser());
        console.log("signOut confirmed");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // to do firebase captch verification

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
        },
        defaultCountry: "IN"
      },
      auth
    );
  }, []);

  // to do firebase signin

  const onSubmit = () => {
    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("sign in confirmed");
      })
      .catch((error) => {
        if (error.code === "auth/id-already-in-use") {
          console.log("id already in use");
        } else {
          console.log("crashed at sign in functionality" + error);
        }
      });
  };

  function onOTPVerify() {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        dispatchFromLogin(setUserUid(res.user.uid));
        dispatchFromLogin(setUserPhone(res.user.phoneNumber));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body items-center">
          <h2 className="card-title">Login Page</h2>

          <div id="recaptcha-container"></div>

          <div className="mx-auto flex flex-col gap-2">
            <label htmlFor="number" className="text-md">
              Enter Mobile Number
            </label>
            <PhoneInput country={"in"} value={ph} onChange={setPh} />
            <button onClick={onSubmit} className="btn btn-secondary">
              Send OTP
            </button>
          </div>

          <>
            <p className="text-md">Enter OTP</p>
            <OTPInput
              value={otp}
              onChange={setOtp}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              secure
            />
            <ResendOTP
              className="btn btn-accent"
              onResendClick={() => console.log("Resend clicked")}
            />
            <button
              type="submit"
              onClick={onOTPVerify}
              className="btn btn-secondary"
            >
              Submit OTP
            </button>
          </>

          {userUidState !== "" ? <Nameform /> : <></>}

          <div className="card-actions mx-auto gap-2">
            <button onClick={Logout} className="btn btn-secondary mx-2 my-2">
              LOG OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
