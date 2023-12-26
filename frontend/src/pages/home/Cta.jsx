import { useSelector } from "react-redux";
import TOPimg from "../../assets/TOPimg.png";
import { useEffect } from "react";
import { getPage } from "../../stores/pageflow/pageSlice";

export const Cta = () => {
  const currentpage = useSelector(getPage);

  useEffect(() => {}, [currentpage]);

  return (
    <div>
      {currentpage === "MENU" ? (
        <div className="hero p-4 w-full bg-base-300">
          <div className="flex gap-4">
            <div className="hidden md:block w-[30%] h-[30%] ">
              <img
                src={TOPimg}
                className="  rounded-lg shadow-2xl "
                alt="from https://unsplash.com/@xz051571t"
              />
            </div>
            <div className="py-2">
              <h1 className="text-3xl font-bold ">Order here!</h1>
              <p className="overflow:none py-2">
                Welcome to the next generation of foodies! we serve here the
                most delicious dishes, right at your doorstep...
              </p>
              <div>{/*render here thaali and profit center promocard*/}</div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
