import React from 'react';

export default function Sidebar({notes}) {
    console.log(notes);

    const noteElements = notes.map((note, index) => (
        <div key={index}>
            <div>
                <h4>Note {index + 1}</h4>
            </div>
        </div>
    ))
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