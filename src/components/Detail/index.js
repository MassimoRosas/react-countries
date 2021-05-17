import React from 'react';
import { NavLink } from 'react-router-dom';

import flag from '../../assets/flag-example.svg';
import './detail.scss';

const Detail = () => (
  <main className="detail">
    <div className="detail-button-container">
      <NavLink to="/" exact>
        <button type="button" className="detail-button">
          <i className="fas fa-long-arrow-alt-left" /><span>Back</span>
        </button>
      </NavLink>
    </div>
    <div className="detail-data">
      <img className="detail-data-flag" src={flag} alt="#" />
      <h2 className="detail-data-name">Belgium</h2>
      <div className="detail-data-container">
        <div className="detail-data-single">
          <h3 className="detail-data-title">Native Name:</h3>
          <span className="detail-data-number">België</span>
        </div>
        <div className="detail-data-single">
          <h3 className="detail-data-title">Population:</h3>
          <span className="detail-data-number">België</span>
        </div>
        <div className="detail-data-single">
          <h3 className="detail-data-title">Region:</h3>
          <span className="detail-data-number">België</span>
        </div>
        <div className="detail-data-single">
          <h3 className="detail-data-title">Sub Region:</h3>
          <span className="detail-data-number">België</span>
        </div>
        <div className="detail-data-single">
          <h3 className="detail-data-title">Capital:</h3>
          <span className="detail-data-number">België</span>
        </div>
      </div>
      <div className="detail-data-container">
        <div className="detail-data-single">
          <h3 className="detail-data-title">Top Level Domain:</h3>
          <span className="detail-data-number">België</span>
        </div>
        <div className="detail-data-single">
          <h3 className="detail-data-title">Currencies:</h3>
          <span className="detail-data-number">België</span>
        </div>
        <div className="detail-data-single">
          <h3 className="detail-data-title">Languages:</h3>
          <span className="detail-data-number">België</span>
        </div>
      </div>
      <div className="detail-data-container">
        <div className="detail-data-single third">
          <h3 className="detail-data-title">Border Countries:</h3>
          <ul className="detail-data-list">
            <li className="detail-data-list-single">
              <button className="detail-data-list-single-button" type="button">France</button>
            </li>
            <li className="detail-data-list-single">
              <button className="detail-data-list-single-button" type="button">France</button>
            </li>
            <li className="detail-data-list-single">
              <button className="detail-data-list-single-button" type="button">France</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
);

export default Detail;
