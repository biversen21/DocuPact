import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Home from '../components/Home';
import {renderDevTools} from '../utils/devTools';
import { Router, Route, Link } from 'react-router';
var HashHistory = require('react-router/lib/HashHistory').default

const store = configureStore();

export default React.createClass({
  render() {
    return (
      <div>

        {/* <Home /> is your app entry point */}
        <Provider store={store}>
          {() => <Router history={new HashHistory}>
              <Route path="/" component={Home} />
          </Router> }
        </Provider>

        {/* only renders when running in DEV mode */
          renderDevTools(store)
        }
      </div>
    );
  }
});
