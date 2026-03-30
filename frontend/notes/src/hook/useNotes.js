import { useSelector, useDispatch } from "react-redux";
import { fetchNotes } from "../redux/slice/notesSlice";

export const useNotes = () => {
  const dispatch = useDispatch();
  const { state, isLoading, error } = useSelector((state) => state);

  const addNote = (note) => {
    dispatch(fetchNotes(note));
  };

  return { addNote };
};
