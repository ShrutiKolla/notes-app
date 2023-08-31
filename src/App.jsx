import React from 'react';
import Split from "react-split";
import { nanoid } from "nanoid";
import { useState } from 'react';

// components
import Editor from "./Components/Editor.jsx";
import Sidebar from "./Components/Sidebar.jsx";

function App() {

  const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem("notes")) || []
  )
  const [currNoteId, setCurrNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  )

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
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
            currNoteId={currNodeId}
          />
          <Editor />
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
