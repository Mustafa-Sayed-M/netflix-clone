'use client';

import Link from 'next/link';
import React from 'react';
import { useParams } from 'next/navigation';
import Rating from '../Atoms/Rating';
import MediaPoster from '../Media/MediaPoster';

function SeasonItem({ item }) {

    const { seriesId } = useParams();

    const { id, name, season_number, episode_count, poster_path, vote_average, air_date, overview } = item;

    return (
        <div className='season-item'>
            <Link href={`/series/${seriesId}/season/${season_number}`} className='block mb-3 hover:scale-105 hover:-translate-y-2 transition duration-300 ease-out'>
                <MediaPoster poster_path={poster_path} />
            </Link>
            <h1 className='text-sm md:text-lg font-medium line-clamp-1 mb-3'>{name}</h1>
            <div className='item-foot flex items-center justify-between'>
                <p className='text-sm text-gray-300'>{air_date?.slice(0, 4)}</p>
                {
                    vote_average > 0 &&
                    <Rating rate={vote_average} />
                }
            </div>
        </div>
    )
}

export default SeasonItem;