import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../redux/features/counter/notesSlice";
import "./NoteList.css";

const NoteList = ({ setEditingNote }) => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handleEdit = (note) => {
    setEditingNote(note);
  };

  if (notes.length === 0) {
    return (
      <div className="notes-empty">
        <div className="empty-icon">📋</div>
        <h3>No notes yet</h3>
        <p>Create your first note using the form above!</p>
      </div>
    );
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <div className="note-card-header">
            <h3 className="note-title">{note.title}</h3>
            <span className="note-date">{note.createdAt}</span>
          </div>
          <p className="note-content">{note.content}</p>
          <div className="note-card-actions">
            <button
              onClick={() => handleEdit(note)}
              className="btn-icon btn-edit"
              title="Edit note"
            >
              ✏️
            </button>
            <button
              onClick={() => handleDelete(note.id)}
              className="btn-icon btn-delete"
              title="Delete note"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
