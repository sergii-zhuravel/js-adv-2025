import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";
// import { logger } from "./middlwares/logger";
// import { logger } from "redux-logger";

export const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  devTools: true,
});
