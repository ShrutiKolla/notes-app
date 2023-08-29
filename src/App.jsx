import React from 'react';
import Split from "react-split";
import { nanoid } from "nanoid";
import { useState } from 'react';

// components
import Editor from "./Components/Editor.jsx";
import Sidebar from "./Components/Sidebar.jsx";

function App() {

  const [notes, setNotes] = useState([]);
  console.log(notes);
  const createNewNote = () => {
    const newNote = {
      id: nanoid(),
      body: '# Type your markdown note\'s title here'
    }
    setNotes(prev => [newNote, ...prev]);
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
            notes={notes} />
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
