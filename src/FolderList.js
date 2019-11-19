import React from "react";
import { NavLink, Link } from "react-router-dom";
import AddButton from "./AddButton";
import { countNotes } from "./notehelpers";

export default function FolderList(props) {
  return (
    <div className="folder-list">
      <ul>
        {props.folders.map(folder => (
          <li key={folder.id}>
            <NavLink to={`/folder/${folder.id}`}>
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

FolderList.defaultProps = {
  folders: []
};
