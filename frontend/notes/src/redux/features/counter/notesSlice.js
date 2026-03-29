import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  loading: false,
  error: null,
};


export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  const response = await fetch("http://localhost:3000/api/notes");
  const data = await response.json();
  return data;
});

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note,
      );
    },
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
