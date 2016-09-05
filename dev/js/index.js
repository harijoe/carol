import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import Layout from './components/Layout';
import UserList from './containers/user-list';
import UserDetail from './containers/user-detail';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ Layout }>
               <IndexRoute component={ App }></IndexRoute>
               <Route path="users" component={ UserList }></Route>
               <Route path="users/(:filter)" component={ UserDetail }></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
