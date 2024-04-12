import { useContext, useState } from "react";
import Modal from "../ui/Modal";
import "./createNote.css";
import { NoteContext } from "../../contex/NoteContext";

function CreateNote() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", text: "" });
  const { addNote } = useContext(NoteContext);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setNewNote({ title: "", text: "" });
    setModalOpen(false);
  };

  function sumbitHandler(event) {
    event.preventDefault();
    addNote(newNote);
    setNewNote({ title: "", text: "" });
    closeModal();
  }
  return (
    <div className="m-2">
      <div className="new-button">
        <button onClick={openModal} className="newBtn">
          +
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form className="form" onSubmit={sumbitHandler}>
          <div>
            <input
              className="headingInput"
              type="text"
              placeholder="New Note Heading"
              maxLength={15}
              required
              value={newNote.title}
              onChange={(e) =>
                setNewNote({ ...newNote, title: e.target.value })
              }
            />
          </div>
          <div>
            <textarea
              name=""
              className="textInput"
              cols={30}
              rows={3}
              placeholder="Your Note"
              value={newNote.text}
              onChange={(e) => setNewNote({ ...newNote, text: e.target.value })}
              required
            ></textarea>
          </div>
          <div className="d-flex align-center justify-center">
            <div className="addNoteBtn">
              <button type="submit">Add Note</button>
            </div>
            <div className="closeBtn">
              <button type="button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default CreateNote;
