import axios from 'axios';

import {
  LOAD_COUNTRIES,
  getAllCountries,
} from 'src/actions/countriesList';

const allCountriesMiddleware = (store) => (next) => (action) => {
  const apiUrl = 'https://restcountries.eu/rest/v2';

  switch (action.type) {
    case LOAD_COUNTRIES: {
      axios.get(`${apiUrl}/all`)
        .then((response) => {
          console.log('reponse for loadCountries :', response);
          store.dispatch(getAllCountries(response.data));
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
export default allCountriesMiddleware;
