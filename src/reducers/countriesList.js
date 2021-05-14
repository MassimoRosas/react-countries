import {
  GET_ALL_COUNTRIES,
} from 'src/actions/countriesList';

const initialState = {
  allCountries: [],
};

const countriesListReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.allCountries,
      };
    default: return state;
  }
};
export default countriesListReducer;
