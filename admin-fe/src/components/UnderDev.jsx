import { useState, useEffect } from "react";

export const UnderDev = ({}) => {
  const [somestate, setSomeState] = useState([]);

  return (
    <div className="flex flex-row mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
