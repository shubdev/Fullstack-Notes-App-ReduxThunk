import noteModel from "../modules/notes.module.js";

// Create a new note
export const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    const note = await noteModel.create({ title, description });

    res.status(201).json({ message: "Note created successfully", note });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// Get all notes
export const getAllNotes = async (req, res) => {
  try {
    const notes = await noteModel.find();

    res.status(200).json({ message: "Notes fetched successfully", notes });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// Get a single note by ID
export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await noteModel.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note fetched successfully", note });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// Update a note by ID
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const note = await noteModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true, runValidators: true }
    );

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note updated successfully", note });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// Delete a note by ID
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await noteModel.findByIdAndDelete(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
