import { useState } from "react";
import { useEffect } from "react";

const usePriceCutFetcher = async (DiscountObj, idobj) => {
  const [discountarray, setDiscountArray] = useState([]);

  const merchanttoall = new Promise((resolve, reject) => {
    if (DiscountObj?.MerchantToAll) {
      resolve([
        {
          ProductID: idobj.productcode,
          DiscountType: "Center Discount",
          DiscountID: DiscountObj.MerchantToAll,
        },
      ]);
    } else {
      resolve([]);
    }
  });

  const merchanttomenu = new Promise((resolve, reject) => {
    if (DiscountObj?.MerchantToMenu) {
      resolve(
        DiscountObj.MerchantToMenu.filter((menuobj) => {
          if (menuobj.MenuID === idobj.menucode) {
            return true;
          } else return false;
        }).map((filterobj) => {
          return {
            ProductID: idobj.productcode,
            DiscountType: "Menu Discount",
            DiscountID: filterobj.DiscountID,
          };
        })
      );
    } else {
      resolve([]);
    }
  });

  const merchanttocategory = new Promise((resolve, reject) => {
    if (DiscountObj?.MerchantToCategory) {
      resolve(
        DiscountObj.MerchantToCategory.filter((catobj) => {
          if (catobj.CategoryID === idobj.categorycode) {
            return true;
          } else return false;
        }).map((filterobj) => {
          return {
            ProductID: idobj.productcode,
            DiscountType: "Category Discount",
            DiscountID: filterobj.DiscountID,
          };
        })
      );
    } else {
      resolve([]);
    }
  });

  const merchanttoproduct = new Promise((resolve, reject) => {
    if (DiscountObj?.MerchantToProduct) {
      resolve(
        DiscountObj.MerchantToProduct.filter((productobj) => {
          if (productobj.ProductID === idobj.productcode) {
            return true;
          } else return false;
        }).map((filterobj) => {
          return {
            ProductID: idobj.productcode,
            DiscountType: "Product Discount",
            DiscountID: filterobj.DiscountID,
          };
        })
      );
    } else {
      resolve([]);
    }
  });

  useEffect(() => {
    try {
      const p = Promise.all([
        merchanttoall,
        merchanttomenu,
        merchanttocategory,
        merchanttoproduct,
      ]).then((val) => {
        setDiscountArray(val);
      });
    } catch (e) {
      console.log(e);
    }
  }, [idobj]);

  return discountarray;
};

export default usePriceCutFetcher;
