import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuButtonExtended from "../../components/MenuButtonExtended";

// add a way to check active menu , so to render correct menu story

export const MenuToCategoryCard = () => {
  const referenceurlparams = useParams();
  const [profitcentermenu, setProfitCenterMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/profitcenter/get-pc-sellerlist", {
      method: "POST",
      body: JSON.stringify({
        pcid: referenceurlparams.pcid,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setProfitCenterMenu(data))
      .catch((e) => console.log(e));
  }, [referenceurlparams.pcid]);

  return (
    <div>
      <div className="card flex flex-col bg-base-100 shadow-xl p-4 gap-4">
        <h1 className="card-title justify-center">Select Menu</h1>
        <div className="mx-auto sm:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
          {profitcentermenu.length > 0 &&
            profitcentermenu.map((menuobj, index) => {
              return <MenuButtonExtended menu={menuobj} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};
