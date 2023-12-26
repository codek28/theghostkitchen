import { useDispatch } from "react-redux";
import PizzaFrog from "../assets/PizzaFrog.png";
import { QuantityModButton } from "./QuantityModButton";
import { clearAddon } from "../stores/cart/modcartSlice";

const CartProduct = ({ product }) => {
  const dispatchFromCartProduct = useDispatch();

  const onClearAddOn = () => {
    dispatchFromCartProduct(clearAddon(product));
  };

  return (
    <div>
      <div className="p-2">
        <div className="justify-evenly align-middle ">
          <div className="card h-32 flex flex-row bg-base-300 shadow-xl ">
            <figure className=" w-[20%] ">
              <img
                className="mask mask-square py-1"
                href="#0"
                alt="ghostkitchen"
                src={PizzaFrog}
              />
            </figure>

            <div className="card-body w-[50%] pt-4 px-4 gap-4">
              <button className="btn">
                {product.productname}
                {product.addonlist.map((addonitem, index) => {
                  return (
                    <div className="badge badge-info" key={index}>
                      {addonitem}
                    </div>
                  );
                })}
              </button>
            </div>
            <div className="card-actions justify-end flex flex-row gap-2">
              <button className="btn btn-primary">
                Price {product.productprice}
              </button>
              <button className="btn btn-secondary">
                Discount Applied {product.discountpercent} %
              </button>
              <button className="btn btn-primary">
                Add-on Price {product.addonprice}
              </button>
              <button className="btn btn-neutral" onClick={onClearAddOn}>
                CLEAR Add-on
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
