import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Navigator from '../Navigator/Navigator';
import StatusPage from '../StatusPage/StatusPage';
import LibraryPage from '../LibraryPage/LibraryPage';
import QueuePage from '../QueuePage/QueuePage';
import styles from './App.css';

function App({ store }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route
            path="/"
            exact
            component={(() => <Redirect to="/status" />)}
          />
          <Navigator>
            <Link to="/status">Status</Link>
            <Link to="/library">Library</Link>
            <Link to="/queue">Queue</Link>
          </Navigator>
          <div className={styles.container}>
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
