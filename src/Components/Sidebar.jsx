import React from 'react';

export default function Sidebar({ notes, currNoteId, currNote }) {
    const noteElements = notes.map((note, idx) => {
        return (
            <div key={note.id}>
                <div className={`title ${note.id === currNote.id && "selected"}`}>
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
                    <button className='new-note'>+</button>
                </div>
                {noteElements}
            </section>
        </>
    );
}