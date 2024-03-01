import { useDispatch } from "react-redux";
import PizzaFrog from "../assets/PizzaFrog.png";
import { QuantityModButton } from "./QuantityModButton";
import { clearAddon } from "../stores/cart/modcartSlice";

// add on button

const CartProduct = ({ product }) => {
  const dispatchFromCartProduct = useDispatch();

  const onClearAddOn = () => {
    dispatchFromCartProduct(clearAddon(product));
  };

  return (
    <div>
      <div className="">
        <div className="justify-evenly align-middle ">
          <div className="card h-32 flex flex-row bg-base-300 shadow-xl ">
            <div className="card-body w-[60%] pt-4 px-4 gap-4">
              <button className="btn">{product.productname}</button>
              <div>
                {product.addonlist.map((addonitem, index) => {
                  return (
                    <div className="badge badge-info badge-xs" key={index}>
                      {addonitem}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="card-actions flex flex-row gap-2">
              <button className="btn btn-primary btn-sm">
                Price - {product.productprice}
              </button>
              <button className="btn btn-primary btn-sm">
                Add-on Price - {product.addonprice}
              </button>
              <button className="btn btn-secondary btn-sm">
                Discount - {product.discountpercent} %
              </button>
            </div>
            <div>
              <button className="btn btn-neutral btn-sm" onClick={onClearAddOn}>
                Clear Add-on
              </button>
            </div>
            <QuantityModButton customproduct={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
