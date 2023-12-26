import { AddAdminRole } from "./AddAdminRole";

export const IndexControls = () => {
  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl mx-auto">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <AddAdminRole />
      </div>
    </div>
  );
};
