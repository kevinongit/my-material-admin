import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { MuiThemeProvider } from 'material-ui/styles';
import MovieBrowser from './containers/MovieBrowser/MovieBrowser';

class MovieApp extends Component {
  render() {
    return (
        <div>
            <h1> Movie</h1>
            <MovieBrowser/>
        </div>
    );
  }
}

export default MovieApp;
