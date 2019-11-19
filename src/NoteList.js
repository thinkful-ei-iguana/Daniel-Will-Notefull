import React from 'react';
import Link from 'react-router-dom';
import Note from './Note';
import AddButton from './AddButton';

export default function NoteList(props) {
  
  
  const notes = props.notes.map(note => {

    return (
      <Note note={note} />
    );
  });

  return (
    <section className='note-list'>
      <ul>
        {props.notes.map(note => 
          <li key={note.id}>
            <Note 
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        )}
      </ul>

      <div>
        <AddButton 
          tag={Link}
          to='/add-note'
          type='button'
          className='add-note-btn'
        >
          note
        </AddButton>
      </div>
    </section>
  );
}