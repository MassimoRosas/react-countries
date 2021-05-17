import React from 'react';
import PropTypes from 'prop-types';

import './country.scss';

const Country = ({
  flag,
  name,
  population,
  region,
  capital,
}) => {
  const handleNumbers = (number) => (
    number.toString().replace(/(\d)(?=(\d{3})+\b)/g, '$1 ')
  );

  return (
    <div className="country-container">
      <img className="country-flag" src={flag} alt="#" />
      <div className="country-data">
        <h2 className="country-data-name">{name}</h2>
        <div className="country-data-single">
          <h3 className="country-data-title">Population: </h3>
          <span className="country-data-number">{handleNumbers(population)}</span>
        </div>
        <div className="country-data-single">
          <h3 className="country-data-title">Region: </h3>
          <span className="country-data-number">{region}</span>
        </div>
        <div className="country-data-single">
          <h3 className="country-data-title">Capital: </h3>
          <span className="country-data-number">{capital}</span>
        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default Country;
