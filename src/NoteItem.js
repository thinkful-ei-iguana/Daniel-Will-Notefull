import React from 'react':

export default function NoteItem(props) {
  return (
    <div className="note-item">
      <header className="note-item-header">
        {props.note.name}
      </header>
      <p className="note-item-desc">
        {props.note.content}
      </p>
    </div>
  );
}