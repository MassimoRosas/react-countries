import React from 'react';

import Country from './Country';
import './countrieslist.scss';

const CountriesList = () => (
  <div className="countrieslist">
    <Country />
    <Country />
    <Country />
  </div>
);

export default CountriesList;
