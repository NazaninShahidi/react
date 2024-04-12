import { createContext, useState } from "react";

interface INote {
  title: string;
  text: string;
}

interface IContext {
  notes?: Array<INote>;
  addNote?: (item: INote) => void;
  deleteNote?: (index: number) => void;
}

export const NoteContext = createContext<IContext>({
  notes: [],
  addNote: () => {},
  deleteNote: () => {},
});

export function NoteContextProvider(props) {
  const [noteList, setNoteList] = useState<Array<INote>>([]);

  function addNoteHandler(item: INote) {
    const newArr = [...noteList];
    newArr.push(item);
    setNoteList(newArr);
  }

  function deleteNoteHandler(indexItem) {
    const newArr = [...noteList];
    const findIndex = newArr.findIndex((i, index) => index === indexItem);
    if (findIndex !== -1) {
      newArr.splice(findIndex, 1);
      setNoteList(newArr);
    }
  }

  const contextValue: IContext = {
    notes: noteList,
    addNote: addNoteHandler,
    deleteNote: deleteNoteHandler,
  };

  return (
    <NoteContext.Provider value={contextValue}>
      {props.children}
    </NoteContext.Provider>
  );
}
