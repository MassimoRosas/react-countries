import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ handleClick }) => (
  <header className="header">
    <h1 className="header-title">Where in the world?</h1>
    <button
      className="header-button"
      type="button"
      onClick={() => handleClick()}
    >
      <i className="far fa-moon header-logo" />Dark Mode
    </button>
  </header>
);

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Header;
