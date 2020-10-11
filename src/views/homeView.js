import React from 'react';
import i18n from 'i18next';

const homeVievs = () => {
    return (
        <div>
            <h1>{i18n.t('Welcome to React')}</h1>
        </div>
    )
};

export default homeVievs;