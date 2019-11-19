import React from 'react';
import AppHeader from './AppHeader';
import FolderList from './FolderList';
import NoteList from './NoteList';
import dummyStore from './dummyStore';
import './App.css';

class App extends React.Component {
  state = dummyStore;

  render() {
    return (
      <div className="App">
        <AppHeader />
        <FolderList folders={this.state.folders}/>
        <NoteList notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
