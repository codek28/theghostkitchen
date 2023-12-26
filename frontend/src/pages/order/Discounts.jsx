import { useDispatch, useSelector } from "react-redux";
import { getUserBenefits } from "../../stores/user/userSlice";
import { UserDiscounts } from "./UserDiscounts";
import { SuperDiscounts } from "./SuperDiscounts";
import { clearCartDiscount, clearSuperDiscount } from "../../stores/payment/paymentSlice";

export const Discounts = () => {
  const userdiscounts = useSelector(getUserBenefits);
  const dispatchFromDiscounts = useDispatch()

  return (
    <div className="card bg-indigo-800 shadow-xl">
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-col">
          <h3>User Discounts Below</h3>
          <div>
            {userdiscounts.data?.Discount.UserDiscountCoupons.length > 0 ? (
              userdiscounts.data?.Discount.UserDiscountCoupons.map(
                (userdiscountobj, index) => {
                  return (
                    <UserDiscounts
                      discountname={userdiscountobj.CouponCode}
                      discountleft={userdiscountobj.CouponLeft}
                      key={index}
                    />
                  );
                }
              )
            ) : (
              <div>No User Discounts</div>
            )}
            <button className="btn btn-accent" onClick={()=>{dispatchFromDiscounts(clearCartDiscount())}}>Clear User Discount</button>
          </div>
        </div>

        <div className="flex flex-col">
          <h3>Super Discounts Below</h3>
          <div>
            {userdiscounts.data?.Discount.SuperCoupons.length > 0 ? (
              userdiscounts.data?.Discount.SuperCoupons.map(
                (superdiscountobj, index) => {
                  return (
                    <SuperDiscounts
                      discountname={superdiscountobj.CouponCode}
                      discountleft={superdiscountobj.CouponLeft}
                      key={index}
                    />
                  );
                }
              )
            ) : (
              <div>No Super Discounts</div>
            )}
            <button className="btn btn-accent" onClick={()=>{dispatchFromDiscounts(clearSuperDiscount())}}>Clear Super Discount</button>
          </div>
        </div>
      </div>
    </div>
  );
};
