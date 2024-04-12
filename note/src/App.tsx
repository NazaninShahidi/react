import React from "react";
import Note from "./component/Note/Notes";
import CreateNote from "./component/Note/CreateNote";
import { NoteContextProvider } from "./contex/NoteContext";

function App() {
  return (
    <NoteContextProvider>
      <div>
        <div className="top-heading">
          <h1>My Notes</h1>
        </div>
        <div className="d-flex align-center">
          <CreateNote />
          <Note />
        </div>
      </div>
    </NoteContextProvider>
  );
}

export default App;
