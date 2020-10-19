import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import WeatherPageView from '../views/weather/weatherPageView';
import HomePageView from '../views/home/homePageView';

const Root = () => (
  <BrowserRouter>
    <Route exact path='/' component={HomePageView} />
    <Route path='/:id' component={WeatherPageView} />
  </BrowserRouter>
)

export default Root;
