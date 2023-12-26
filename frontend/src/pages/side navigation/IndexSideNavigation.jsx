import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPageFlow } from "../../stores/pageflow/pageSlice";

export const IndexSideNavigation = () => {
  const navigatefromSide = useNavigate();
  const dispatchFromSide = useDispatch();

  const navigateCart = () => {
    dispatchFromSide(setPageFlow("CART"))
    navigatefromSide(`/cart`);
    sessionStorage.setItem("tabname", JSON.stringify('CART'));
  };

  const navigateId = () => {
    dispatchFromSide(setPageFlow("ID"))
    navigatefromSide(`/id`);
    sessionStorage.setItem("tabname", JSON.stringify('ID'));
  };

  const navigateOrder = () => {
    dispatchFromSide(setPageFlow("ORDER"))
    navigatefromSide(`/order`);
    sessionStorage.setItem("tabname", JSON.stringify('ORDER'));
  };

  const navigateEvents = () => {
    dispatchFromSide(setPageFlow("EVENTS"))
    navigatefromSide(`/events`);
    sessionStorage.setItem("tabname", JSON.stringify('EVENTS'));
  };

  const navigateFeedback = () => {
    dispatchFromSide(setPageFlow("FEEDBACK"));
    navigatefromSide(`/feedback`);
    sessionStorage.setItem("tabname", JSON.stringify('FEEDBACK'));
  };

  // create one element for navigate orders

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col mx-auto">
        <div className="">
          <div className="card w-96 bg-base-300 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary">
                  What kind of nonsense is this
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-secondary">
                  Put me on the Council and not make me a Master!??
                </div>
              </div>

              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info">
                  Calm down, Anakin.
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-lime-400 rounded-box"
              >
                <div className="collapse-title text-xl font-medium text-slate-950">
                  Ask me Anything
                </div>
                <div className="collapse-content">
                  <p>
                    tabIndex={0} attribute is necessary to make the div
                    focusable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  bg-indigo-900 ">
          <li>
            <div className=" w-full">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigateCart();
                }}
              >
                Cart
              </button>
            </div>
          </li>
          <li>
            <div className=" w-full">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigateOrder();
                }}
              >
                ORDER
              </button>
            </div>
          </li>
          <li>
            <div className=" w-full">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigateId();
                }}
              >
                ID
              </button>
            </div>
          </li>
          <li>
            <div className=" w-full">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigateEvents();
                }}
              >
                Events
              </button>
            </div>
          </li>
          <li>
            <div className=" w-full">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigateFeedback();
                }}
              >
                Feedback
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
