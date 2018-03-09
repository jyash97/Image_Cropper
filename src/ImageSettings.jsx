import React from 'react';

import RangeInput from './RangeInput';

class ImageSettings extends React.Component{

  constructor(){
    super();
    this.state = {
      height: 100,
      width: 800,
      scale: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: parseInt(event.target.value, 10)
    });
  }

  render(){
    return(
      <React.Fragment>
        <fieldset>
          <legend>Image Settings</legend>
          <RangeInput name='width' min={100} max={800} step={100} currentvalue={this.state.width} handleChange={this.handleChange} />
          <RangeInput name='height' min={10} max={100} step={10} currentvalue={this.state.height} handleChange={this.handleChange} />
          <RangeInput name='scale' min={1} max={5} step={.5} currentvalue={this.state.scale} handleChange={this.handleChange} />
        </fieldset>
        {
          this.props.handleEditorPreview(this.state)
        }
      </React.Fragment>
    );
  }
}

export default ImageSettings;
