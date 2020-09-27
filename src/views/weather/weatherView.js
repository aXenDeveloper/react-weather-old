import React from 'react';
import SvgView from './contain/svgView';
import DataView from './contain/dataView';
import LoadingView from '../loadingView';

const weatherView = ({ loading }) => (
    <main>
        {loading ? (
            <LoadingView />
        ) : (
                <>
                    <SvgView />
                    <DataView />
                </>
            )}
    </main>
)

export default weatherView;