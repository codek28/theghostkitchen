import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./admin/adminSlice";
import pageReducer from "./page/pageSlice"

const rootReducer = combineReducers({
  admin: adminReducer,
  page: pageReducer
});

export default rootReducer;
