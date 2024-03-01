import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getUserZone } from "../../stores/user/userSlice";
import MenuButton from "../../components/MenuButton"

// RENDER ALL MENU ON THIS CARD
// wait for api to fetch 

export const PCSelectMenuCard = ({ profitcenter }) => {
  const [pcmenulist, setPCMenuList] = useState([]);
  const activeZone = useSelector(getUserZone);
  const ipaddrpcsellerlist = process.env.REACT_APP_IPADDR + '/api/zone/get-pc-sellerlist'
  // edit

  useEffect(() => {
    fetch(ipaddrpcsellerlist, {
      method: "POST",
      body: JSON.stringify({
        zoneid: activeZone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setPCMenuList(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mx-auto">PC MENU</h2>
          <div className="grid sm:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 justify-evenly">
            { pcmenulist.length > 0 && pcmenulist[0].SellerList.Menu.map((menuobj, index) => {
              return <MenuButton menu={menuobj} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
