import React from 'react';

const RangeInput = props => (
  <React.Fragment>
    <label htmlFor={props.name}>{props.name}</label>
    <input type="range" name={props.name} defaultValue={props.currentvalue} min={props.min} max={props.max} step={props.step} onChange={props.handleChange}/>
  </React.Fragment>
);

export default RangeInput;
