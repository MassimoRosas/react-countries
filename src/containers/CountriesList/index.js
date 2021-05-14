import { connect } from 'react-redux';
import CountriesList from 'src/components/Main/CountriesList';

import { loadCountries } from 'src/actions/countriesList';

// === mapStateToProps
const mapStateToProps = (state) => ({
  allCountries: state.countriesList.allCountries,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadCountries: () => {
    dispatch(loadCountries());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
