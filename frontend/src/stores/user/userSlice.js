import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  user: { uid: "", phoneNumber: "", username: "", db: [], benefits: [] },
  zone: "not-selected",
  status: "idle",
  isLoggedIn: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      return { ...state, isLoggedIn: true };
    },
    clearLogin: (state) => {
      return { ...state, isLoggedIn: false };
    },
    setUserUid: (state, action) => {
      return {
        ...state,
        user: { ...state.user, uid: action.payload },
      };
    },
    setUserPhone: (state, action) => {
      return {
        ...state,
        user: { ...state.user, phoneNumber: action.payload },
      };
    },
    setUserName: (state, action) => {
      return {
        ...state,
        user: { ...state.user, username: action.payload },
      };
    },
    setUserDb: (state, action) => {
      return {
        ...state,
        user: { ...state.user, db: action.payload },
      };
    },
    setUserBenefits: (state, action) => {
      return {
        ...state,
        user: { ...state.user, benefits: action.payload },
      };
    },
    setUserZone: (state, action) => {
      return {
        ...state,
        zone: action.payload,
      };
    },
    clearUser: (state) => {
      return {
        user: { uid: "", phoneNumber: "", username: "", db: [], benefits: [] },
        zone: "not-selected",
        status: "idle",
        isLoggedIn: false,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findUser.fulfilled, (state, action) => {
      var resUserLoginArr = action.payload.resA;
      var resUserLoginName = action.payload.resA.data.Name
      var resUserBenefitsArr = action.payload.resB;
      state.user.db = resUserLoginArr;
      state.user.benefits = resUserBenefitsArr;
      state.user.username = resUserLoginName
      state.status = "user login success";
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(findUser.pending, (state, action) => {
      state.status = "user login loading";
      state.isLoggedIn = false;
    });
    builder.addCase(findUser.rejected, (state, action) => {
      state.status = "user login failed";
      state.isLoggedIn = false;
      state.error = action.payload;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      var resArrRegister = action.payload;
      state.user.db = resArrRegister;
      state.status = "user registration success";
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(registerUser.pending, (state, action) => {
      state.status = "user registration loading";
      state.isLoggedIn = false;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = "user registration failed";
      state.isLoggedIn = false;
      state.error = action.payload;
    });
    builder.addCase(registerUserBenefits.fulfilled, (state, action) => {
      var resArrRegisterBenefits = action.payload;
      state.user.benefits = resArrRegisterBenefits;
      state.status = "user registration benefits success";
      state.error = null;
    });
    builder.addCase(registerUserBenefits.pending, (state, action) => {
      state.status = "user registration  benefits loading";
    });
    builder.addCase(registerUserBenefits.rejected, (state, action) => {
      state.status = "user registration benefits failed";
      state.error = action.payload;
    });
  },
});

export const getUserName = (state) => state.user.user.username;
export const getPhoneNumber = (state) => state.user.user.phoneNumber;
export const getUid = (state) => state.user.user.uid;
export const getUser = (state) => state.user.user;
export const getUserDb = (state) => state.user.user.db;
export const getUserBenefits = (state) => state.user.user.benefits;
export const getUserLogin = (state) => state.user.isLoggedIn;
export const getLoginStatus = (state) => state.user.status;
export const getUserZone = (state) => state.user.zone;

export const findUser = createAsyncThunk(
  "user/login",
  async (useruid, { rejectWithValue }) => {
    try {
      const responseForUser = await fetch(
        "http://localhost:3001/api/user/get-user",
        {
          method: "POST",
          body: JSON.stringify({
            uid: useruid,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((data) => data.json())
        .then((body) => body);
      const responseForUserBenefits = await fetch(
        "http://localhost:3001/api/user/get-user-benefits",
        {
          method: "POST",
          body: JSON.stringify({
            uid: useruid,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((data) => data.json())
        .then((body) => body);
      return { resA: responseForUser, resB: responseForUserBenefits };
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

export const registerUser = createAsyncThunk(
  "user/register",
  async (userInfo, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/user/create-user",
        {
          method: "POST",
          body: JSON.stringify({
            ContactNo: userInfo.phoneNumber,
            ID: userInfo.uid,
            Name: userInfo.username,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
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

export const registerUserBenefits = createAsyncThunk(
  "user/registerbenefits",
  async (useruid, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/user/create-user-benefits",
        {
          method: "POST",
          body: JSON.stringify({
            ID: useruid,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
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

export const selectNameOfUser = createSelector(
  [(state) => state.user.user.username, (state) => state.user.user.db],
  (username, userDbState) => {
    try {
      if (userDbState?.Name) {
        return userDbState.Name;
      } else {
        return username;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const {
  setUserUid,
  setUserPhone,
  setUserName,
  setUserZone,
  setUserDb,
  setUserBenefits,
  clearUser,
  setLogin,
  clearLogin,
} = userSlice.actions;

export default userSlice.reducer;
