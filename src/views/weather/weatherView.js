import React from 'react';
import LoadingView from '../loadingView';
import SvgView from './data/svgView';
import DataView from './data/dataView';

const WeatherView = ({ state }) => {
    const { loading } = state;

    return (
        <>
            {loading ? <LoadingView /> : (
                <>
                    <SvgView />
                    <DataView />
                </>
            )}
        </>
    )
};

export default WeatherView;