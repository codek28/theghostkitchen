import { PriceCutButton } from "./PriceCutButton";

export const PricecutDiscountButton = ({ pricecutarray, incrementdiscount }) => {

  return (
    <div className="flex flex-col-2">
      {pricecutarray.length === 4 ?
        pricecutarray
          .filter((pricecutarr) => {
            if (pricecutarr.length > 0) {
              return true;
            } else return false;
          })
          .map((discountobj, index) => {
            return (
              <PriceCutButton
                discountobject={discountobj}
                key={index}
                incrementdiscount={incrementdiscount}
              />
            );
          }) :
          <div>Loading</div>}
    </div>
  );
};
