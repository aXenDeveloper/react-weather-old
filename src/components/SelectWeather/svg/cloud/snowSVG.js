import React from 'react';

const dropSnow = () => {
    const drops = [];

    for (let i = 0; i <=7; i++) {
        drops.push(<i key={`drop:${i}`} className={`drop drop:${i} far fa-snowflake`}></i>);
    };

    return <div className='cloud:snow'>{drops}</div>;
}

export default dropSnow;