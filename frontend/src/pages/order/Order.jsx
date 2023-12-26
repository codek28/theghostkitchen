import {useNavigate} from "react-router-dom"

export const Order = ({orderobj}) => {
  const navigateFromOrder = useNavigate()
  const ordertoken = orderobj.OrderToken

  return (
    <div>
      <div className="card bg-indigo-800 shadow-xl mx-auto">
        <div className="card-body items-center text-center">
          <h2 className="card-title"> Order Placed </h2>
          <p>order_token : {ordertoken}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={()=>{navigateFromOrder(`/order/${ordertoken}`)}}>Go Order Tracking</button>
          </div>
        </div>
      </div>
    </div>
  );
};
