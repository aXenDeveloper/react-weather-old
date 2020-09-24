import React from 'react';
import WeatherCloudView from '../views/weather/cloudView';
import WeatherNoneView from '../views/weather/noneView';
import LoadingView from '../views/loadingView';
import SunView from '../views/weather/sunView';
import MoonView from '../views/weather/moonView';

const Content = props => {

    const cloud = el => {
        const cloudElement = `cloud_${el} SVG_cloud`;

        return (
            <svg className={cloudElement} xmlns="http://www.w3.org/2000/svg" viewBox="0 -87 463.83425 463">
                <path d="m375.835938 112.957031c-5.851563 0-11.691407.582031-17.425782 1.742188-4.324218-21.582031-18.304687-39.992188-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429688s-75.507812 73.105469-57.429687 122.898438c-43.621094 1.378906-78.078125 37.484375-77.4257815 81.121093.6562495 43.640626 36.1835935 78.691407 79.8281255 78.761719h296c48.597656 0 88-39.398437 88-88 0-48.601562-39.402344-88-88-88zm0 0" />
            </svg>
        );
    };

    const selectWeather = (icon, id) => {

    }

    const weather = {
        '01d': <SunView temp={props.temp} />,
        '01n': <MoonView temp={props.temp} />,

        '02d': <WeatherCloudView temp={props.temp} cloudType={cloud('normal')} timeOfDay={'day'} />,
        '02n': <WeatherCloudView temp={props.temp} cloudType={cloud('normal')} timeOfDay={'night'} />,

        '03d': <WeatherCloudView temp={props.temp} cloudType={cloud('gray')} />,
        '03n': <WeatherCloudView temp={props.temp} cloudType={cloud('gray')} />,

        '04d': <WeatherCloudView temp={props.temp} cloudType={cloud('dark')} />,
        '04n': <WeatherCloudView temp={props.temp} cloudType={cloud('dark')} />,

        '09d': <WeatherCloudView temp={props.temp} cloudType={cloud('dark')} rain={true} />,
        '09n': <WeatherCloudView temp={props.temp} cloudType={cloud('dark')} rain={true} />,

        '10d': <WeatherCloudView temp={props.temp} cloudType={cloud('gray')} rain={true} timeOfDay={'day'} />,
        '10n': <WeatherCloudView temp={props.temp} cloudType={cloud('gray')} rain={true} timeOfDay={'night'} />,

        '11d': <WeatherCloudView temp={props.temp} cloudType={cloud('gray')} rain={true} timeOfDay={'day'} thunder={true} />,
        '11n': <WeatherCloudView temp={props.temp} cloudType={cloud('gray')} rain={true} timeOfDay={'night'} thunder={true} />,
    }

    return (
        <div className='content'>
            <div className='weather'>
            {weather['11d']}
                {props.temp ? (props.loading ? <LoadingView /> : weather[props.icon]) : <WeatherNoneView />}
            </div>
            <div>
                TEST
            </div>
        </div>
    )
}

export default Content;