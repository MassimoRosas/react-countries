import { connect } from 'react-redux';
import CountriesList from 'src/components/Main/CountriesList';

import { loadCountries, saveCountry, loadCountryDetails } from 'src/actions/countriesList';

// === mapStateToProps
const mapStateToProps = (state) => ({
  countries: state.countriesList.countries,
  countryName: state.countriesList.country,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadCountries: () => {
    dispatch(loadCountries());
  },
  saveCountry: (country) => {
    dispatch(saveCountry(country));
  },
  loadCountryDetails: () => {
    dispatch(loadCountryDetails());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
