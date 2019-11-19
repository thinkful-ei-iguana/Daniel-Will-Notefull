import React from 'react';
import Note from './Note'

export default function NoteList(props) {
  const notes = props.notes.map(note => {
    return (
      <Note note={note} />
    );
  });

  return (
    <div className="note-list">
      {notes}
    </div>
  );
}