import React from 'react';
import { APIContext } from '../../../context';

const dataView = () => (
    <APIContext.Consumer>
        {() => (
            <div className="container">
                <div className="data_block">
                    <div className="data_block:temp">
                        test test test test test test test test test test test test test test test test test test test test test test test test
                    </div>

                    <div className="data_block:wind">
                        test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test
                    </div>

                    <div className="data_block:temp">
                        test test test test test test test test test test test test test test test test test test test test test test test test
                    </div>

                    <div className="data_block:wind">
                        test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test
                    </div>
                </div>
            </div>
        )}
    </APIContext.Consumer>
);

export default dataView;