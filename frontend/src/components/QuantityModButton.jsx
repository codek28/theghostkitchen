import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  incrementProductAmount,
  decrementProductAmount,
  cartProducts,
  selectAmountInCart
} from "../stores/cart/modcartSlice";

export const QuantityModButton = ({ customproduct }) => {
  const dispatchFromQuantityMod = useDispatch();
  const cartList = useSelector(cartProducts);
  const cartCount = useSelector((state) =>
    selectAmountInCart(state, customproduct)
  );

  const onAddProduct = () => {
    try {
      cartList.find(
        (cartproduct) => cartproduct.productname === customproduct.productname
      )
        ? dispatchFromQuantityMod(incrementProductAmount(customproduct))
        : dispatchFromQuantityMod(addToCart(customproduct));
    } catch (e) {
      console.log(e);
    }
  };

  const onMinusProduct = () => {
    try {
      cartList.find(
        (cartproduct) =>
          (cartproduct.productname === customproduct.productname) &
          (cartproduct.amount === 1)
      )
        ? dispatchFromQuantityMod(removeFromCart(customproduct))
        : dispatchFromQuantityMod(decrementProductAmount(customproduct));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="btn-group gap-2">
        <button
          className="btn btn-circle btn-outline btn-sm font-bold"
          onClick={onMinusProduct}
        >
          -
        </button>
        <button className="btn btn-primary btn-sm font-bold">
          {cartCount}
        </button>
        <button
          className="btn btn-circle btn-outline btn-sm font-bold"
          onClick={onAddProduct}
        >
          +
        </button>
      </div>
    </div>
  );
};
