import { useDispatch, useSelector } from "react-redux";
import {
  getUid,
  getUser,
  getUserLogin,
  getUserName,
  getUserDb,
  getUserBenefits
} from "../stores/user/userSlice";
import { useEffect, useState } from "react";
import {
  registerUser,
  findUser,
  registerUserBenefits
} from "../stores/user/userSlice";

const useLogger = () => {
  const [loggerState, setLoggerState] = useState("logger idle");
  const dispatchFromLogger = useDispatch();
  const userStateObj = useSelector(getUser);
  const userStateName = useSelector(getUserName);
  const userStateUid = useSelector(getUid);
  const userLoginStatus = useSelector(getUserLogin);
  const userDbState = useSelector(getUserDb);
  const userBenefitsState = useSelector(getUserBenefits);

  useEffect(() => {
    const stateCheck = async () => {
      try {
        if (
          (userStateUid !== "") &
          (userStateName === "") &
          (userDbState.length === 0)
        ) {
          dispatchFromLogger(findUser(userStateUid));
          setLoggerState("dispatched loginUser thunk");
          console.log("dispatched loginUser thunk");
        } else if (
          (userStateUid !== "") &
          (userStateName !== "") &
          (userDbState.length === 0)
        ) {
          dispatchFromLogger(registerUser(userStateObj));
          dispatchFromLogger(registerUserBenefits(userStateUid));
          setLoggerState("dispatched registerUser/registerUserBenefits thunk");
          console.log("dispatched registerUser/registerUserBenefits thunk");
        } else {
          setLoggerState(
            "not dispatched loginUser/registerUser/registerUserBenefits thunk"
          );
          console.log(
            "not dispatched loginUser/registerUser/registerUserBenefits thunk"
          );
        }
      } catch (e) {
        setLoggerState("found error in uselogger state check" + e);
        console.log(e);
      }
    };

    stateCheck();
  }, [userStateName, userDbState]);

  return loggerState;
};

export default useLogger;
