import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// id should contain razorpay order id, razorpay bill amount generated from product billing function
// user should contain verified user from userslice
// contents should contain items and details from cartSlice
// feedback should include ratings and written reviews and complaint if any
// feedback redressal should be connected to order via incident id
// add type of order - provider basis, type of order - payment basis
// add feature of loyalty points generated from one order

const initialState = {
  id: "",
  token: "",
  orderinit: false,
  user: [],
  contents: [],
  feedback: { rating: 5, review: "", complaint: false },
  deliverystatus: "",
  cookinginstruction: "",
  orderStatus: "idle",
  profitcenter: "",
  deliverylocid: "",
  db: []
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderId: (state, action) => {
      return {
        ...state,
        id: action.payload
      };
    },
    setOrderUser: (state, action) => {
      return {
        ...state,
        user: action.payload
      };
    },
    setOrder: (state, action) => {
      return {
        ...state,
        contents: action.payload
      };
    },
    setOrderInit: (state, action) => {
      return {
        ...state,
        orderinit: true
      };
    },
    clearOrderInit: (state, action) => {
      return {
        ...state,
        orderinit: false
      };
    },
    setFeedback: (state, action) => {
      return {
        ...state,
        feedback: { ...action.payload }
      };
    },
    setDeliveryStatus: (state, action) => {
      return {
        ...state,
        deliverystatus: action.payload
      };
    },
    setOrderPC: (state, action) => {
      return {
        ...state,
        profitcenter: action.payload
      };
    },
    setOrderLocID: (state, action) => {
      return {
        ...state,
        deliverylocid: action.payload
      };
    },
    setCookingInstruction: (state, action) => {
      return {
        ...state,
        cookinginstruction: action.payload
      };
    },
    setOrderStatus: (state, action) => {
      switch (action.type) {
        default:
          return {
            ...state,
            orderStatus: "IDLE"
          };
        case "LIVE":
          return {
            ...state,
            orderStatus: "LIVE"
          };
        case "COMPLETED":
          return {
            ...state,
            orderStatus: "COMPLETED"
          };
        case "CANCEL":
          return {
            ...state,
            paymentMethod: "CANCEL"
          };
        case "ONCALL":
          return {
            ...state,
            paymentMethod: "ONCALL"
          };
      }
    },
    clearOrderDetails: (state, action) => {
      return {
        id: "",
        token: "",
        orderinit: false,
        user: [],
        contents: [],
        feedback: { rating: 5, review: "", complaint: false },
        deliverystatus: "",
        cookinginstruction: "",
        orderStatus: "idle",
        profitcenter: "",
        db: []
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createMongoOrder.fulfilled, (state, action) => {
      var resObjGeo = action.payload;
      var resObjToken = action.payload.data.OrderToken;
      state.token = resObjToken;
      state.db = resObjGeo;
      state.orderinit = false;
    });
    builder.addCase(createMongoOrder.pending, (state, action) => {
      var resObjGeo = action.payload;
      state.db = resObjGeo;
    });
    builder.addCase(createMongoOrder.rejected, (state, action) => {
      var resObjGeo = action.payload;
      state.db = resObjGeo;
    });
  }
});

export const {
  setOrderId,
  setOrderUser,
  setOrder,
  setOrderInit,
  clearOrderInit,
  setOrderStatus,
  setOrderPC,
  setOrderLocID,
  setFeedback,
  setDeliveryStatus,
  setCookingInstruction,
  clearOrderDetails
} = orderSlice.actions;

const ipaddrcreateonlineorder = process.env.REACT_APP_IPADDR + '/api/order/create-online-order'

export const createMongoOrder = createAsyncThunk(
  "order/create",
  async (orderinfo, { rejectWithValue }) => {
    try {
      const response = await fetch(
        ipaddrcreateonlineorder,
        {
          method: "POST",
          body: JSON.stringify(orderinfo),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }
      )
        .then((data) => data.json())
        .then((body) => body);
      return response;
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

export const selectOrderToken = createSelector(
  [(state) => state.order.token, (state) => state.order.db],
  (ordertoken, orderdbstate) => {
    try {
      if (orderdbstate?.OrderToken) {
        return orderdbstate.OrderToken;
      } else {
        return ordertoken;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const getOrderId = (state) => state.order.id;
export const getOrderToken = (state) => state.order.token;
export const getOrderUser = (state) => state.order.user;
export const getOrderContents = (state) => state.order.contents;
export const getOrderStatus = (state) => state.order.orderStatus;
export const getOrderFeedback = (state) => state.order.feedback;
export const getOrderDeliveryStatus = (state) => state.order.deliverystatus;
export const getOrderCookingInstruction = (state) =>
  state.order.cookinginstruction;
export const getOrderInit = (state) => state.order.orderinit;
export const getOrderPC = (state) => state.order.profitcenter;

export default orderSlice.reducer;
