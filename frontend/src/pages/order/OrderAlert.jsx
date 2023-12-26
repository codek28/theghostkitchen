import { usePostOrderHandle } from "../../hooks/usePostOrderHandle";

export const OrderAlert = () => {

const postorderobj = usePostOrderHandle()

  return (
    <div className="mx-auto p-8">
      <div
        className="tooltip tooltip-open tooltip-secondary"
        data-tip="user"
      >
        <button className="btn btn-secondary">Orders</button>
      </div>
    </div>
  );
};
