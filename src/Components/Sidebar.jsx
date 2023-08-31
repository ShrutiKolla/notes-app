import React from 'react';

export default function Sidebar({ notes, currNoteId }) {
    // console.log(notes);

    const noteElements = notes.map((note, index) => {
        return (<div key={index}>
            <div
                className={`title ${note.id === currNoteId ? "selected-note" : ""
                    }`}
            >
                <h4>Note {index + 1}</h4>
            </div>
        </div>)
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