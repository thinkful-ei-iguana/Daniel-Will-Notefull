import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import AppHeader from './AppHeader';
import FolderList from './FolderList';
import NoteList from './NoteList';
import NoteNavigation from './NoteNavigation';
import NotePage from './NotePage';
import {getNotes, findNote, findFolder} from './notehelpers';
import dummyStore from './dummyStore';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  renderListRoutes() {
    const {notes, folders} = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
            exact  
            key={path}
            render={routeProps => (
              <FolderList 
                folders={folders}
                notes={notes}
                {...routeProps}
              />
            )}
          />
        ))}

        <Route 
          path='/note/:noteId'
          render={routeProps => {
            const {noteId} = routeProps.match.params;
            const note = findNote(notes, noteId) || {};
            const folder = findFolder(folders, note.folderId);
            return <FolderList {...routeProps} folder={folder} />;
          }}
        />
        <Route path='add-folder' component={FolderList} />
        <Route path='add-note' component={FolderList} />
      </>

    );
  }

  renderMainRoutes() {
    const {notes, folders} = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
            exact  
            key={path}
            render={routeProps => {
              const {folderId} = routeProps.match.params;
              const notesForFolder = getNotes(notes, folderId);
              return (
                <NoteList 
                  {...routeProps}
                  notes={notesForFolder}
                />
              );
            }}
          />
        ))}

        <Route 
          path='/note/:noteId'
          render={routeProps => {
            const {noteId} = routeProps.match.params;
            const note = findNote(notes, noteId);
            const folder = findFolder(folders, note.folderId);
            return <NotePage {...routeProps} note={note} />;
          }}
        />
        <Route path='add-folder' component={FolderList} />
        <Route path='add-note' component={FolderList} />
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <nav>
          {this.renderListRoutes()}
        </nav>
        {/* <AppHeader /> */}
        <header className="app-header">
          <h1>
            <Link to='/'>
              Noteful
            </Link>
          </h1>
        </header>
        <main>
          {this.renderMainRoutes()}
        </main>
      </div>
    );
  }
}



export default App;
