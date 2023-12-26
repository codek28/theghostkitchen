import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  page: "LANDING",
  tab: "LANDING",
  userverified: false,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setUserVerified: (state, action) => {
      return {
        ...state,
        userverified: true,
      };
    },
    clearUserVerified: (state, action) => {
      return {
        ...state,
        userverified: false,
      };
    },
    setPageFlow: (state, action) => {
      return {
        ...state,
        page: action.payload,
      };
    },
    setTabFlow: (state, action) => {
      return {
        ...state,
        tab: action.payload,
      };
    },
    clearPageState: (state, action) => {
      return {
        page: "LANDING",
        tab: "LANDING",
        userverified: false,
      };
    },
  },
});

export const {
  setUserVerified,
  clearUserVerified,
  setPageFlow,
  setTabFlow,
  clearPageState,
} = pageSlice.actions;

export const getPage = (state) => state.page.page;
export const getTab = (state) => state.page.tab;

export default pageSlice.reducer;
