import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import './index.scss';
import App from './app/App';
import config from './authConfig';
import { Auth0Provider } from './auth/authProvider';

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
