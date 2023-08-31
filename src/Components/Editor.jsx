import React from 'react';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
export default function Editor({updateNote, currNote}) {
    return (
        <section className='pane'>
            <ReactMde 
            value='heyy'
            />
        </section>
    );
}