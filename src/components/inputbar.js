import React, { Component } from 'react';

// This input bar code was based exclusively on Searchbar code from the Youtube SA4 assignment

class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.createNote = this.createNote.bind(this);
  }
  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({ title: event.target.value });
    // this.props.onSearchChange(event.target.value);
    // console.log(this.state.searchterm);
  }

  // Referenced the below sites for onclick functionality and generally getting started
  // https://scotch.io/tutorials/learning-react-getting-started-and-concepts
  // http://stackoverflow.com/questions/28479239/setting-onsubmit-in-react-js

  createNote(event) {
    event.preventDefault();
    console.log('print something');
    this.props.addNote(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <div id="inputbar">
        <form onSubmit={this.createNote} id="form">
          <input onChange={this.onInputChange} value={this.state.title} id="input" />
          <input type="submit" value="Create!" id="button" />
        </form>
      </div>
    );
  }

}

export default InputBar;
