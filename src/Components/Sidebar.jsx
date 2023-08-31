import React from 'react';

export default function Sidebar({ notes, setCurrNoteId, currNote, newNote }) {
    const noteElements = notes.map((note, idx) => {
        return (
            <div key={note.id}>
                <div 
                className={`title ${note.id === currNote.id && "selected-note"}`}
                onClick={() => setCurrNoteId(note.id)}
                >
                    <div> Note {idx + 1} </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <section className='pane'>
                <div className="sidebar--header">
                    <h3>Notes</h3>
                    <button 
                    className='new-note'
                    onClick={newNote}
                    >+</button>
                </div>
                {noteElements}
            </section>
        </>
    );
}