import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SubCategoryContents } from "./SubCategoryContents";
import { getPage, getTab } from "../../stores/pageflow/pageSlice";

// Discount Object will have profit center billing pricecut object
// create functionality to send applicable price-cut discount to each product collapse state

export const CategoryContents = ({ DiscountObj }) => {
  const [categorycontents, setCategoryContents] = useState([]);
  const currenttab = useSelector(getTab);
  const currentpage = useSelector(getPage);
  const ipaddrsubcfromcat =
    process.env.REACT_APP_IPADDR + '/api/category/subcategory-from-category';

  useEffect(() => {
    fetch(ipaddrsubcfromcat, {
      method: "POST",
      body: JSON.stringify({
        catid: currenttab
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => setCategoryContents(data))
      .catch((e) => console.log(e));
  }, [currenttab, currentpage]);

  return (
    <div>
      <div>
        {categorycontents.length > 0 ? (
          categorycontents.map((subcatobj, index) => {
            return (
              <SubCategoryContents
                subcategory={subcatobj}
                key={index}
                DiscountObj={DiscountObj}
              />
            );
          })
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};
