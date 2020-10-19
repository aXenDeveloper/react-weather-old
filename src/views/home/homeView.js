import React from 'react';
import { withTranslation } from 'react-i18next';

const HomeView = ({ t }) => {
    return (
        <div>
            <h1>{t('Welcome to React')}</h1>
            <div className="test"></div>
        </div>
    )
};

export default withTranslation()(HomeView);