import { connect } from 'react-redux';
import FilterForm from 'src/components/Main/FilterForm';

import { filterCountries, changeRegion } from 'src/actions/filterCountries';

// === mapStateToProps
const mapStateToProps = (state) => ({
  region: state.countriesList.region,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  filterCountries: () => {
    dispatch(filterCountries());
  },
  changeRegion: (region) => {
    dispatch(changeRegion(region));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
