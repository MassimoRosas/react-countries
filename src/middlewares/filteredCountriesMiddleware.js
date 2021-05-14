import axios from 'axios';
import {
  FILTER_COUNTRIES,
  getFilteredCountries,
} from 'src/actions/filterCountries';

const filteredCountriesMiddleware = (store) => (next) => (action) => {
  const apiUrl = 'https://restcountries.eu/rest/v2';

  switch (action.type) {
    case FILTER_COUNTRIES: {
      const { region } = store.getState().countriesList;
      console.log(region);

      axios.get(`${apiUrl}/region/${region}`)
        .then((response) => {
          console.log(response);
          store.dispatch(getFilteredCountries(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default filteredCountriesMiddleware;
