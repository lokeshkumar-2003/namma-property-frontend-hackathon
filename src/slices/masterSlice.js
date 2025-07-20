import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {
    isAuth: false,
    username: "",
    email: "",
  },
};

export const masterSlice_config = createSlice({
  name: "MASTER_SLICE_STATE",
  initialState,
  reducers: {
    // Update Auth
    updateAuth(state, action) {
      return {
        ...state,
        auth: {
          ...state.auth,
          ...action.payload,
        },
      };
    },

    //----------------------------
  },
});

export const masterSliceAction = masterSlice_config.actions;
