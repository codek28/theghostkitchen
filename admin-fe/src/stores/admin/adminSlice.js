import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// save some session settings here like permissions, etc.

// to create database admin auth state

// create listener for logging in

// can use with react redux firebase
// https://redux-toolkit.js.org/usage/usage-guide

// integrate it with admin details as well
// try to keep initial state in user object not as null, rather bunch of unselected options

const initialState = {
  admin: { uid: "", emailid: "", adminname: "", db: [] },
  zone: "",
  pc:"",
  ordertoken:"",
  status: "idle",
  isLoggedIn: false,
  error: null,
};
// only one of the above property gets initialized

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      return { ...state, isLoggedIn: true };
    },
    clearLogin: (state) => {
      return { ...state, isLoggedIn: false };
    },
    setAdminUid: (state, action) => {
      return {
        ...state,
        admin: { ...state.user, uid: action.payload },
      };
    },
    setAdminEmailId: (state, action) => {
      return {
        ...state,
        admin: { ...state.user, emailid: action.payload },
      };
    },
    setAdminName: (state, action) => {
      return {
        ...state,
        admin: { ...state.user, adminname: action.payload },
      };
    },
    setAdminZone: (state, action) => {
      return {
        ...state,
        zone: action.payload,
      };
    },
    setAdminPC: (state, action) => {
      return {
        ...state,
        pc: action.payload,
      };
    },
    setAdminOrder: (state, action) => {
      return {
        ...state,
        ordertoken: action.payload,
      };
    },
    clearAdmin: (state) => {
      return {
        admin: { uid: "", emailid: "", adminname: "", db: [] },
        zone: "",
        pc:"",
        ordertoken:"",
        status: "idle",
        isLoggedIn: false,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      var resArrLogin = action.payload;
      state.admin.db = resArrLogin;
      state.status = "admin login success";
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(loginAdmin.pending, (state, action) => {
      state.status = "admin login loading";
      state.isLoggedIn = false;
    });
    builder.addCase(loginAdmin.rejected, (state, action) => {
      state.status = "admin login failed";
      state.isLoggedIn = false;
      state.error = action.payload;
    });
  },
});

// check selectors
export const getAdminName = (state) => state.admin.admin.username;
export const getAdminNumber = (state) => state.admin.admin.emailid;
export const getAdminUid = (state) => state.admin.admin.uid;
export const getAdmin = (state) => state.admin.admin;
export const getAdminPC = (state) => state.admin.pc;
export const getAdminOrder = (state) => state.admin.ordertoken;
export const getAdminLogin = (state) => state.admin.isLoggedIn;
export const getLoginStatus = (state) => state.admin.status;
export const getAdminZone = (state) => state.admin.zone;

// check if need to create first time user
// improve error handling

export const loginAdmin = createAsyncThunk(
  "admin/login",
  async (adminuid, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/admin/get-admin", {
        method: "POST",
        body: JSON.stringify({
          uid: adminuid,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const res = response.text();
      return res;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const updateOrderDB = createAsyncThunk(
  "order/update",
  async (ordertoken, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/order/update-online-order", {
        method: "POST",
        body: JSON.stringify({
          OrderToken: ordertoken
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      const res = response.text();
      return res;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const {
  setAdminUid,
  setAdminPhone,
  setAdminName,
  setAdminZone,
  setAdminPC,
  setAdminOrder,
  clearAdmin,
  setLogin,
  clearLogin,
} = adminSlice.actions;

export default adminSlice.reducer;
