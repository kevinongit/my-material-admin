import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './MovieApp';
import registerServiceWorker from './registerServiceWorker';
import {AppBar} from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles';

import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MovieDetail from './components/MovieDetail/MovieDetail'

ReactDOM.render(
    (
        <Provider store={store}>
          <MuiThemeProvider>
            <div>
            <AppBar title='TMDB' />
            <Router>
              <Switch>
                <Route exact path="/" component={App} />
                <Route path="/detail" component={MovieDetail} />
                </Switch>
            </Router>
            </div>
          </MuiThemeProvider>
        </Provider>
    ),
    document.getElementById('root'));
registerServiceWorker();
