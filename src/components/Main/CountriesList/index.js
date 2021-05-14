import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Country from './Country';
import './countrieslist.scss';

const CountriesList = ({ loadCountries, countries }) => {
  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <div className="countrieslist">
      {countries.length
      && (countries.map((country) => (
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
  countries: PropTypes.array,
};

CountriesList.defaultProps = {
  countries: [],
};

export default CountriesList;
