import { endpoints } from '@/services/api';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function MediaPoster({ poster_path }) {
    return (
        poster_path ?
            <LazyLoadImage
                effect='blur'
                alt={"Media Poster"}
                className='rounded-md w-auto'
                src={`${endpoints.IMAGE}${endpoints.POSTER}${poster_path}`}
            />
            :
            <div className='bg-slate-700 rounded-md p-2 h-full flex items-center justify-center'>No Poster</div>
    )
}

export default MediaPoster;