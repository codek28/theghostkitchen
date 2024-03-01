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
  const [customproduct, setCustomProduct] = useState({
    productid: "",
    productprice: 0,
    discountpercent: 0,
    selectedvariant: "",
    addonlist: [],
    addonprice: 0,
    productname: ""
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

  // product name , id , priceog and selected variant working fine in cart
  // create func to recheck ad-on list , add on price from cart - temporary soln check in cart

  // if setCustomProduct always resets then its a problem
  // create func to recalculate discount percent

  useEffect(() => {
    let nestedstatediscountpercent = customproduct.discountpercent
    let productname = getProductName(product);
    setIDObj({
      categorycode: product.CategoryID,
      menucode: refobj.menuid,
      productcode: product.ID
    });
    setCustomProduct({
      productid: product.ID,
      productprice: product.PriceOriginal,
      discountpercent: nestedstatediscountpercent,
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
          className="collapse-title text-xl font-medium flex flex-row md:grow gap-2 justify-start"
        >
          <ProductDisplay product={product} />

          <div className="flex flex-col gap-8">
            <DiscountInfoButton
              DiscountObj={DiscountObj}
              IDobj={idobj}
              customproduct={customproduct}
              setCustomProduct={setCustomProduct}
            />
            <Ratebutton customproduct={customproduct} />
          </div>
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
