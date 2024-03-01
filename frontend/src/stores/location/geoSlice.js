import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  geoid:"",
  userId: "",
  address: { label: "", address1: "", address2: "", address3: "" },
  location: { loaded: false, coordinates: { lat: "", lng: "" }, error: false },
  db: [],
  savedetails: false,
  todeliver: false,
};

export const geoSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {
    setGeoID: (state, action) => {
      return {
        ...state,
        geoid: action.payload,
      };
    },
    setLocationUser: (state, action) => {
      return {
        ...state,
        userId: action.payload,
      };
    },
    setAddress: (state, action) => {
      const nestedStateAddress = state.address;
      return {
        ...state,
        address: { ...nestedStateAddress, ...action.payload },
      };
    },
    setLocation: (state, action) => {
      return {
        ...state,
        location: action.payload,
      };
    },

    setSaveDetails: (state, action) => {
      return {
        ...state,
        savedetails: true,
      };
    },
    setToDeliver: (state, action) => {
      return {
        ...state,
        todeliver: true,
      };
    },
    clearLocation: () => {
      return {
        geoid:"",
        userId: "",
        address: { label: "", address1: "", address2: "", address3: "" },
        location: {
          loaded: false,
          coordinates: { lat: "", lng: "" },
          error: false,
        },
        db: [],
        savedetails: false,
        todeliver: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FindUserGeo.fulfilled, (state, action) => {
      var resObjGeo = action.payload;
      state.db = resObjGeo;
    });
    builder.addCase(FindUserGeo.pending, (state, action) => {
      var resObjGeo = action.payload;
      state.db = resObjGeo;
    });
    builder.addCase(FindUserGeo.rejected, (state, action) => {
      var resObjGeo = action.payload;
      state.db = resObjGeo;
    });
    builder.addCase(CreateNewAddress.fulfilled, (state, action) => {
      var resObjGeo = action.payload;
      var resobjgeoid = action.payload.GeoID
      state.geoid = resobjgeoid
      state.db = resObjGeo;
    });
    builder.addCase(CreateNewAddress.pending, (state, action) => {
      var resObjGeo = action.payload;
      state.db = resObjGeo;
    });
    builder.addCase(CreateNewAddress.rejected, (state, action) => {
      var resObjGeo = action.payload;
      state.db = resObjGeo;
    });
  },
});

export const {
  setGeoID,
  setLocationUser,
  setAddress,
  setLocation,
  setDeliveryStatus,
  setSaveDetails,
  setToDeliver,
  clearLocation,
} = geoSlice.actions;

// create thunk to fetch user location from db once sign in is done
// check again async thunk functionality

const ipaddrusergeo = process.env.REACT_APP_IPADDR + '/api/geo/get-user-geo'

export const FindUserGeo = createAsyncThunk(
  "geo/find",
  async (userid, { rejectWithValue }) => {
    try {
      const responseForGeo = await fetch(
        ipaddrusergeo,
        {
          method: "POST",
          body: JSON.stringify({
            userID: userid,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((data) => data.json())
        .then((body) => body);
      return { responseForGeo };
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

const ipaddrcreateusergeo = process.env.REACT_APP_IPADDR + '/api/geo/create-user-geo'

export const CreateNewAddress = createAsyncThunk(
  "geo/create",
  async (geoInfo, { rejectWithValue }) => {
    try {
      const response = await fetch(
        ipaddrcreateusergeo,
        {
          method: "POST",
          body: JSON.stringify(geoInfo),
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

export const selectGeoId = (state) => state.geo.geoid;
export const selectLocation = (state) => state.geo.location;
export const selectLocationLat = (state) => state.geo.location.coordinates.lat;
export const selectLocationLng = (state) => state.geo.location.coordinates.lng;
export const selectAddress = (state) => state.geo.address;
export const selectAddressLabel = (state) => state.geo.address.label;
export const selectAddressLine1 = (state) => state.geo.address.address1;
export const selectAddressLine2 = (state) => state.geo.address.address2;
export const selectAddressLine3 = (state) => state.geo.address.address3;
export const selectLocationStatus = (state) => state.geo.location.loaded;
export const selectSaveGeoSelection = (state) => state.geo.savedetails;
export const selectDeliveryStatus = (state) => state.geo.todeliver;

export default geoSlice.reducer;
