import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Country from './Country';
import './countrieslist.scss';

const CountriesList = ({
  loadCountries,
  countries,
  saveCountry,
  countryName,
  loadCountryDetails,
}) => {
  useEffect(() => {
    if (!countries.length) {
      loadCountries();
    }
  }, []);

  return (
    <div className="countrieslist">
      {countries.length
      && (countries.map((country) => (
        <NavLink
          to={`/detail/${country.name}`}
          key={country.name}
          onClick={() => {
            saveCountry(country.name);
            loadCountryDetails();
          }}
        >
          <Country
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        </NavLink>
      )))}
    </div>
  );
};

CountriesList.propTypes = {
  loadCountries: PropTypes.func.isRequired,
  countries: PropTypes.array.isRequired,
  saveCountry: PropTypes.func.isRequired,
  countryName: PropTypes.string.isRequired,
  loadCountryDetails: PropTypes.func.isRequired,
};

// CountriesList.defaultProps = {
//   countries: [],
//   countryName: '',
// };

export default CountriesList;
