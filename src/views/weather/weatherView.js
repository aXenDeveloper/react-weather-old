import React from 'react';
import SvgView from './svgView';
import DataView from './dataView';
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