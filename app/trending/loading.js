import MediaListSkeleton from '@/components/Skeletons/MediaListSkeleton';
import React from 'react';

function loading() {
    return (
        <div className='loading'>
            <div className='container mx-auto loading-container py-10'>
                <MediaListSkeleton />
            </div>
        </div>
    )
}

export default loading;