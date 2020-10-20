import React from 'react';
import { withTranslation } from 'react-i18next';
import ConvertTemp from '../../components/ConvertTemp';

const HomeView = ({ t }) => {
    return (
        <div className="container">
            <h1>{t('welcome_home')}</h1>
            <div className="test">
                <ConvertTemp />
            </div>
        </div>
    )
};

export default withTranslation()(HomeView);