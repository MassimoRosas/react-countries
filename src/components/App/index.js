// == Import npm
import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// == Import
import Header from '../Header';
import Main from '../Main';
import Detail from '../../containers/Detail';
import './styles.scss';

// == Composant
const App = () => {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light');

  function handleClick() {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
    else {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }

  return (
    <div className={`app ${theme}`}>
      <Header handleClick={handleClick} />

      <Route path="/" exact>
        <Main />
      </Route>

      <Route path="/detail/:countryName">
        <Detail />
      </Route>
    </div>
  );
};

// == Export
export default App;
