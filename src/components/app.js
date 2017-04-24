import React, { Component } from 'react';
import Immutable from 'immutable';
import InputBar from './inputbar';
import Note from './note';

// This contains all note information which then gets passed to children

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: Immutable.Map({
        1: {
          title: 'testing',
          text: 'I is a note',
          x: 400,
          y: 12,
          zIndex: 26,
        },
        2: {
          title: 'testing',
          text: 'I is a note 2',
          x: 400,
          y: 12,
          zIndex: 26,
        },
      }),
      newID: 3,
    };
  }

  addNote(newTitle) {
    this.setState({
      notes: this.state.notes.set(this.state.newID, {
        title: newTitle,
        text: 'I is a note 2',
        x: 400,
        y: 12,
        zIndex: 26,
      }),
    });
    this.state.newID += 1;
  }

  renderNotes() {
    return this.state.notes.entrySeq().map(([id, note]) => {
      return (<Note id={id} note={note} title={note.title} />);
    });
  }

  render() {
    return (
      <div>
        <InputBar addNote={title => this.addNote(title)} />

        <h1>Hello:</h1>
        <div className="notecontainer">{this.renderNotes()}</div>
      </div>
    );
  }
}

export default App;
