import React from 'react';

const dropRain = () => {
    const drops = [];

    for (let i = 0; i <= 5; i++) {
        drops.push(<div key={`drop:${i}`} className={`drop drop:${i}`}></div>);
    };

    return <div className='cloud:rain'>{drops}</div>;
}

export default dropRain;