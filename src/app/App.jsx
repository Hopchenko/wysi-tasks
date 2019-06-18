import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';
import store from './store';
import Tasks from './views/tasks/Tasks';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path="/" exact component={Tasks} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
