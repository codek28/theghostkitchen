import ProductCustomiser from "./ProductCustomiser";
import ProductDisplay from "./ProductDisplay";
import { DiscountInfoButton } from "./DiscountInfoButton";
import { useParams } from "react-router-dom";
import { Ratebutton } from "./Ratebutton";
import { useState, useEffect } from "react";
import { QuantityModButton } from "./QuantityModButton";
import { useSelector } from "react-redux";
import { getPage, getTab } from "../stores/pageflow/pageSlice";

const ProductCollapse = ({ product, DiscountObj }) => {
  const currenttab = useSelector(getTab);
  const currentpage = useSelector(getPage);
  const refobj = useParams();
  const [idobj, setIDObj] = useState({
    categorycode: "",
    menucode: "",
    productcode: ""
  });
  const getProductName = (product) => {
    if (
      product.ProductCustomization?.Variant &&
      product.ProductCustomization.Variant.length > 0
    ) {
      const defaultvariant =
        product.ProductCustomization.Variant[0].VariantConfig.filter(
          (variantitem) => variantitem.ProductDefault
        );
      return product.Name + " - " + defaultvariant[0].VariantName;
    } else {
      return product.Name;
    }
  };
  const [customproduct, setCustomProduct] = useState({
    productid: "",
    productprice: 0,
    discountpercent: 0,
    selectedvariant: "",
    addonlist: [],
    addonprice: 0,
    productname: ""
  });

  useEffect(() => {
    let productname = getProductName(product);
    setIDObj({
      categorycode: product.CategoryID,
      menucode: refobj.menuid,
      productcode: product.ID
    });
    setCustomProduct({
      productid: product.ID,
      productprice: product.PriceOriginal,
      discountpercent: 0,
      selectedvariant: "",
      addonlist: [],
      addonprice: 0,
      productname: productname
    });
  }, [product, refobj, currentpage, currenttab]);

  return (
    <div>
      <div className="dropdown">
        <div
          tabIndex={0}
          className="collapse-title text-xl font-medium flex flex-row gap-4"
        >
          <ProductDisplay product={product} />

          <DiscountInfoButton
            DiscountObj={DiscountObj}
            IDobj={idobj}
            customproduct={customproduct}
            setCustomProduct={setCustomProduct}
          />

          <Ratebutton customproduct={customproduct} />

          <QuantityModButton customproduct={customproduct} />
        </div>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] card p-2 shadow bg-primary text-primary-content"
        >
          <div className="card-body">
            <ProductCustomiser
              product={product}
              customproduct={customproduct}
              setCustomProduct={setCustomProduct}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCollapse;
