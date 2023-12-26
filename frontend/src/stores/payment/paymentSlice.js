import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  paymentcomponents: {
    cartdiscountpercent: 0,
    deliverycharge: 0,
    superdiscount: 0
  },
  cartdiscount: "",
  superdiscount: "",
  paymentId: "",
  userId: "",
  price: 0,
  paymentMethod: "",
  paymentReceived: false,
  db: [],
  error: null
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentId: (state, action) => {
      return {
        ...state,
        paymentId: action.payload
      };
    },
    setCartDiscount: (state, action) => {
      return {
        ...state,
        cartdiscount: action.payload
      };
    },
    clearCartDiscount: (state, action) => {
      let paymentcomponentstate = state.paymentcomponents;
      return {
        ...state,
        cartdiscount: "",
        paymentcomponents: {
          ...paymentcomponentstate,
          cartdiscountpercent: 0
        }
      };
    },
    setSuperDiscount: (state, action) => {
      return {
        ...state,
        superdiscount: action.payload
      };
    },
    clearSuperDiscount: (state, action) => {
      let paymentcomponentstate = state.paymentcomponents;
      return {
        ...state,
        superdiscount: "",
        paymentcomponents: {
          ...paymentcomponentstate,
          superdiscount: 0
        }
      };
    },
    setDeliveryCharge: (state, action) => {
      let paymentcomponentstate = state.paymentcomponents;
      return {
        ...state,
        paymentcomponents: {
          ...paymentcomponentstate,
          deliverycharge: action.payload
        }
      };
    },
    setCartDiscountPercent: (state, action) => {
      let paymentcomponentstate = state.paymentcomponents;
      return {
        ...state,
        paymentcomponents: {
          ...paymentcomponentstate,
          cartdiscountpercent: action.payload
        }
      };
    },
    setSuperDiscountAmount: (state, action) => {
      let paymentcomponentstate = state.paymentcomponents;
      return {
        ...state,
        paymentcomponents: {
          ...paymentcomponentstate,
          superdiscount: action.payload
        }
      };
    },
    setPaymentUser: (state, action) => {
      return {
        ...state,
        userId: action.payload
      };
    },
    setPrice: (state, action) => {
      return { ...state, price: action.payload };
    },
    setPaymentMethod: (state, action) => {
      return {
        ...state,
        paymentMethod: action.payload
      };
    },
    setPaymentReceived: (state, action) => {
      return {
        ...state,
        paymentReceived: true
      };
    },
    clearPaymentDetails: (state, action) => {
      return {
        paymentcomponents: {
          cartdiscountpercent: 0,
          deliverycharge: 0,
          superdiscount: 0
        },
        cartdiscount: "",
        superdiscount: "",
        paymentId: "",
        userId: "",
        price: 0,
        paymentMethod: "",
        paymentReceived: false,
        db: [],
        error: null
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createMongoPayment.fulfilled, (state, action) => {
      var resObjGeo = action.payload;
      var resObjToken = action.payload.data.PaymentToken;
      state.db = resObjGeo;
      state.paymentId = resObjToken;
    });
    builder.addCase(createMongoPayment.pending, (state, action) => {
      var resObjGeo = action.payload;
      state.db = resObjGeo;
    });
    builder.addCase(createMongoPayment.rejected, (state, action) => {
      var resObjGeo = action.payload;
      state.error = resObjGeo;
    });
  }
});

export const {
  setPaymentId,
  setCartDiscount,
  clearCartDiscount,
  setSuperDiscount,
  clearSuperDiscount,
  setDeliveryCharge,
  setCartDiscountPercent,
  setSuperDiscountAmount,
  setPaymentUser,
  setPrice,
  setPaymentMethod,
  clearPaymentDetails
} = paymentSlice.actions;

export const selectPaymentPrice = (state) => state.payment.price;
export const selectPaymentID = (state) => state.payment.paymentId;
export const selectPaymentMethod = (state) => state.payment.paymentMethod;
export const selectDeliveryCharge = (state) =>
  state.payment.paymentcomponents.deliverycharge;
export const selectCartDiscountPercent = (state) =>
  state.payment.paymentcomponents.cartdiscountpercent;
export const selectSuperDiscountAmount = (state) =>
  state.payment.paymentcomponents.superdiscount;
export const selectCartCoupon = (state) => state.payment.cartdiscount;
export const selectSuperCoupon = (state) => state.payment.superdiscount;

export const createMongoPayment = createAsyncThunk(
  "payment/create",
  async (payinfo, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/payment/create-online-payment",
        {
          method: "POST",
          body: JSON.stringify(payinfo),
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

export default paymentSlice.reducer;
