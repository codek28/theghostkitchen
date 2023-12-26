import BlueLogo from "../../assets/BlueLogo.png";

export const ProfitCenterStoryCard = ({ profitcenter }) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={BlueLogo}
            alt="Album"
            className="h-44 w-36"
            fill="none"
            viewBox="0 0 60 60"
            stroke="currentColor"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{profitcenter.Name}</h2>
          <p>{profitcenter.Tagline}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Call To Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};
