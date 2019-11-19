import React from "react";
import AddButton from "./AddButton";

export default function NoteNavigation(props) {
  return (
    <div>
      <AddButton 
        tag='button'
        role="link"
        onClick={() => props.history.goBack()}
        className="back-btn"
      >
        Back
      </AddButton>
      {props.folder && (
        <h3 className='folder-name'>{props.folder.name}</h3>
      )}
    </div>
  );
}

NoteNavigation.defaultProps = {
  history: {
    goBack: () => {}
  }
};
