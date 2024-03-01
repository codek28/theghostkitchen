import PizzaFrog from "../../assets/PizzaFrog.png";
import FoodIllustration1 from "../../assets/FoodIllustration1.png";
import FoodPreparing from "../../assets/FoodPreparing.png";
import DroneDelivery from "../../assets/DroneDelivery.png";

export const LandingFeedbox = () => {
  return (
    <div className="flex flex-row mx-[20%] my-4 ">
      <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item flex flex-col  mx-auto gap-2">
          <h1 className="mx-auto text-white text-lg">Eco Friendly Packaging</h1>
          <img
            href="#0"
            alt="ghostkitchen"
            src={PizzaFrog}
            className="rounded-box w-[70%] h-[50%]"
          />
        </div>
        <div className="carousel-item flex flex-col mx-auto gap-2">
          <h1 className="mx-auto text-white text-lg">5000+ Happy Orders</h1>
          <img
            href="#0"
            alt="ghostkitchen"
            src={FoodIllustration1}
            className="rounded-box w-[70%] h-[50%]"
          />
        </div>
        <div className="carousel-item flex flex-col  mx-auto gap-2">
          <h1 className="mx-auto text-white text-lg">Speedy Deliveries</h1>
          <img
            href="#0"
            alt="ghostkitchen"
            src={DroneDelivery}
            className="rounded-box w-[70%] h-[50%]"
          />
        </div>
        <div className="carousel-item flex flex-col  mx-auto gap-2">
          <h1 className="mx-auto text-white text-lg">
            Crafted to Perfect Taste
          </h1>
          <img
            href="#0"
            alt="ghostkitchen"
            src={FoodPreparing}
            className="rounded-box w-[70%] h-[50%]"
          />
        </div>
      </div>
    </div>
  );
};
