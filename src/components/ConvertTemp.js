import React from 'react';
import { APIContext } from '../context';

const ConvertTemp = () => {
    const convertTemp = (temp, degrees) => {
        if (degrees === "C") {
            return parseFloat((temp - 273.15).toFixed(2));
        }

        return parseFloat(((temp - 273.15) * 1.8 + 32).toFixed(2));
    }

    return (
        <APIContext.Consumer>
            {({ temp }) => (
                <div className="temp">
                    {convertTemp(temp, "C")}&#176;C
                </div>
            )}
        </APIContext.Consumer>
    )
};

export default ConvertTemp;