import React from 'react';

const SortBy = props => (
  <div className="container dropdown-section">
    <label className="dropdown-label" htmlFor="exampleFormControlSelect1">
      Sort by:
      {' '}
    </label>
    <select className="form-control dropdown-option" id="exampleFormControlSelect1">
      <option>Name</option>
      <option>Availability</option>
    </select>
  </div>
);

export default SortBy;
