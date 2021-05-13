// == Import npm
import React, { useState } from 'react';

// == Import
import Header from '../Header';
import Main from '../Main';
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
      <Main />
    </div>
  );
};

// == Export
export default App;
