import PizzaFrog from "../assets/PizzaFrog.png";

const ProductDisplay = ({ product }) => {
  return (
    <div>
      <div className="p-2">
        <div className="justify-evenly align-middle ">
          <div className="card h-32 flex flex-row bg-base-300 shadow-xl ">
            <figure className=" w-[30%] ">
              <img
                className="mask mask-square py-1"
                href="#0"
                alt="ghostkitchen"
                src={PizzaFrog}
              />
            </figure>
            <div className="card-body w-[60%] pt-4 px-4">
              <h2 className="card-title text-xl font-bold">{product.Name}</h2>
              <p className="text-white ptextprod text-xs">
                {product.Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
