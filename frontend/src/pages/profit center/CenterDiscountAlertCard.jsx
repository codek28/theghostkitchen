import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DiscountInfoButton } from "../../components/DiscountInfoButton";
import { CenterDiscountButton } from "./CenterDiscountButton";

export const CenterDiscountAlertCard = () => {
  const referenceurlparams = useParams();
  const [profitcenterbilling, setProfitCenterBilling] = useState([]);
  const profitcenterid = referenceurlparams.pcid
  const ipaddrpcbilling = process.env.REACT_APP_IPADDR + '/api/profitcenter/get-pc-billings'

  useEffect(() => {
    fetch(ipaddrpcbilling, {
      method: "POST",
      body: JSON.stringify({
        pcid: profitcenterid,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setProfitCenterBilling(data))
      .catch((e) => console.log(e));
  }, [profitcenterid]);

  return (
    <div>
      <div className="card w-[90%] bg-indigo-800 shadow-xl mx-auto">
        <div className="card-body items-center text-center flex flex-col">
          {profitcenterbilling.billingobj ? (
            <div>
              <h2 className="card-title mx-auto">Discount Alert!</h2>
              <div className="my-2 text-lime-300">
                <h3>
                  DISCOUNT on all products of center -
                  <CenterDiscountButton
                    DiscountID={
                      profitcenterbilling.billingobj.DiscountandBenefits.PriceCutDiscount.MerchantToAll
                    }
                  />
                </h3>
              </div>
            </div>
          ) : (
            <div>No Discounts available for center</div>
          )}
        </div>
      </div>
    </div>
  );
};
