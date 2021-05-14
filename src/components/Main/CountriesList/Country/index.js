import React from 'react';

import flag from '../../../../assets/flag-example.svg';

import './country.scss';

const Country = () => (
  <div className="country">
    <img className="country-flag" src={flag} alt="#" />
    <div className="country-data">
      <h2 className="country-data-name">Name</h2>
      <div className="country-data-single">
        <h3 className="country-data-title">Population: </h3>
        <span className="country-data-number">Number</span>
      </div>
      <div className="country-data-single">
        <h3 className="country-data-title">Region: </h3>
        <span className="country-data-number">Region</span>
      </div>
      <div className="country-data-single">
        <h3 className="country-data-title">Capital: </h3>
        <span className="country-data-number">Capital</span>
      </div>
    </div>
  </div>
);

export default Country;
