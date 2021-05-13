import React from 'react';

import SearchForm from './SearchForm';
import FilterForm from './FilterForm';
import CountriesList from './CountriesList';

import './main.scss';

const Main = () => (
  <main className="main">
    <SearchForm />
    <FilterForm />
    <CountriesList />
  </main>
);

export default Main;
