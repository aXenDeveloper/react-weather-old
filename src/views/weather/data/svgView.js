import React from 'react';
import { APIContext } from '../../../context';
import { selectWeather } from '../../../components/SelectWeather/SelectWeather';

const Svg = () => (
    <APIContext.Consumer>
        {({ weatherID, weatherIcon }) => (
            <div className="weatherImg">
                <div className="weatherImg:animation">
                    {selectWeather()}
                </div>
            </div>
        )}
    </APIContext.Consumer>
)

export default Svg;