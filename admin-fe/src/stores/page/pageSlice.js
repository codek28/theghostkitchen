import { createSlice } from "@reduxjs/toolkit";

// can use with react redux firebase
// https://redux-toolkit.js.org/usage/usage-guide

// integrate it with admin details as well
// try to keep initial state in user object not as null, rather bunch of unselected options

const initialState = {
  operation: "",
  operationaccess: false,
  task: "",
  taskaccess: false,
  page: "",
  pageaccess: false,
};
// only one of the above property gets initialized

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setOperationAccess: (state, action) => {
      return { ...state, operationaccess: true };
    },
    clearOperationAccess: (state) => {
      return { ...state, operationaccess: false };
    },
    setOperation: (state, action) => {
      return {
        ...state,
        operation: action.payload,
      };
    },
    setTaskAccess: (state, action) => {
      return { ...state, taskaccess: true };
    },
    clearTaskAccess: (state) => {
      return { ...state, taskaccess: false };
    },
    setTask: (state, action) => {
      return {
        ...state,
        task: action.payload,
      };
    },
    setPageAccess: (state, action) => {
      return { ...state, pageaccess: true };
    },
    clearPageAccess: (state) => {
      return { ...state, pageaccess: false };
    },
    setPage: (state, action) => {
      return {
        ...state,
        page: action.payload,
      };
    },
  },
});

// check selectors
export const getOperation = (state) => state.page.operation;
export const getOperationAccess = (state) => state.page.operationaccess;
export const getTask = (state) => state.page.task;
export const getTaskAccess = (state) => state.page.taskaccess;
export const getPage = (state) => state.page.page;
export const getPageAccess = (state) => state.page.pageaccess;

export const {
  setOperation,
  setOperationAccess,
  setPage,
  setPageAccess,
  setTask,
  setTaskAccess,
} = pageSlice.actions;

export default pageSlice.reducer;
