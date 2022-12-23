import { configureStore } from "@reduxjs/toolkit";
import mentorReducer from "../features/mentor/mentorSlice";
export const store = configureStore({
  reducer: {
    mentor: mentorReducer,
  },
});
