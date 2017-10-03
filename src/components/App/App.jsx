import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Navigator from '../Navigator/Navigator';
import StatusPage from '../StatusPage/StatusPage';
import LibraryPage from '../LibraryPage/LibraryPage';
import QueuePage from '../QueuePage/QueuePage';
import styles from './App.css';

const DEFAULT_ROUTE = '/status';

function getCurrentUrl() {
  const pathname = window.location.pathname;

  if (pathname === '/') {
    return DEFAULT_ROUTE;
  }

  return pathname;
}

function App({ store }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route
            path="/"
            exact
            component={(() => <Redirect to={DEFAULT_ROUTE} />)}
          />
          <Navigator
            getCurrentUrl={getCurrentUrl}
          />
          <div className={styles['container']}>
            <Switch>
              <Route path="/status" component={StatusPage} />
              <Route path="/library" component={LibraryPage} />
              <Route path="/queue" component={QueuePage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
