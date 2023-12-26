import { useDispatch, useSelector } from "react-redux";
import { getTab, setPageFlow } from "../stores/pageflow/pageSlice";
import { setTabFlow } from "../stores/pageflow/pageSlice";

import burgericon from "../assets/Icons/cheese-burger.png";

const CategoryButton = ({ category }) => {
  const dispatchFromCategoryButton = useDispatch();
  const activeTab = useSelector(getTab);

  const navigateToCategory = ({ category }) => {
    dispatchFromCategoryButton(setPageFlow("CATEGORY"));
    dispatchFromCategoryButton(setTabFlow(category[0].ID));
    dispatchFromCategoryButton({
      type: "tab/tocategory",
      payload: category[0].ID,
    });
    sessionStorage.setItem("tabname", JSON.stringify(category[0].ID));
  };

  let buttonclassname =
    category[0].ID === activeTab ? "btn-secondary" : "btn-accent";

  return (
    <div className="flex flex-row">
      <button
        className={`sticky ${buttonclassname} btn gap-2 h-18`}
        onClick={() => {
          navigateToCategory({ category });
        }}
      >
        <img
          src={burgericon}
          className="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          alt="freeicons.io"
        />
        {category[0].Name}
      </button>
    </div>
  );
};

export default CategoryButton;

// <a href="https://www.flaticon.com/free-icons/pizza" title="pizza icons">Pizza icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/burger" title="burger icons">Burger icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/tacos" title="tacos icons">Tacos icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/protein-shake" title="protein shake icons">Protein shake icons created by Freepik - Flaticon</a>
