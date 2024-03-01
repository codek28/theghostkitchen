import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MenuStoryCard } from "./MenuStoryCard";
import { MenuCategoryGroup } from "./MenuCategoryGroup";
import { CategoryContents } from "./CategoryContents";
import { CategoryStoryCard } from "./CategoryStoryCard";
import { Cartalert } from "../cart/Cartalert";

export const IndexMenuPage = () => {
  const referenceurlparams = useParams();
  const [pcbilling, setPCBilling] = useState([]);
  const profitcenterid = referenceurlparams.pcid;
  const ipaddrpcbillings = process.env.REACT_APP_IPADDR + '/api/profitcenter/get-pc-billings'

  useEffect(() => {
    fetch(ipaddrpcbillings, {
      method: "POST",
      body: JSON.stringify({
        pcid: profitcenterid,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setPCBilling(data))
      .catch((e) => console.log(e));
  }, [profitcenterid]);

  const MTMarray = pcbilling.billingobj
    ? pcbilling.billingobj.DiscountandBenefits.PriceCutDiscount.MerchantToMenu
    : [];

  const MTCarray = pcbilling.billingobj
    ? pcbilling.billingobj.DiscountandBenefits.PriceCutDiscount
        .MerchantToCategory
    : [];

  const MTPobject = pcbilling.billingobj
    ? pcbilling.billingobj.DiscountandBenefits.PriceCutDiscount
    : {};

  return (
    <div className="p-2">
      <Cartalert/>
      <MenuStoryCard DiscountList={MTMarray} />
      <MenuCategoryGroup />
      <CategoryStoryCard DiscountList={MTCarray} />
      <CategoryContents DiscountObj={MTPobject} />
    </div>
  );
};
