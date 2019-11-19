import React from "react";
import Note from ".Note";

export default function NotePage(props) {
  return (
    <section className="note-page">
      <Note 
        id={props.note.id}
        name={props.note.name}
        modified={props.note.modified}
      />
      <div className='note-page-content'>
        {props.note.content.map((para, i) => 
          <p key={i}>
            {para}
          </p>
        )}
      </div>
    </section>
  );
}

NotePage.defaultProps = {
  note: {
    content: ""
  }
};
