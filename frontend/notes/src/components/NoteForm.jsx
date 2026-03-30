import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNotes } from "../hook/useNotes";
import "./NoteForm.css";

const NoteForm = ({ editingNote, setEditingNote }) => {
  const { addNote } = useNotes();
  const dispatch = useDispatch();
  const [title, setTitle] = useState(editingNote ? editingNote.title : "");
  const [description, setDescription] = useState(
    editingNote ? editingNote.description : "",
  );

  // Sync form fields when editingNote changes
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDescription(editingNote.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    if (editingNote) {
      dispatch(
        updateNote({
          ...editingNote,
          title,
          description,
        }),
      );
      setEditingNote(null);
    } else {
      dispatch(
        addNote({
          id: Date.now(),
          title,
          description,
          createdAt: new Date().toLocaleString(),
        }),
      );
    }

    setTitle("");
    setDescription("");
  };

  const handleCancel = () => {
    setEditingNote(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="note-form-card">
      <h2 className="form-title">
        {editingNote ? "✏️ Edit Note" : "📝 Create Note"}
      </h2>
      <form onSubmit={handleSubmit} className="note-form">
        <div className="form-group">
          <label htmlFor="note-title">Title</label>
          <input
            id="note-title"
            type="text"
            placeholder="Enter note title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="note-description">description</label>
          <textarea
            id="note-description"
            placeholder="Write your note here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
            rows={5}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingNote ? "Update Note" : "Add Note"}
          </button>
          {editingNote && (
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-cancel"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
