import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingView = () => (
    <div className="loading">
        <FontAwesomeIcon icon={faSpinner} spin />
    </div>
);

export default LoadingView;