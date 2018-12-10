import React from 'react';

const Select = props => (
  <select onChange={event => props.updateField(event.target.value)}>
    {props.options.map(option => <option value={option.value}>{option.label}</option>)}
  </select>
)

export default Select;