import React from 'react';
import { Rain } from './Weather';

const Content = props => {

    return (
        <div className='weather'>
            <Rain temp={props.temp} />
            <div>
                TEST
            </div>
        </div>
    )
}

export default Content;