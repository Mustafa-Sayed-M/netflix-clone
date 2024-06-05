import React from 'react'

function MediaItemSkeleton() {
    return (
        <div className='media-item-skeleton'>
            <div className='poster-skeleton bg-slate-700 animate-pulse h-80 rounded-md mb-3'></div>
            <div className='poster-skeleton bg-slate-700 animate-pulse w-48 h-4 rounded-md mb-3'></div>
            <div className='poster-skeleton bg-slate-700 animate-pulse w-36 h-4 rounded-md mb-3'></div>
            <div className='poster-skeleton bg-slate-700 animate-pulse w-20 h-4 rounded-md'></div>
        </div>
    )
}

export default MediaItemSkeleton;