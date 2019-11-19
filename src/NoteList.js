import React from 'react';
import NoteItem from './NoteItem;'

function NoteList(props) {
  const notes = props.notes.map(note => {
    return (
      <NoteItem note={note} />
    );
  });

  return (
    <div className="note-list">
      {notes}
    </div>
  );
}