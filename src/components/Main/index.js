import React from 'react';

import SearchForm from './SearchForm';
import FilterForm from '../../containers/FilterForm';
import CountriesList from '../../containers/CountriesList';

import './main.scss';

const Main = () => (
  <main className="main">
    <div className="main-forms">
      <SearchForm />
      <FilterForm />
    </div>
    <CountriesList />
  </main>
);

export default Main;
