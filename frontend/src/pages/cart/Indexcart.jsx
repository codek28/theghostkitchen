import { useDispatch, useSelector } from "react-redux";
import { Cart } from "./Cart";
import { Details } from "./Details";
import { Verification } from "./Verification";
import { useState } from "react";
import { useEffect } from "react";
import { setTabFlow } from "../../stores/pageflow/pageSlice";
import { getTab } from "../../stores/pageflow/pageSlice";

export const Indexcart = () => {
  const [index, setIndex] = useState(0);
  const currenttab = useSelector(getTab);
  const dispatchFromIndexCart = useDispatch();
  const buttonArr = ["GO VERIFICATION", "GO DETAILS", "BACK TO CART"];
  let component;

  useEffect(() => {
    pageDisplay();
  }, [index]);

  const pageDisplay = () => {
    if (index === 0) {
      dispatchFromIndexCart(setTabFlow("CART"));
      component = <Cart />;
    } else if (index === 1) {
      dispatchFromIndexCart(setTabFlow("VERIFICATION"));
      component = <Verification />;
    } else if (index === 2) {
      dispatchFromIndexCart(setTabFlow("DETAILS"));
      component = <Details />;
    } else {
      setIndex(0);
      dispatchFromIndexCart(setTabFlow("CART"));
      component = <Cart />;
    }
  };

  return (
    <div>
      <div>
        <ul className="steps flex flex-row justify-center py-2">
          <li className={currenttab === "CART" ? "step step-primary" : "step"}>
            Cart
          </li>
          <li
            className={
              currenttab === "VERIFICATION" ? "step step-primary" : "step"
            }
          >
            Verification
          </li>
          <li
            className={currenttab === "DETAILS" ? "step step-primary" : "step"}
          >
            Details
          </li>
        </ul>
      </div>

      <div>{currenttab === "CART" && <Cart />}</div>
      <div>{currenttab === "VERIFICATION" && <Verification />}</div>
      <div>{currenttab === "DETAILS" && <Details />}</div>

      <div>
        <div className="centeredbutton">
          <button
            className=" bg-base-500 btn btn-outline btn-success"
            onClick={() => {
              setIndex((index) => index + 1);
            }}
          >
            {buttonArr[index]}
          </button>
        </div>
      </div>
    </div>
  );
};
