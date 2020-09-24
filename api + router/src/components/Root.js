import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Weather from './API';

const Root = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Weather} />
      <Route path='/:id' component={Weather} />
    </BrowserRouter>
  );
}

export default Root;
