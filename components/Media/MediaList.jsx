import React from 'react';
import MediaItem from './MediaItem';

function MediaList({ mediaList }) {
    return (
        <div className='media-list'>
            <div className='media-list-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                {
                    mediaList.map((item, idx) => <MediaItem item={item} key={idx} />)
                }
            </div>
        </div>
    )
}

export default MediaList;