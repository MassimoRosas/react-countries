export const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';

// Middleware actions
export const loadCountries = () => ({
  type: LOAD_COUNTRIES,
});

export const getAllCountries = (countries) => ({
  type: GET_ALL_COUNTRIES,
  countries,
});
