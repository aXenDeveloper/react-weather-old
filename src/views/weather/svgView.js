import React from 'react';
import CloudSVG from './svg/cloud/cloudSVG';
import SunSVG from './svg/sunSVG';

const svgView = () => (
    <div className="weatherImg">
        <div className="weatherImg:animation">
            <CloudSVG onRain onThunder />
        </div>
    </div>
)

export default svgView;