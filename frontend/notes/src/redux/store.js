import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/counter/notesSlice";

const store = configureStore({
  reducer: {
    // Add your slices here, e.g.:
    notes: notesReducer,
  },
});

export default store;
