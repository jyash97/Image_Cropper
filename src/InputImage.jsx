import React from 'react';
import Dropzone from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';

import './style.css';

class InputImage extends React.Component {
  constructor() {
    super();
    this.state = {
      accepted: [],
      error: false,
      message: '',
      height: 100,
      width: 100,
      borderRadius: 0,
      scale: 1,
      rotate: 0
    };
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({
      [event.target.name]: parseInt(event.target.value, 10)
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
        {this.state.error ? (
          <div className="notification">
            <p>{this.state.message}</p>
          </div>
        ) : null}
        <fieldset>
          <legend>Image Settings</legend>
          <label htmlFor="width">Width</label>
          <input
            type="range"
            min={100}
            max={800}
            step={100}
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <label htmlFor="width">Height</label>
          <input
            type="range"
            min={10}
            max={100}
            step={10}
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <label htmlFor="width">Border Radius</label>
          <input
            type="range"
            max={50}
            step={10}
            name="borderRadius"
            value={this.state.borderRadius}
            onChange={this.handleChange}
          />
          <label htmlFor="width">Zoom</label>
          <input
            type="range"
            step={0.1}
            min={1}
            name="scale"
            value={this.state.scale}
            onChange={this.handleChange}
          />
        </fieldset>
        <div className="image-container">
          {this.state.accepted.length
            ? this.state.accepted.map((data, index) => (
                <AvatarEditor
                  key={index}
                  image={data.preview}
                  width={this.state.width}
                  height={this.state.height}
                  border={50}
                  borderRadius={this.state.borderRadius}
                  color={[255, 255, 255, 0.6]} // RGBA
                  scale={this.state.scale}
                  rotate={0}
                />
              ))
            : null}
        </div>
      </React.Fragment>
    );
  }
}

export default InputImage;
