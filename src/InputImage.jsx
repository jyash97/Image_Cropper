import React from 'react';
import Dropzone from 'react-dropzone';

import './style.css';
import Notification from './Notification';
import ImageSettings from './ImageSettings';
import EditorPreview from './EditorPreview';
import CroppedPreview from './CroppedPreview';

class InputImage extends React.Component {
  constructor() {
    super();
    this.state = {
      accepted: [],
      error: false,
      message: '',
      print:false
    };
    this.handleEditorPreview = this.handleEditorPreview.bind(this);
    this.handleSavedImage = this.handleSavedImage.bind(this);
  }

  handleDrop(acceptedFiles) {
    if (acceptedFiles[0].size <= 1000000) {
      this.setState({
        accepted: [...acceptedFiles],
        error: false
      });
    } else {
      this.setState({
        error: true,
        message: 'Your Image size is greater than 1 MB.'
      });
    }
  }

  handleEditorPreview(data){
    return <EditorPreview show={this.state.accepted.length} handleSavedImage={this.handleSavedImage} image={this.state.accepted[0].preview} dimensions={data} /> ;
  }

  handleSavedImage(url){
    this.setState({
      url,
      print:true
    });
  }

  render() {
    return (
      <React.Fragment>
        <Dropzone
          className="droparea"
          activeClassName="activearea"
          rejectClassName="rejectedarea"
          onClick={() => this.setState({ error: false })}
          accept="image/*"
          onDropAccepted={accepted => {
            this.handleDrop(accepted);
          }}
        >
          <p>Drop Your Files Here</p>
        </Dropzone>
        <Notification message={this.state.message} show={this.state.error} />
        {
          this.state.accepted.length ? (
            <ImageSettings handleEditorPreview={this.handleEditorPreview} />
          ):(
            null
          )
        }
        {
          this.state.print ? (
            <CroppedPreview imageUrl={this.state.url} />
          ):(
            null
          )
        }
      </React.Fragment>
    );
  }
}

export default InputImage;
