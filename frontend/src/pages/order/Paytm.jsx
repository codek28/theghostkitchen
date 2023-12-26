import { useState, useEffect } from "react";
import React from "react";
const PaytmChecksum = require("paytmchecksum");

export const Paytm = () => {
  const [paymentData, setPaymentData] = useState([]);

  const initialize = () => {
    let orderId = "Order_" + new Date().getTime();

    // Sandbox Credentials
    let mid = ""; // Merchant ID
    let mkey = ""; // Merchant Key
    var paytmParams = {};

    paytmParams.body = {
      requestType: "Payment",
      mid: mid,
      websiteName: "WEBSTAGING",
      orderId: orderId,
      callbackUrl: "https://merchant.com/callback",
      txnAmount: {
        value: 100,
        currency: "INR",
      },
      userInfo: {
        custId: "1001",
      },
    };

    PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      mkey
    ).then(function (checksum) {
      console.log("checksum is: ", checksum);
      paytmParams.head = {
        signature: checksum,
      };

      var post_data = JSON.stringify(paytmParams);

      const createOrderHandle = async () => {
        await fetch(
          `https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=${mid}&orderId=${orderId}`,
          {
            method: "POST",
            body: post_data,
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setPaymentData({ data });
            console.log("response data is : ", data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };

      createOrderHandle();
    });
  };

  const makePayment = () => {
    var config = {
      root: "",
      style: {
        bodyBackgroundColor: "#fafafb",
        bodyColor: "",
        themeBackgroundColor: "#0FB8C9",
        themeColor: "#ffffff",
        headerBackgroundColor: "#284055",
        headerColor: "#ffffff",
        errorColor: "",
        successColor: "",
        card: {
          padding: "",
          backgroundColor: "",
        },
      },
      data: {
        orderId: paymentData.order,
        token: paymentData.token,
        tokenType: "TXN_TOKEN",
        amount: paymentData.amount /* update amount */,
      },
      payMode: {
        labels: {},
        filter: {
          exclude: [],
        },
        order: ["CC", "DC", "NB", "UPI", "PPBL", "PPI", "BALANCE"],
      },
      website: "WEBSTAGING",
      flow: "DEFAULT",
      merchant: {
        mid: paymentData.mid,
        redirect: false,
      },
      handler: {
        transactionStatus: function transactionStatus(paymentStatus) {
          console.log(paymentStatus);
        },
        notifyMerchant: function notifyMerchant(eventName, data) {
          console.log("Closed");
        },
      },
    };

    if (window.Paytm && window.Paytm.CheckoutJS) {
      window.Paytm.CheckoutJS.init(config)
        .then(function onSuccess() {
          window.Paytm.CheckoutJS.invoke();
        })
        .catch(function onError(error) {
          console.log("Error => ", error);
        });
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-center py-4">
        <div className="card w-[90%] bg-indigo-600 text-primary-content">
          <div className="card-body flex flex-col align-middle justify-center">
            <h2 className="card-title justify-center">Paytm Panel!</h2>

            <button className="btn btn-primary" onClick={makePayment}>
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
