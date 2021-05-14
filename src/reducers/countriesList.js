import {
  GET_ALL_COUNTRIES,
} from 'src/actions/countriesList';

import {
  GET_FILTERED_COUNTRIES,
  CHANGE_REGION,
} from 'src/actions/filterCountries';

const initialState = {
  allCountries: [],
  region: '',
};

const countriesListReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.allCountries,
      };
    case GET_FILTERED_COUNTRIES:
      return {
        ...state,
        allCountries: action.filteredCountries,
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
