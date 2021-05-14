import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Country from './Country';
import './countrieslist.scss';

const CountriesList = ({ loadCountries, allCountries }) => {
  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <div className="countrieslist">
      {allCountries.length
      && (allCountries.map((country) => (
        <Country
          key={country.name}
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      )))}
    </div>
  );
};

CountriesList.propTypes = {
  loadCountries: PropTypes.func.isRequired,
  allCountries: PropTypes.array,
};

CountriesList.defaultProps = {
  allCountries: [],
};

export default CountriesList;
