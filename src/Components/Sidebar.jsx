import React from 'react';

export default function Sidebar({ notes, setCurrNoteId, currNote, newNote, deleteNote }) {
    const noteElements = notes.map((note, idx) => {
        return (
            <div key={note.id}>
                <div
                    className={`title ${note.id === currNote.id && "selected-note"}`}
                    onClick={() => setCurrNoteId(note.id)}
                >
                    <h4 className='text-snippet'> {note.body.length !== 0 ? note.body.split("\n")[0].substr(0, 15) : `--`} {note.body.length > 15 && " ..."} </h4>
                    <button 
                    className='delete-btn'
                    onClick={(event) => deleteNote(event, note.id)}
                    >
                        <i className="gg-trash trash-icon"></i>
                    </button>
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