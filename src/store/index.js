import { configureStore } from "@reduxjs/toolkit";
import DocumentReducer from "../slice/document";

export default configureStore({
  reducer: {
    document: DocumentReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
