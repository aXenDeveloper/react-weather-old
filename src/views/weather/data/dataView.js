import React from 'react';
import { APIContext } from '../../../context';

const dataView = () => (
    <APIContext.Consumer>
        {({ coord_lat }) => (
            <div className="container">
                <div>
                    test {coord_lat}
                </div>
            </div>
        )}
    </APIContext.Consumer>
);

export default dataView;