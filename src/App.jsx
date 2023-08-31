import React from 'react';
import Split from "react-split";
import { nanoid } from "nanoid";
import { useState } from 'react';

// components
import Editor from "./Components/Editor.jsx";
import Sidebar from "./Components/Sidebar.jsx";

function App() {

  const [notes, setNotes] = useState([]);
  const [currNoteId, setCurrNoteId] = useState((notes[0] && notes[0].id) || "");

  const createNewNote = () => {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title her"
    }
    setNotes(prev => ([newNote, ...prev]));
    setCurrNoteId(newNote.id);
  }

  const findCurrNote = () => {
    return notes.find((note) => {
      return note.id === currNoteId
    }) || notes[0];
  }

  const updateNote = (text) => {
    setNotes(prev => (prev.map(note => {
      return note.id === currNoteId
        ? { ...note, body: text } :
        note
    })))
  }
  return (
    <main>
      {notes.length !== 0 ?
        <Split
          sizes={[20, 80]}
          direction="horizontal"
          className='split'
        >
          <Sidebar
            notes={notes}
            setCurrNoteId={setCurrNoteId}
            currNote={findCurrNote()}
            newNote={createNewNote}
          />
          {
            currNoteId &&
            notes.length > 0 &&
            <Editor 
              updateNote = {updateNote}
              currNote = {findCurrNote()}
            />
          }
        </Split> :
        <div className='no-notes'>
          <h1>You have no notes</h1>
          <button
            className='first-note'
            onClick={createNewNote}
          >Create one Note</button>
        </div>}
    </main>
  )
}

export default App
