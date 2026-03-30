import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slice/notesSlice";

const store = configureStore({
  reducer: {
    // Add your slices here, e.g.:
    notes: notesReducer,
  },
});

export default store;
