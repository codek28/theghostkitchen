import GhostGraphic from "../../assets/GhostGraphic.png";
import LandingPage from "../../assets/LandingPage.jpg";

export const LandingCard = () => {
  return (
    <div className="mx-[20%] ">
      <div className="card card-side bg-violet-600 shadow-xl">
        <div className=" w-[30%] h-[30%]"> 
          <img src={LandingPage} className="rounded-lg shadow-2xl" alt="Movie" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-white">Valar Morghulis!</h2>
          <p className="text-white">A man has to serve, only If you allow for notifications.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Allow</button>
          </div>
        </div>
      </div>
    </div>
  );
};
