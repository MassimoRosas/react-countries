import { combineReducers } from 'redux';
import countriesListReducer from './countriesList';

const rootReducer = combineReducers({
  countriesList: countriesListReducer,
});

export default rootReducer;
