import React from 'react';
import PropTypes from 'prop-types';

import './filterform.scss';

const FilterForm = ({ filterCountries, changeRegion }) => (
  <form className="filterform" action="" method="get">
    <select
      className="filterform-select"
      name="region"
      id="region"
      onChange={(event) => {
        changeRegion(event.target.value);
        filterCountries();
      }}
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  </form>
);

FilterForm.propTypes = {
  filterCountries: PropTypes.func.isRequired,
  changeRegion: PropTypes.func.isRequired,
};

export default FilterForm;
