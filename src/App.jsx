import React from 'react';
import Split from "react-split";
import { nanoid } from "nanoid";
import { useState, useEffect } from 'react';
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from 'firebase/firestore';
import { db, notesCollection } from './firebase.js';

// components
import Editor from "./Components/Editor.jsx";
import Sidebar from "./Components/Sidebar.jsx";

function App() {

  const [notes, setNotes] = useState([]);
  const [currNoteId, setCurrNoteId] = useState("");

  const currNote = notes.find(note => note.id === currNoteId) || notes[0];

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
      const notesArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setNotes(notesArr)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    if (!currNoteId) {
      setCurrNoteId(notes[0]?.id);
    }
  }, [notes])

  async function createNewNote() {
    const newNote = {
      body: "# Type your markdown note's title her"
    }
    const newNoteRef = await addDoc(notesCollection, newNote);
    setCurrNoteId(newNoteRef.id);
  }

  async function updateNote(text) {
    const docRef = doc(db, "notes", currNoteId);
    console.log(docRef)
    await setDoc(docRef, { body: text }, { merge: true });
  }

  async function deleteNote(noteId) {
    const docRef = doc(db, "notes", noteId);
    await deleteDoc(docRef)
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
            currNote={currNote}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {
            <Editor
              updateNote={updateNote}
              currNote={currNote}
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
