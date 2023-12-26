export const VariantCard = ({
  productname,
  variant,
  customproduct,
  setCustomProduct,
}) => {
  // on select/toggle use setCustomProduct

  // use spread operator to copy all other properties as it is
  const toggleVariant = (variantobj) => {
    setCustomProduct({
      ...customproduct,
      selectedvariant: variantobj.VariantName,
      productprice: variantobj.VariantPrice,
      productname: productname + " - " + variantobj.VariantName
    });
  };

  return (
    <div className="p-2">
      <h3 className="">{variant.VariantSubject}</h3>
      {variant.VariantConfig.length > 0 &&
        variant.VariantConfig.map((variantitem, index) => {
          return (
            <div className="flex flex-row gap-2" key={variantitem.VariantName}>
              <h2>{variantitem.VariantName}</h2>
              <h2>{variantitem.VariantPrice}</h2>
              <input
                type="radio"
                name={`radio-variant-${productname}`}
                className="radio radio-secondary"
                defaultChecked={variantitem.ProductDefault}
                onChange={() => {
                  toggleVariant(variantitem);
                }}
              />
            </div>
          );
        })}
    </div>
  );
};
