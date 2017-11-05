import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Navigator from '../Navigator/Navigator';
import StatusPageContainer from '../../containers/StatusPageContainer';
import LibraryPageContainer from '../../containers/LibraryPageContainer';
import QueuePageContainer from '../../containers/QueuePageContainer';
import styles from './App.css';

const DEFAULT_ROUTE = '/status';

class App extends Component {
  static getCurrentUrl() {
    const pathname = window.location.pathname;

    if (pathname === '/') {
      return DEFAULT_ROUTE;
    }

    return pathname;
  }

  static setupRefreshInterval(fn, interval) {
    fn();
    return setInterval(
      () => fn(),
      1000 * interval,
    );
  }

  componentDidMount() {
    this.refreshIntervals = [
      { fn: this.props.refreshStatus, interval: 5 },
      { fn: this.props.refreshQueue, interval: 5 },
      { fn: this.props.refreshLibrary, interval: 10 },
    ].map(ri => App.setupRefreshInterval(ri.fn, ri.interval));
  }

  componentWillUnmount() {
    this.refreshIntervals.forEach(ri => clearInterval(ri));
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div>
            <Route
              path="/"
              exact
              component={(() => <Redirect to={DEFAULT_ROUTE} />)}
            />
            <Navigator
              getCurrentUrl={App.getCurrentUrl}
            />
            <div className={styles['container']}>
              <Switch>
                <Route path="/status" component={StatusPageContainer} />
                <Route path="/library" component={LibraryPageContainer} />
                <Route path="/queue" component={QueuePageContainer} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  refreshStatus: PropTypes.func.isRequired,
  refreshLibrary: PropTypes.func.isRequired,
  refreshQueue: PropTypes.func.isRequired,
};

export default App;
