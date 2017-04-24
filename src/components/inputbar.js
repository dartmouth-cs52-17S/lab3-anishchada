import React, { Component } from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ searchterm: event.target.value });
    // this.props.onSearchChange(event.target.value);
    console.log(this.state.searchterm);
  }

  // https://scotch.io/tutorials/learning-react-getting-started-and-concepts
  // http://stackoverflow.com/questions/28479239/setting-onsubmit-in-react-js

  createNote(event) {
    event.preventDefault();
    console.log('print something');
  }

  render() {
    return (
      <div id="inputbar">
        <form onSubmit={this.createNote}>
          <input onChange={this.onInputChange} value={this.state.title} />
          <input type="submit" value="Create!" />
        </form>
      </div>
    );
  }

}

export default InputBar;
