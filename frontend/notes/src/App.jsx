import React, { useState } from "react";
import { useSelector } from "react-redux";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

const App = () => {
  const [editingNote, setEditingNote] = useState(null);
  const notes = useSelector((state) => state.notes.notes);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Notes App</h1>
        <p>Capture your thoughts, ideas, and reminders</p>
      </header>

      <NoteForm editingNote={editingNote} setEditingNote={setEditingNote} />

      <div className="section-title">
        Your Notes
        <span className="note-count">{notes.length}</span>
      </div>

      <NoteList setEditingNote={setEditingNote} />
    </div>
  );
};

export default App;
