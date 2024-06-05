'use client';

import { endpoints } from '@/services/api';
import Link from 'next/link';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rating from '../Atoms/Rating';
import { handleRuntime } from '@/utils/handlers';
import { useParams } from 'next/navigation';
import MediaPoster from '../Media/MediaPoster';

function EpisodeItem({ episodeItem }) {

    const { seriesId, seasonNumber } = useParams();

    const { episode_number, still_path, vote_average, runtime, name, air_date } = episodeItem;

    return (
        <div className='episode-item'>
            <Link
                className="block mb-3 transition hover:scale-110 hover:rotate-2 ease-out"
                href={`/series/${seriesId}/season/${seasonNumber}/episode/${episode_number}`}
            >
                <MediaPoster poster_path={still_path} />
            </Link>
            <div className='episode-info'>
                {/* Episode Runtime */}
                <h1 className='mb-3'>Runtime: ( {handleRuntime(runtime)} )</h1>
                {/* Episode Foot */}
                <div className='episode-foot flex items-center justify-between'>
                    <p className='text-gray-300'>{air_date?.slice(0, 4)}</p>
                    <Rating rate={vote_average} />
                </div>
            </div>
        </div>
    )
}

export default EpisodeItem;