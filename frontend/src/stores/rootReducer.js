import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import orderReducer from "./order/orderSlice";
import geoReducer from "./location/geoSlice";
import paymentReducer from "./payment/paymentSlice";
import pageReducer from "./pageflow/pageSlice";
import modcartReducer from "./cart/modcartSlice";

// integrate all the forms into state
// create validation logic for all input states
// make sure every time user log out of app , or completes an order , the website cache is deleted.

// see if order is initialized properly
// can use create api for optimistic state updates like in profile or admin panel

const rootReducer = combineReducers({
  modcart: modcartReducer,
  order: orderReducer,
  user: userReducer,
  geo: geoReducer,
  page: pageReducer,
  payment: paymentReducer,
});

export default rootReducer;
