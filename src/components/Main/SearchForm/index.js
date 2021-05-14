import React from 'react';
import PropTypes from 'prop-types';

import './searchform.scss';

const SearchForm = ({ handleChange, inputSearch, filterCountriesByName }) => (
  <form
    action=""
    method="get"
    className="searchform"
  >
    <i className="fas fa-search searchform-icon" />
    <input
      className="searchform-input"
      type="text"
      name="country"
      id="country"
      placeholder="Search for a country..."
      value={inputSearch}
      onChange={(event) => {
        handleChange(event.target.value);
        filterCountriesByName();
      }}
    />
  </form>
);

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  filterCountriesByName: PropTypes.func.isRequired,
};

export default SearchForm;
