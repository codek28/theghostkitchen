import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryButton from "../../components/CategoryButton";
import { CategoryContents } from "./CategoryContents";
import { ActiveMenuTab } from "./ActiveMenuTab";

export const MenuCategoryGroup = () => {
  const [menucontents, setMenuContents] = useState([]);
  const referenceurlparams = useParams();

  useEffect(() => {
    fetch("http://localhost:3001/api/category/category-from-menu", {
      method: "POST",
      body: JSON.stringify({
        menuid: referenceurlparams.menuid,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setMenuContents(data))
      .catch((e) => console.log(e));
  }, [referenceurlparams.menuid]);

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <ActiveMenuTab />
        <div className="divider divider-success">Caategories</div>
        <div>
          <div className="py-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-evenly">
            {menucontents.length > 0 &&
              menucontents.map((catobj, index) => {
                return <CategoryButton category={catobj} key={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
