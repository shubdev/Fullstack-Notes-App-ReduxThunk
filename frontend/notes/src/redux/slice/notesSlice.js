import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createNote } from "../../services/noteService";

const initialState = {
  notes: [],
  isLoading: false,
  error: null,
};

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async (note) => {
  return createNote(note);
});

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // addNote: (state, action) => {
    //   state.notes.push(action.payload);
    // },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("payload data", action.payload);
      state.notes.push(action.payload);
    });
    builder.addCase(fetchNotes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
