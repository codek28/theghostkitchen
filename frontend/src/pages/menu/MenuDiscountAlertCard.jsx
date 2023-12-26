import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuDiscountButton } from "./MenuDiscountButton";

// use fetch api to load pricecut offer on menu story card

export const MenuDiscountAlertCard = ({ DiscountList }) => {
  const referenceurlparams = useParams();
  const [menudiscountid, setMenuDiscountID] = useState("");
  const menuid = referenceurlparams.menuid;

  const menuobj = DiscountList.filter((discountmenuobj) => {
    if (discountmenuobj.MenuID === menuid) {
      return true;
    } else return false;
  });

  useEffect(() => {
    menuobj[0]
      ? setMenuDiscountID(menuobj[0].DiscountID)
      : setMenuDiscountID("");
  }, [menuobj]);

  return (
    <div>
      <div className="card w-[90%] bg-indigo-800 shadow-xl mx-auto">
        <div className="card-body items-center text-center flex flex-col">
          {menudiscountid !== "" ? (
            <div>
              <h2 className="card-title mx-auto">Discount Alert!</h2>
              <div className="my-2 text-lime-300">
                <h3>
                  DISCOUNT on all products of menu -
                  <MenuDiscountButton DiscountID={menudiscountid} />
                </h3>
              </div>
            </div>
          ) : (
            <div><h3>No Discounts available for menu</h3></div>
          )}
        </div>
      </div>
    </div>
  );
};
