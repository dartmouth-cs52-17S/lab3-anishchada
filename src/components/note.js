import React, { Component } from 'react';
import Draggable from 'react-draggable';
import TextareaAutosize from 'react-textarea-autosize';

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
    this.props.Update(this.props.id, { text: event.target.value });
  }

  onDrag(event, ui) {
    // event.preventDefault();
    console.log(ui.x);
    this.props.Update(this.props.id, { x: ui.x, y: ui.y });
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
    this.setState({ isEditing: !this.state.isEditing });
    this.props.Update(this.props.id, { text: this.state.text });
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
        <div className="body1">
          <div ><a href="" onClick={this.callUpdate}><i className="fa fa-check fa-1x" /></a></div>
          <TextareaAutosize className="textbox" onChange={this.onChange}
            style={{ boxSizing: 'border-box', minHeight: '200', minWidth: '200' }}
            minRows={3}
            maxRows={6}
            defaultValue={this.props.note.text}
          />
        </div>);
    } else {
      return (
        <div>

          <div className="body3">
            <div className="notetext">{this.props.note.text}</div>
          </div>
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
            <div className="notebar">
              <div className="notetitle">
                {this.props.note.title}
              </div>
              <div className="iconbar">
                <div>
                  <div className="notebar flex-item"><a href="" onClick={this.changeToggle}><i className="fa fa-pencil-square-o fa-1x" /></a></div>
                </div>
                <div><a className="flex-item" href="" onClick={this.onDeleteClick}><i className="fa fa-trash fa-1x" /></a></div>
                <div className="note-mover flex-item"><a ><i className="fa fa-arrows fa-1x" /></a></div>
              </div>
            </div>
            <div className="body">{this.renderSomeSection()}</div>

          </div>
        </Draggable>
      </div>
    );
  }

}

export default Note;
