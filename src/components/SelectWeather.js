import React from 'react';

import CloudSVG from '../svg/cloud/cloudSVG';
import SunSVG from '../svg/sunSVG';
import MoonSVG from '../svg/moonSVG';

export const selectWeather = (id, icon) => {

    const thunder = {
        200: <CloudSVG getThunder getRain />,
        201: <CloudSVG getThunder getRain getCloud={2} />,
        202: <CloudSVG getThunder getRain getCloud={3} />,
        210: <CloudSVG getThunder />,
        211: <CloudSVG getThunder getCloud={2} />,
        212: <CloudSVG getThunder getCloud={3} />
    }

    const rain = {
        '502d': <CloudSVG getRain getCloud={3} getTime={'day'} />,
        '502n': <CloudSVG getRain getCloud={3} getTime={'night'} />,
        520: <CloudSVG getRain />,
        521: <CloudSVG getRain getCloud={2} />,
        522: <CloudSVG getRain getCloud={3} />
    }

    const cloud = {
        802: <CloudSVG />,
        803: <CloudSVG getCloud={2} />,
        804: <CloudSVG getCloud={3} />
    }

    const weather = {
        // Group 2xx: Thunderstorm
        // thunderstorm with light rain
        '200 11d': thunder[200],
        '200 11n': thunder[200],
        // thunderstorm with rain
        '201 11d': thunder[201],
        '201 11n': thunder[201],
        // thunderstorm with heavy rain
        '202 11d': thunder[202],
        '202 11n': thunder[202],
        // light thunderstorm
        '210 11d': thunder[210],
        '210 11n': thunder[210],
        // thunderstorm
        '211 11d': thunder[211],
        '211 11n': thunder[211],
        // heavy thunderstorm
        '212 11d': thunder[212],
        '212 11n': thunder[212],
        // 	ragged thunderstorm
        '221 11d': thunder[212],
        '221 11n': thunder[212],
        // 	thunderstorm with light drizzle
        '230 11d': <CloudSVG getThunder getRain getTime={'day'} />,
        '230 11n': <CloudSVG getThunder getRain getTime={'night'} />,
        // 	thunderstorm with drizzle
        '231 11d': <CloudSVG getThunder getRain getCloud={2} getTime={'day'} />,
        '231 11n': <CloudSVG getThunder getRain getCloud={2} getTime={'night'} />,
        // 	thunderstorm with heavy drizzle
        '232 11d': <CloudSVG getThunder getRain getCloud={3} getTime={'day'} />,
        '232 11n': <CloudSVG getThunder getRain getCloud={3} getTime={'night'} />,

        // Group 3xx: Drizzle


        // Group 5xx: Rain
        // light rain
        '500 10d': <CloudSVG getRain getTime={'day'} />,
        '500 10n': <CloudSVG getRain getTime={'night'} />,
        // moderate rain
        '501 10d': <CloudSVG getRain getCloud={2} getTime={'day'} />,
        '501 10n': <CloudSVG getRain getCloud={2} getTime={'night'} />,
        // heavy intensity rain
        '502 10d': rain['502d'],
        '502 10n': rain['502n'],
        // very heavy rain
        '503 10d': rain['502d'],
        '503 10n': rain['502n'],
        // extreme rain
        '504 10d': rain['502d'],
        '504 10n': rain['502n'],
        // freezing rain

        // light intensity shower rain
        '520 10d': rain[520],
        '520 10n': rain[520],
        // shower rain
        '521 10d': rain[521],
        '521 10n': rain[521],
        // heavy intensity shower rain
        '522 10d': rain[522],
        '522 10n': rain[522],
        // heavy intensity shower rain
        '531 10d': rain[522],
        '531 10n': rain[522],

        // Group 6xx: Snow
        '600 13d': <CloudSVG getSnow getThunder getRain getTime={'day'} />,

        // Group 7xx: Atmosphere

        // Group 800: Clear
        // clear sky
        '800 01d': <SunSVG />,
        '800 01n': <MoonSVG />,

        // Group 80x: Clouds
        // few clouds: 11-25%
        '801 02d': <CloudSVG getTime={'day'} />,
        '801 02n': <CloudSVG getTime={'night'} />,
        // scattered clouds: 25-50%
        '802 03d': cloud[802],
        '802 03n': cloud[802],
        // broken clouds: 51-84%
        '803 04d': cloud[803],
        '803 04n': cloud[803],
        // overcast clouds: 85-100%
        '804 04d': cloud[804],
        '804 04n': cloud[804]
    }

    return weather[`${id} ${icon}`];
}