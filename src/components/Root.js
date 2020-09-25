import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RootView from '../views/rootView';

const Root = () => (
  <BrowserRouter>
    <Route exact path='/' component={RootView} />
    <Route path='/:id' component={RootView} />
  </BrowserRouter>
)

export default Root;
