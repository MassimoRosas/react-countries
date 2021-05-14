import {
  GET_ALL_COUNTRIES,
} from 'src/actions/countriesList';

import {
  GET_FILTERED_COUNTRIES,
  CHANGE_REGION,
  HANDLE_CHANGE,
} from 'src/actions/filterCountries';

const initialState = {
  countries: [],
  region: '',
  inputSearch: '',
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
    case HANDLE_CHANGE:
      return {
        ...state,
        inputSearch: action.search,
      };
    default: return state;
  }
};
export default countriesListReducer;
