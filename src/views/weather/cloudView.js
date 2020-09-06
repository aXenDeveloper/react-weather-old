import React from 'react';
import PropTypes from 'prop-types';

const cloudScatteredView = ({ temp, cloudType, rain, timeOfDay, thunder }) => {

    const timeOfDayClassSVG = `SVG_${timeOfDay}`;

    const dropRain = num => {
        const drops = [];

        for (let i = 0; i <= num; i++) {
            const cloudClass = `drop drop-${i}`;
            drops.push(<div key={`drop-${i}`} className={cloudClass}></div>);
        };

        return <div className='cloud_rain'>{drops}</div>;
    }

    return (
        <div className='weather_cloud'>
            <div className='cloud'>
                {(timeOfDay === 'day' || timeOfDay === 'night') && (
                    <div className='timeOfDay:left'>
                        <svg className={timeOfDayClassSVG} viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                                <path d="m376 240c0 75.109375-60.890625 136-136 136s-136-60.890625-136-136 60.890625-136 136-136 136 60.890625 136 136zm0 0" />
                                {timeOfDay === 'day' && (
                                    <>
                                    <path d="m240 480c-4.417969 0-8-3.582031-8-8v-64c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v64c0 4.417969-3.582031 8-8 8zm0 0" />
                                    <path d="m240 80c-4.417969 0-8-3.582031-8-8v-64c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v64c0 4.417969-3.582031 8-8 8zm0 0" />
                                    <path d="m120 120-48-48" /><path d="m120 128c-2.121094 0-4.15625-.84375-5.65625-2.34375l-48-48c-3.03125-3.140625-2.988281-8.128906.097656-11.214844 3.085938-3.085937 8.074219-3.128906 11.214844-.097656l48 48c2.285156 2.289062 2.972656 5.730469 1.734375 8.71875s-4.15625 4.9375-7.390625 4.9375zm0 0" />
                                    <path d="m408 408-48-48" /><path d="m408 416c-2.121094 0-4.15625-.84375-5.65625-2.34375l-48-48c-3.03125-3.140625-2.988281-8.128906.097656-11.214844 3.085938-3.085937 8.074219-3.128906 11.214844-.097656l48 48c2.285156 2.289062 2.972656 5.730469 1.734375 8.71875s-4.15625 4.9375-7.390625 4.9375zm0 0" />
                                    <path d="m360 120 48-48" /><path d="m360 128c-3.234375 0-6.152344-1.949219-7.390625-4.9375s-.550781-6.429688 1.734375-8.71875l48-48c3.140625-3.03125 8.128906-2.988281 11.214844.097656 3.085937 3.085938 3.128906 8.074219.097656 11.214844l-48 48c-1.5 1.5-3.535156 2.34375-5.65625 2.34375zm0 0" />
                                    <path d="m472 248h-64c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h64c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
                                    <path d="m72 248h-64c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h64c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
                                    <path d="m72 408 48-48" /><path d="m72 416c-3.234375 0-6.152344-1.949219-7.390625-4.9375s-.550781-6.429688 1.734375-8.71875l48-48c3.140625-3.03125 8.128906-2.988281 11.214844.097656 3.085937 3.085938 3.128906 8.074219.097656 11.214844l-48 48c-1.5 1.5-3.535156 2.34375-5.65625 2.34375zm0 0" />
                                    </>
                                )}
                        </svg>
                    </div>
                )}
                <div className='cloud:left'>
                    {cloudType}
                    {rain && dropRain(5)}
                </div>

                <div className='cloud:center'>
                    {cloudType}
                    {thunder && (
                        <svg className="SVG_thunder" xmlns="http://www.w3.org/2000/svg" viewBox="-48 0 448 448">
                            <path d="m256 0h-160l-96 224h160l-64 224 256-320h-160zm0 0" />
                        </svg>
                    )}
                    {rain && dropRain(5)}
                    <div className='temp'>{temp}&#176;C</div>
                </div>

                <div className='cloud:right'>
                    {cloudType}
                    {rain && dropRain(5)}
                </div>
            </div>
        </div>
    );
};


cloudScatteredView.propTypes = {
    temp: PropTypes.number.isRequired,
    cloudType: PropTypes.object.isRequired,
    rain: PropTypes.bool,
    timeOfDay: PropTypes.string,
    thunder: PropTypes.bool
};

cloudScatteredView.defaultProps = {
    rain: false,
    thunder: false
}

export default cloudScatteredView;