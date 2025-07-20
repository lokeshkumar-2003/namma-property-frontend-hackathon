import { configureStore } from "@reduxjs/toolkit";
import { masterSlice_config } from "./masterSlice";

const store = configureStore({
  reducer: {
    master: masterSlice_config?.reducer,
  },
});

export default store;
