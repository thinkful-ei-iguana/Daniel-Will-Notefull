import React from 'react';
import FolderItem from './FolderItem'

export default function FolderList(props) {
  const folders = props.folders.map(folder => {
    return (
      <FolderItem folder={folder} />
    );
  })

  return (
    <div className="folder-list">
      {folders}
    </div>
  )
}