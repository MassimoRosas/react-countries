export const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const SAVE_COUNTRY = 'SAVE_COUNTRY';
export const LOAD_COUNTRY_DETAILS = 'LOAD_COUNTRY_DETAILS';
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';

// Middleware actions
export const loadCountries = () => ({
  type: LOAD_COUNTRIES,
});

export const getAllCountries = (countries) => ({
  type: GET_ALL_COUNTRIES,
  countries,
});

export const saveCountry = (country) => ({
  type: SAVE_COUNTRY,
  country,
});

export const loadCountryDetails = () => ({
  type: LOAD_COUNTRY_DETAILS,
});

export const getCountryDetails = (countryDetails) => ({
  type: GET_COUNTRY_DETAILS,
  countryDetails,
});
