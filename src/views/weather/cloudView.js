import React from 'react';

const cloudScatteredView = ({ temp, cloudType, rain = false, sun = false }) => {

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
                {sun ? (
                    <div className='sun sun:left'>
                        {sun}
                    </div>
                ): null}
                <div className='cloud:left'>
                    {cloudType}
                    {rain ? dropRain(5) : null}
                </div>

                <div className='cloud:center'>
                    {cloudType}
                    {rain ? dropRain(5) : null}
                    <div className='temp'>{temp}</div>
                </div>

                <div className='cloud:right'>
                    {cloudType}
                    {rain ? dropRain(5) : null}
                </div>
            </div>
        </div>
    );
};

export default cloudScatteredView;