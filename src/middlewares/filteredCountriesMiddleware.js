import axios from 'axios';
import {
  FILTER_COUNTRIES,
  getFilteredCountries,
} from 'src/actions/filterCountries';
import { getAllCountries } from 'src/actions/countriesList';

const filteredCountriesMiddleware = (store) => (next) => (action) => {
  const apiUrl = 'https://restcountries.eu/rest/v2';

  switch (action.type) {
    case FILTER_COUNTRIES: {
      const { region } = store.getState().countriesList;

      if (region) {
        axios.get(`${apiUrl}/region/${region}`)
          .then((response) => {
            store.dispatch(getFilteredCountries(response.data));
          })
          .catch((error) => {
            console.warn(error);
          });
      }
      else {
        axios.get(`${apiUrl}/all`)
          .then((response) => {
            console.log('reponse for loadCountries :', response);
            store.dispatch(getAllCountries(response.data));
          })
          .catch((error) => {
            console.warn(error);
          });
      }
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default filteredCountriesMiddleware;
