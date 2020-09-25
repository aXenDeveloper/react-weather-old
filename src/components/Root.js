import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RootViews from '../views/RootViews';

const Root = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={RootViews} />
      <Route path='/:id' component={RootViews} />
    </BrowserRouter>
  );
}

export default Root;
