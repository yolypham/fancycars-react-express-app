import React from 'react';

const SortBy = props => (
  <div className="container dropdown-section">
    <label className="dropdown-label" htmlFor="exampleFormControlSelect1">
      Sort by:
      {' '}
    </label>
    <select
      className="form-control dropdown-option"
      id="exampleFormControlSelect1"
      onChange={props.changed}
    >
      <option value="id">...</option>
      <option value="name">Name</option>
      <option value="availability">Availability</option>
    </select>
  </div>
);

export default SortBy;
