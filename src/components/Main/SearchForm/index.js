import React from 'react';

import './searchform.scss';

const SearchForm = () => (
  <form action="" method="get" className="searchform">
    <i className="fas fa-search searchform-icon" />
    <input className="searchform-input" type="text" name="country" id="country" placeholder="Search for a country..." />
  </form>
);

export default SearchForm;
