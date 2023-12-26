import { useEffect } from "react";
import ProductCollapse from "../../components/ProductCollapse";
import { useSelector } from "react-redux";
import { getPage, getTab } from "../../stores/pageflow/pageSlice";

export const SubCategoryContents = ({ subcategory, DiscountObj }) => {

  return (
    <div className="p-4">
      <div className="card bg-info-content shadow-xl ">
        <div className="card-body">
          <h2 className="card-title mx-auto">{subcategory.classname}</h2>
          {subcategory.classresult.map((productobj, index) => {
            return <ProductCollapse product={productobj} key={index} DiscountObj={DiscountObj}/>;
          })}
        </div>
      </div>
    </div>
  );
};
