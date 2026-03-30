import axios from "axios";

const baseUrl = "http://localhost:3000/api";

export const createNote = async (note) => {
  const res = await axios.post(`${baseUrl}/notes`, note);
  return res.data;
};

export const getNotes = async () => {
  const res = await axios.get(`${baseUrl}/notes`);
  return res.data;
};

export const updateNote = async (note) => {
  const res = await axios.put(`${baseUrl}/notes/${note.id}`, note);
  return res.data;
};

export const deleteNote = async (id) => {
  const res = await axios.delete(`${baseUrl}/notes/${id}`);
  return res.data;
};
