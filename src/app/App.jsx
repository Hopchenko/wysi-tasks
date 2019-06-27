import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';
import store from '../store/store';
import Header from '../components/Header/Header';
import { useAuth0 } from '../auth/authProvider';
import PrivateRoute from '../auth/PrivateRoute';
import Greeting from '../views/Greeting';
import Board from '../views/Board';
import Loading from '../components/Loading/Loading';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Greeting} />
            <PrivateRoute path="/board" component={Board} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
