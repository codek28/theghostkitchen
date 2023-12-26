import { VariantCard } from "./VariantCard";
import { AddOnCard } from "./AddOnCard";

const ProductCustomiser = ({ product, customproduct, setCustomProduct }) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-[60%]">
        <h3>Variants Below</h3>
        <div>
          {product.ProductCustomization?.Variant.length > 0 ? (
            product.ProductCustomization.Variant.map((variantobj) => {
              return (
                <VariantCard
                  productname={product.Name}
                  variant={variantobj}
                  customproduct={customproduct}
                  setCustomProduct={setCustomProduct}
                  key={product.ID}
                />
              );
            })
          ) : (
            <div>No Variants</div>
          )}
        </div>
      </div>

      <div className="w-[30%]">
        <h3>AddOns Below</h3>
        <div>
          {product.ProductCustomization?.AddOn.length > 0 ? (
            <AddOnCard
              product={product}
              productname={product.Name}
              addonarray={product.ProductCustomization.AddOn}
              setCustomProduct={setCustomProduct}
              customproduct={customproduct}
            />
          ) : (
            <div>No Add-ons</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCustomiser;
