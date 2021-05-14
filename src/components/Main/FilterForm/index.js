import React from 'react';

import './filterform.scss';

const FilterForm = () => (
  <form className="filterform" action="" method="get">
    <select className="filterform-select" name="region" id="region">
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  </form>
);

export default FilterForm;
