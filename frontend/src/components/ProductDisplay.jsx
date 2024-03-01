const ProductDisplay = ({ product }) => {
  return (
    <div>
      <div className="">
        <div className="flex justify-start">
          <div className="card h-32 flex-row flex-auto bg-base-300 shadow-xl ">
            <div className="card-body w-[60%] pt-4 px-4">
              <h2 className="card-title text-md font-bold">{product.Name}</h2>
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
