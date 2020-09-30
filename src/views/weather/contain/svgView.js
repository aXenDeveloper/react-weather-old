import React from 'react';
import { APIContext } from '../../../context';
import { selectWeather } from '../../../components/SelectWeather';

const svgView = () => (
    <APIContext.Consumer>
        {({ weatherID, weatherIcon }) => (
            <div className="weatherImg">
                <div className="weatherImg:animation">
                    {selectWeather(weatherID, weatherIcon)}
                </div>
            </div>
        )}
    </APIContext.Consumer>
)

export default svgView;

// {selectWeather(weatherID, weatherIcon)}