import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers/index';
import allCountriesMiddleware from 'src/middlewares/allCountriesMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    allCountriesMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
