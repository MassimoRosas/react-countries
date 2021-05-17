import { connect } from 'react-redux';
import Detail from 'src/components/Detail';

// === mapStateToProps
const mapStateToProps = (state) => ({
  countryDetails: state.countriesList.countryDetails,
  isLoading: state.countriesList.isLoading,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
