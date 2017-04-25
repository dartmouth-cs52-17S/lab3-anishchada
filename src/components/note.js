import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Textarea from 'react-textarea-autosize';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchterm: '',
      isEditing: false,
    };

    this.renderTitle = this.renderTitle.bind(this);
    this.changeToggle = this.changeToggle.bind(this);
    this.renderSomeSection = this.renderSomeSection.bind(this);
    this.callUpdate = this.callUpdate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onDrag = this.onDrag.bind(this);
  }

  onChange(event) {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  }

  onDrag(event, ui) {
    event.preventDefault();
    this.props.Update(this.props.id, { x: ui.x });
    this.props.Update(this.props.id, { y: ui.y });
  }

  onDeleteClick(event) {
    event.preventDefault();
    this.props.Delete(this.props.id);
  }

  changeToggle(event) {
    event.preventDefault();
    console.log('I am editing now?');
    this.setState({ isEditing: !this.state.isEditing });
    // this.renderSomeSection();
  }

  callUpdate(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.props.Update(this.props.id, { text: this.state.text });
    this.setState({ isEditing: !this.state.isEditing });
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

  // https://github.com/andreypopp/react-textarea-autosize
  // https://andreypopp.github.io/react-textarea-autosize/
  // onChange={this.Update(this.props.note.id, { text: this.props.note.text })}

  renderSomeSection() {
    if (this.state.isEditing) {
      console.log('i am editing now');
      return (
        <div>
          <div><a href="" onClick={this.callUpdate}><i className="fa fa-check fa-3x" /></a></div>
          <Textarea onChange={this.onChange}
            style={{ boxSizing: 'border-box' }}
            minRows={3}
            maxRows={6}
            defaultValue="Just a single line..."
          />
        </div>);
    } else {
      return (
        <div>
          <div><a href="" onClick={this.changeToggle}><i className="fa fa-envelope-square fa-3x" /></a></div>
          {this.props.note.text}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Draggable
          handle=".note-mover"
          grid={[25, 25]}
          defaultPosition={{ x: 20, y: 20 }}
          position={{ x: this.props.note.x, y: this.props.note.y }}
          onStart={this.onStartDrag}
          onDrag={this.onDrag}
          onStop={this.onStopDrag}
        >
          <div className="note">
            <div><a href="" onClick={this.onDeleteClick}><i className="fa fa-trash fa-3x" /></a></div>
            <div className="note-mover"><a ><i className="fa fa-arrows fa-3x" /></a></div>
            <div>{this.props.note.title}</div>
            <div>{this.renderSomeSection()}</div>
          </div>
        </Draggable>
      </div>
    );
  }

}

export default Note;
