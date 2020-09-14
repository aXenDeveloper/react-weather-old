import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Weather from './Weather';
//import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Route exact path='/' component={Weather} />
          <Route path='/:id' component={Weather} />
        </BrowserRouter>
      </>
    )
  }
}