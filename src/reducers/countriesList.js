import {
  GET_ALL_COUNTRIES,
} from 'src/actions/countriesList';

import {
  GET_FILTERED_COUNTRIES,
  CHANGE_REGION,
} from 'src/actions/filterCountries';

const initialState = {
  countries: [],
  region: '',
};

const countriesListReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
      };
    case GET_FILTERED_COUNTRIES:
      return {
        ...state,
        countries: action.filteredCountries,
      };
    case CHANGE_REGION:
      return {
        ...state,
        region: action.region,
      };
    default: return state;
  }
};
export default countriesListReducer;
