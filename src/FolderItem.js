import React from 'react';

export default function FolderItem(props) {
  return (
    <div className="folder-item">
      {props.folder.name}
    </div>
  );
}