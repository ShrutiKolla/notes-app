import React from 'react';
import Split from "react-split";
import { nanoid } from "nanoid";
import { useState } from 'react';

// components
import Editor from "./Components/Editor.jsx";
import Sidebar from "./Components/Sidebar.jsx";
function App() {
  const [notes, setNotes] = useState([]);
  return (
    <main>
      {notes.length === 0 ?
        <Split
          sizes={[70, 30]}
>
          <Sidebar />
          <Editor />
        </Split> : ""}
    </main>
  )
}

export default App
