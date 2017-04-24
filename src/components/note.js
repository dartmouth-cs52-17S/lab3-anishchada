import React, { Component } from 'react';
import Draggable from 'react-draggable';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
    this.onInputChange = this.onInputChange.bind(this);

    this.renderTitle = this.renderTitle.bind(this);
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(event.target.value);
  }

  renderTitle() {
    return (
      <div className="notetitle">
        {this.props.note.title}
      </div>
    );
  }

  renderText() {
    return (
      <div className="notetext">
        {this.props.note.text}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Draggable
          handle=".note-mover"
          grid={[25, 25]}
          defaultPosition={{ x: 20, y: 20 }}
          position={null}
          onStart={this.onStartDrag}
          onDrag={this.onDrag}
          onStop={this.onStopDrag}
        >
          <div className="note note-mover">
            {this.renderTitle()}
            {this.renderText()}
          </div>
        </Draggable>
      </div>
    );
  }

}

export default Note;
