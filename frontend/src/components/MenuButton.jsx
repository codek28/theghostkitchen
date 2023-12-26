import pizzaicon from "../assets/Icons/pizza.png";

const MenuButton = ({ menu }) => {
  return (
    <div className="flex flex-row">
      <button className={`sticky  btn gap-2 h-18`}>
        <img
          src={pizzaicon}
          className="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          alt="freeicons.io"
        />
        {menu.MenuName}
      </button>
    </div>
  );
};

export default MenuButton;
