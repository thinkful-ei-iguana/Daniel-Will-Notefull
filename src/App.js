import React from 'react';
import AppHeader from './AppHeader';
import FolderList from './FolderList';
import NoteList from './NoteList';
import dummyStore from './dummyStore';
import './App.css';

class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <AppHeader />
        <FolderList />
        <NoteList />
      </div>
    );
  }
}

export default App;
