import { useSelector } from "react-redux";
import { getUserBenefits } from "../../stores/user/userSlice";
import { Discounts } from "./Discounts";
import { PriceCalculator } from "./PriceCalculator";

export const Billing = () => {
  const userbenefits = useSelector(getUserBenefits);

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Select Discount</h2>
          <div>
            {userbenefits.data?.Discount ? (
              <Discounts />
            ) : (
              <div>No User Benefits</div>
            )}
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Billing</h2>
          <div>
            <PriceCalculator />
          </div>
        </div>
      </div>
    </div>
  );
};
