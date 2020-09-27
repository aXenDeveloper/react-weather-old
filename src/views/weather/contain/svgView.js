import React from 'react';
import { APIContext } from '../../../context';
import CloudSVG from '../../../svg/cloud/cloudSVG';
import SunSVG from '../../../svg/sunSVG';
import MoonSVG from '../../../svg/moonSVG';

const selectWeather = {
    '01d': <SunSVG />,
    '01n': <MoonSVG />,
    '02d': <CloudSVG onTime='day' />,
    '02n': <CloudSVG onTime='night' />,
    '03d': <CloudSVG />,
    '03n': <CloudSVG />,

    '10d': <CloudSVG onRain onTime='day' />,
}

const svgView = () => (
    <APIContext.Consumer>
        {({ weatherIcon }) => (
            <div className="weatherImg">
                <div className="weatherImg:animation">
                    {selectWeather[weatherIcon]}
                </div>
            </div>
        )}
    </APIContext.Consumer>
)

export default svgView;