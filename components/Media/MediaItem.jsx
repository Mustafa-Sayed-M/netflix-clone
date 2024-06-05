'use client'

import { endpoints } from '@/services/api';
import Link from 'next/link';
import React from 'react';
import Rating from '../Atoms/Rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MediaPoster from './MediaPoster';

function MediaItem({ item }) {

    const { id, name, title, poster_path, vote_average, release_date, first_air_date } = item;

    return (
        <div className='media-item relative'>
            <Link href={`/${title ? "movie" : "series"}/${id}`} className='block mb-3 hover:scale-105 hover:-translate-y-2 transition duration-300 ease-out'>
                <MediaPoster poster_path={poster_path} />
            </Link>
            <h1 className='text-sm md:text-lg font-medium line-clamp-1 mb-3'>{name || title}</h1>
            <div className='item-foot flex items-center justify-between'>
                <p className='text-sm text-gray-300'>{(first_air_date || release_date)?.slice(0, 4)}</p>
                {
                    vote_average > 0 &&
                    <Rating rate={vote_average} />
                }
            </div>
        </div>
    )
}

export default MediaItem;