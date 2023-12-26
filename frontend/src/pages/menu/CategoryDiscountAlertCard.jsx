import { useState, useEffect } from "react";
import { CategoryDiscountButton } from "./CategoryDiscountButton";
import { useSelector } from "react-redux";
import { getTab } from "../../stores/pageflow/pageSlice";

// use fetch api to load pricecut offer on menu story card

export const CategoryDiscountAlertCard = ({ DiscountList }) => {
  const activetab = useSelector(getTab);
  const [catdiscountid, setCategoryDiscountID] = useState("");

  const catdiscount = DiscountList.filter((catdiscountobj) => {
    if (catdiscountobj.CategoryID === activetab) {
      return true;
    } else return false;
  });

  useEffect(() => {
    catdiscount[0]
      ? setCategoryDiscountID(catdiscount[0].DiscountID)
      : setCategoryDiscountID("");
  }, [catdiscount]);

  return (
    <div>
      <div className="card w-[90%] bg-indigo-800 shadow-xl mx-auto">
        <div className="card-body items-center text-center flex flex-col">
          {catdiscountid !== "" ? (
            <div>
              <h2 className="card-title mx-auto">Discount Alert!</h2>
              <div className="my-2 text-lime-300">
                <h3>
                  DISCOUNT on all products of category -
                  <CategoryDiscountButton DiscountID={catdiscountid} />
                </h3>
              </div>
            </div>
          ) : (
            <div>
              <h3>No Discounts available for category</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
