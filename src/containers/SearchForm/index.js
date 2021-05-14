import { connect } from 'react-redux';
import SearchForm from 'src/components/Main/SearchForm';
import { handleChange, filterCountriesByName } from 'src/actions/filterCountries';

// === mapStateToProps
const mapStateToProps = (state) => ({
  inputSearch: state.countriesList.inputSearch,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  handleChange: (search) => {
    dispatch(handleChange(search));
  },
  filterCountriesByName: () => {
    dispatch(filterCountriesByName());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
