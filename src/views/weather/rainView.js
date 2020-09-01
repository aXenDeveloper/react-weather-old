import React from 'react';

const weatherReinView = props => {

    const dropRain = num => {
        const drops = [];

        for (let i = 0; i <= num; i++) {
            const cloudClass = `drop drop-${i}`;
            drops.push(<div key={`drop-${i}`} className={cloudClass}></div>);
        };

        return <div className='cloudRain'>{drops}</div>;
    }

    return (
        <div className='weather:rain'>
            <div className='cloud cloud-left'>
                {props.cloud}
                {dropRain(5)}
            </div>
            <div className='cloud'>
                <div className='cloud:main'>
                    {props.cloud}
                    <div className='temp'>{props.temp}</div>
                </div>
                {dropRain(5)}
            </div>
            <div className='cloud cloud-right'>
                {props.cloud}
                {dropRain(5)}
            </div>
        </div>
    );
};

export default weatherReinView;