import { useContext, useEffect, useState } from "react";
import NoteItem from "../ui/NoteItem";
import { NoteContext } from "../../contex/NoteContext";

function Note() {
  const [noteList, setNoteList] = useState([]);
  const { notes } = useContext(NoteContext);

  useEffect(() => {
    if (notes) {
      setNoteList(notes);
    }
  }, [notes]);

  return (
    <div className="m-2 d-flex flex-wrap">
      {noteList.map((note, index) => (
        <NoteItem note={note} key={index} index={index} />
      ))}
    </div>
  );
}

export default Note;
