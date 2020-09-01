import React from 'react';

const cloudScatteredView = props => {
    return (
        <div className='weather:rain'>
            <div className='cloud cloud-left'>
                {props.cloud}
            </div>
            <div className='cloud'>
                <div className='cloud:main'>
                    {props.cloud}
                    <div className='temp'>{props.temp}</div>
                </div>
            </div>
            <div className='cloud cloud-right'>
                {props.cloud}
            </div>
        </div>
    );
};

export default cloudScatteredView;