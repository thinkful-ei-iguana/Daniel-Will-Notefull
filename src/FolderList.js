import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import AddButton from './AddButton';


export default function FolderList(props) {
  const folders = props.folders.map(folder => {
    return (
      <FolderItem folder={folder} />
    );
  })

  return (
    <div className="folder-list">
      <ul>
        {props.folders.map(folder => 
          <li key={folder.id}>
            <NavLink 
              className='folder-link'
              to={`/folder/${folder.id}`}
            >
              <span></span>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  )
}