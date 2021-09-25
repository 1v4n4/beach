import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/filter.css';

const counties = ['All', 'Humboldt', 'Mendocino',
  'Sonoma', 'Marin', 'San Francisco', 'San Mateo', 'Santa Cruz', 'Monterey', 'San Luis Obispo', 'Santa Barbara', 'Ventura', 'Los Angeles', 'Orange', 'San Diego'];

const Filter = ({ setFilter }) => (
  <div className="filter-div">
    <select className="filter text-center" onChange={(e) => setFilter(e.target.value)}>
      <option className="text-center" label="CHOOSE COUNTY">CHOOSE COUNTY</option>
      {counties.map((county) => <option className="foptions" value={county} key={county}>{county}</option>)}
    </select>
  </div>
);

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
