import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './detail.scss';

const Detail = ({ countryDetails, isLoading }) => {
  const handleNumbers = (number) => (
    number.toString().replace(/(\d)(?=(\d{3})+\b)/g, '$1 ')
  );

  if (!isLoading) {
    return (
      <main className="detail">
        <div className="detail-button-container">
          <NavLink to="/" exact>
            <button type="button" className="detail-button">
              <i className="fas fa-long-arrow-alt-left" /><span>Back</span>
            </button>
          </NavLink>
        </div>
        <div className="detail-data">
          <img className="detail-data-flag" src={countryDetails[0].flag} alt="#" />
          <h2 className="detail-data-name">{countryDetails[0].name}</h2>
          <div className="detail-data-container">
            <div className="detail-data-single">
              <h3 className="detail-data-title">Native Name:</h3>
              <span className="detail-data-number">{countryDetails[0].nativeName}</span>
            </div>
            <div className="detail-data-single">
              <h3 className="detail-data-title">Population:</h3>
              <span className="detail-data-number">{handleNumbers(countryDetails[0].population)}</span>
            </div>
            <div className="detail-data-single">
              <h3 className="detail-data-title">Region:</h3>
              <span className="detail-data-number">{countryDetails[0].region}</span>
            </div>
            <div className="detail-data-single">
              <h3 className="detail-data-title">Sub Region:</h3>
              <span className="detail-data-number">{countryDetails[0].subregion}</span>
            </div>
            <div className="detail-data-single">
              <h3 className="detail-data-title">Capital:</h3>
              <span className="detail-data-number">{countryDetails[0].capital}</span>
            </div>
          </div>
          <div className="detail-data-container">
            <div className="detail-data-single">
              <h3 className="detail-data-title">Top Level Domain:</h3>
              <span className="detail-data-number">{countryDetails[0].topLevelDomain}</span>
            </div>
            <div className="detail-data-single">
              <h3 className="detail-data-title">Currencies:</h3>
              <span className="detail-data-number">{countryDetails[0].currencies[0].name}</span>
            </div>
            <div className="detail-data-single">
              <h3 className="detail-data-title">Languages:</h3>
              {countryDetails[0].languages.map((language) => (
                <span className="detail-data-number language" key={language}>{language.name}</span>
              ))}
            </div>
          </div>
          <div className="detail-data-container">
            <div className="detail-data-single third">
              <h3 className="detail-data-title">Border Countries:</h3>
              <ul className="detail-data-list">
                {countryDetails[0].borders.map((border) => (
                  <li className="detail-data-list-single" key={border}>
                    <button className="detail-data-list-single-button" type="button">{border}</button>
                  </li>
                ))}
                {/* <li className="detail-data-list-single">
                  <button className="detail-data-list-single-button" type="button">France</button>
                </li>
                <li className="detail-data-list-single">
                  <button className="detail-data-list-single-button" type="button">France</button>
                </li>
                <li className="detail-data-list-single">
                  <button className="detail-data-list-single-button" type="button">France</button>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
  return ('blabla');
};

Detail.propTypes = {
  countryDetails: PropTypes.array.isRequired,
};

export default Detail;
