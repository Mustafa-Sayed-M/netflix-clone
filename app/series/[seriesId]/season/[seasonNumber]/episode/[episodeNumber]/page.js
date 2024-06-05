'use client';

import React from 'react';

function EpisodePage({ params }) {

    const { episodeNumber } = params;

    return (
        <div className='episode-page h-screen flex items-center justify-center'>
            <p className='text-2xl font-medium'>Coming Soon 🚶‍♂️</p>
        </div>
    )
}

export default EpisodePage;