export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';
export const GET_FILTERED_COUNTRIES = 'GET_FILTERED_COUNTRIES';
export const CHANGE_REGION = 'CHANGE_REGION';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const FILTER_COUNTRIES_BY_NAME = 'FILTER_COUNTRIES_BY_NAME';

export const filterCountries = () => ({
  type: FILTER_COUNTRIES,
});

export const getFilteredCountries = (filteredCountries) => ({
  type: GET_FILTERED_COUNTRIES,
  filteredCountries,
});

export const changeRegion = (region) => ({
  type: CHANGE_REGION,
  region,
});

export const handleChange = (search) => ({
  type: HANDLE_CHANGE,
  search,
});

export const filterCountriesByName = () => ({
  type: FILTER_COUNTRIES_BY_NAME,
});
