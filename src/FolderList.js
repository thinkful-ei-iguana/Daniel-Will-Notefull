import React from "react";
import { NavLink, Link } from "react-router-dom";
import AddButton from "./AddButton";
import { countNotes } from "../notes-helpers";

export default function NoteListNav(props) {
  return (
    <div className="NoteListNav">
      <ul className="NoteListNav__list">
        {props.folders.map(folder => (
          <li key={folder.id}>
            <NavLink
              className="NoteListNav__folder-link"
              to={`/folder/${folder.id}`}
            >
              <span>{countNotes(props.notes, folder.id)}</span>
              {folder.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <AddButton
          tag={Link}
          to="/add-folder"
          type="button"
          className="add-btn"
        >
          Folder
        </AddButton>
      </div>
    </div>
  );
}

NoteListNav.defaultProps = {
  folders: []
};
