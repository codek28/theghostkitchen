import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CategoryDiscountAlertCard } from "./CategoryDiscountAlertCard";
import { getTab } from "../../stores/pageflow/pageSlice";

export const CategoryStoryCard = ({ DiscountList }) => {
  const [categorystory, setCategoryStory] = useState([]);
  const activeCat = useSelector(getTab);

  useEffect(() => {
    fetch("http://localhost:3001/api/category/get-category-story", {
      method: "POST",
      body: JSON.stringify({
        catid: activeCat,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setCategoryStory(data))
      .catch((e) => console.log(e));
  }, [activeCat]);

  return (
    <div className="flex flex-row p-2">
      <div className="flex-1">
        {categorystory.categorystory ? (
          <div>
            <div className="card bg-info-content shadow-xl ">
              <div className="card-body">
                <h2 className="card-title mx-auto">
                  {categorystory.categorystory.Name}
                </h2>
                <div>
                  <p>{categorystory.categorystory.CategoryType.FoodType}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
      <div></div>
      <div className="flex-2">
        <CategoryDiscountAlertCard DiscountList={DiscountList} />
      </div>
    </div>
  );
};
