import React from 'react';
import MediaItemSkeleton from './MediaItemSkeleton';

function MediaListSkeleton() {
    return (
        <div className='media-list-skeleton'>
            <div className='media-list-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
                <MediaItemSkeleton />
            </div>
        </div>
    )
}

export default MediaListSkeleton;