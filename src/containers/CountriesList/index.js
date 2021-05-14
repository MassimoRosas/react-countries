import { connect } from 'react-redux';
import CountriesList from 'src/components/Main/CountriesList';

import { loadCountries } from 'src/actions/countriesList';

// === mapStateToProps
const mapStateToProps = (state) => ({
  countries: state.countriesList.countries,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadCountries: () => {
    dispatch(loadCountries());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
