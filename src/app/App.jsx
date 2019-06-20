import React from 'react';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';
import store from './store';
import Routes from './Routes';

function App() {
  return (
    <Provider store={store}>
      <Link to="/">goals</Link>
      <Link to="/goal-statistic">goal-statistic</Link>
      <Link to="/map">map</Link>
      <Link to="/user">user</Link>

      <Routes />
    </Provider>
  );
}

export default App;
