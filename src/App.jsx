import React from 'react';
import Split from "react-split";
import { nanoid } from "nanoid";
import { useState, useEffect } from 'react';

// components
import Editor from "./Components/Editor.jsx";
import Sidebar from "./Components/Sidebar.jsx";

function App() {

  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || "");
  const [currNoteId, setCurrNoteId] = useState((notes[0] && notes[0].id) || "");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

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

  // return note.id === currNoteId
  //   ? { ...note, body: text } :
  //   note
  const updateNote = (text) => {

    setNotes(prev => {

      let notesArr = [];
      prev.map(note => {
        if (note.id === currNoteId) {
          console.log(note);
          notesArr = [{...note, body : text}, ...notesArr]
        } else {
          notesArr.push(note);
        }
      }
      )
      return notesArr;

    })
  }

  function deleteNote(event, noteId){
    event.stopPropagation();
    // console.log(noteId);
    // setNotes(prev => {
    //   return prev.splice(noteId, 1);
    // })
    setNotes(prev => {
      let notesArr = [];
      for(let i = 0; i < prev.length; i++) {
        const note = prev[i];
        if(note.id !== noteId) {
          notesArr.push(note);
        }
      }
      return notesArr;
    })
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
            deleteNote={deleteNote}
          />
          {
            currNoteId &&
            notes.length > 0 &&
            <Editor
              updateNote={updateNote}
              currNote={findCurrNote()}
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
