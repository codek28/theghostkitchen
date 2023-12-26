export const completeOnlineOrder = async ({ userid, ordertoken }) => {
  await fetch("http://localhost:3001/api/user/complete-user-order", {
    method: "POST",
    body: JSON.stringify({
      ID: userid,
      OrderToken: ordertoken
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });

  await fetch("http://localhost:3001/api/order/update-active-order", {
    method: "POST",
    body: JSON.stringify({
      OrderToken: ordertoken
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
