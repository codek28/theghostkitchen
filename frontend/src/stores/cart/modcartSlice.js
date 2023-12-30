import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  cartproducts: [],
  totalCartItems: 0,
  totalCartPrice: 0
};

export const modcartSlice = createSlice({
  name: "modcart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        cartproducts: [
          ...state.cartproducts,
          {
            productid: action.payload.productid,
            productname: action.payload.productname,
            productprice: action.payload.productprice,
            discountpercent: action.payload.discountpercent,
            selectedvariant: action.payload.selectedvariant,
            addonlist: [...action.payload.addonlist],
            addonprice: action.payload.addonprice,
            amount: 1
          }
        ],
        totalCartItems: state.totalCartItems + 1,
        totalCartPrice:
          state.totalCartPrice +
          (action.payload.addonprice +
            action.payload.productprice -
            (action.payload.productprice * action.payload.discountpercent) /
              100)
      };
    },
    removeFromCart: (state, action) => {
      return {
        cartproducts: state.cartproducts.filter(
          (cartproduct) =>
            cartproduct.productname !== action.payload.productname
        ),
        totalCartItems: state.totalCartItems - 1,
        totalCartPrice:
          state.totalCartPrice -
          (action.payload.addonprice +
            action.payload.productprice -
            (action.payload.productprice * action.payload.discountpercent) /
              100)
      };
    },
    clearCart: (state) => {
      return {
        cartproducts: [],
        totalCartItems: 0,
        totalCartPrice: 0
      };
    },
    incrementProductAmount: (state, action) => {
      return {
        cartproducts: state.cartproducts.map((cartproduct) =>
          cartproduct.productname === action.payload.productname
            ? {
                ...cartproduct,
                addonlist: [
                  ...cartproduct.addonlist,
                  ...action.payload.addonlist
                ],
                addonprice: cartproduct.addonprice + action.payload.addonprice,
                amount: cartproduct.amount + 1
              }
            : cartproduct
        ),
        totalCartItems: state.totalCartItems + 1,
        totalCartPrice:
          state.totalCartPrice +
          (action.payload.addonprice +
            action.payload.productprice -
            (action.payload.productprice * action.payload.discountpercent) /
              100)
      };
    },
    decrementProductAmount: (state, action) => {
      return {
        cartproducts: state.cartproducts.map((cartproduct) =>
          cartproduct.productname === action.payload.productname
            ? { ...cartproduct, amount: cartproduct.amount - 1 }
            : cartproduct
        ),
        totalCartItems: state.totalCartItems - 1,
        totalCartPrice:
          state.totalCartPrice -
          (action.payload.addonprice +
            action.payload.productprice -
            (action.payload.productprice * action.payload.discountpercent) /
              100)
      };
    },
    clearAddon: (state, action) => {
      return {
        cartproducts: state.cartproducts.map((cartproduct) =>
          cartproduct.productname === action.payload.productname
            ? { ...cartproduct, addonlist: [], addonprice: 0 }
            : cartproduct
        ),
        totalCartItems: state.totalCartItems,
        totalCartPrice: state.totalCartPrice - action.payload.addonprice
      };
    }
  }
});

export const cartProducts = (state) => state.modcart.cartproducts;
export const cartTotalAmount = (state) => state.modcart.totalCartItems;
export const cartTotalPrice = (state) => state.modcart.totalCartPrice;

export const selectAmountInCart = createSelector(
  [
    (state) => state.modcart.cartproducts,
    (state, customproduct) => customproduct
  ],
  (cartState, customproductitem) => {
    try {
      if (cartState.length > 0) {
        if (
          cartState.find(
            (cartitem) => cartitem.productname === customproductitem.productname
          )
        ) {
          const cartproductmatcharray = cartState.filter(
            (cartitem) => cartitem.productname === customproductitem.productname
          );
          return cartproductmatcharray[0].amount;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const selectPriceInCart = createSelector(
  [
    (state) => state.modcart.cartproducts,
    (state, customproduct) => customproduct
  ],
  (cartState, customproductitem) => {
    try {
      if (cartState.length > 0) {
        if (
          cartState.find(
            (cartitem) => cartitem.productname === customproductitem.productname
          )
        ) {
          const cartproductmatcharray = cartState.filter(
            (cartitem) => cartitem.productname === customproductitem.productname
          );
          const cartpricematchamount =
            cartproductmatcharray[0].addonprice +
            cartproductmatcharray[0].amount *
              (cartproductmatcharray[0].productprice -
                (cartproductmatcharray[0].productprice *
                  cartproductmatcharray[0].discountpercent) /
                  100);
          return cartpricematchamount;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
  clearAddon
} = modcartSlice.actions;

export default modcartSlice.reducer;
