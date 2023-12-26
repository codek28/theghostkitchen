import { useSelector } from "react-redux";
import { selectPriceInCart } from "../stores/cart/modcartSlice";

export const Pricebutton = ({ product }) => {
  const cartCount2 = useSelector((state) => selectPriceInCart(state, product));
  return (
    <div className="pt-4 px-2">
      <button className="btn">{cartCount2}</button>
    </div>
  );
};
