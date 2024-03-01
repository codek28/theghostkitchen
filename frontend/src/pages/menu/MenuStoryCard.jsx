import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuDiscountAlertCard } from "./MenuDiscountAlertCard";

export const MenuStoryCard = ({ DiscountList }) => {
  const [menustory, setMenuStory] = useState([]);
  const referenceparam = useParams();
  const activeMenu = referenceparam.menuid;
  const ipaddrmenustory = process.env.REACT_APP_IPADDR + '/api/menu/get-menu-story'

  useEffect(() => {
    fetch(ipaddrmenustory, {
      method: "POST",
      body: JSON.stringify({
        menuid: activeMenu,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setMenuStory(data))
      .catch((e) => console.log(e));
  }, [activeMenu]);

  return (
    <div className="flex flex-row p-2">
      <div className="flex-2">
        {menustory.menustory ? (
          <div>
            <div className="card bg-teal-900 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title mx-auto">
                  {menustory.menustory[0].Name}
                </h2>
                <div>
                  <p>{menustory.menustory[0].Description}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
      <div className="flex-1">
        <MenuDiscountAlertCard DiscountList={DiscountList} />
      </div>
    </div>
  );
};
