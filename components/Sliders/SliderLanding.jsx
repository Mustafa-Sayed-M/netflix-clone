'use client';

import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { endpoints } from '@/services/api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


function SliderLanding({ sliderList }) {
    return (
        <div className='landing-slider h-full'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className='h-full'
            >
                {
                    sliderList.map((item, idx) => {
                        const { id, backdrop_path, media_type, title, name, adult, release_date, first_air_date, vote_average, overview } = item;

                        return (
                            <SwiperSlide key={idx} className='relative'>
                                <div className='absolute top-0 start-0 w-full h-full'>
                                    <LazyLoadImage
                                        alt={name || title}
                                        className='w-full h-full object-cover'
                                        src={`${endpoints.IMAGE}${endpoints.BACKDROP}${backdrop_path}`}
                                    />
                                </div>
                                <div className='overlay bg-black/50 absolute w-full h-full top-0 start-0'></div>
                                <div className='container mx-auto relative z-10 h-full flex items-center'>
                                    <div className='media-info text-center md:text-start md:w-1/2'>
                                        {/* Title or Name */}
                                        <h1 className='font-semibold text-2xl mb-2'>{name || title}</h1>
                                        {/* Overview */}
                                        <p className='line-clamp-3 text-gray-300 mb-2'>{overview}</p>
                                        {/* List Info */}
                                        <ul className='flex items-center justify-center md:justify-start gap-2 mb-7'>
                                            <li className='text-gray-300'>
                                                {(release_date || first_air_date)?.slice(0, 4)}
                                            </li>
                                            <li>
                                                |
                                            </li>
                                            <li className='text-gray-300 capitalize'>
                                                {media_type === 'tv' ? "Series" : media_type}
                                            </li>
                                            {
                                                adult &&
                                                <li className='text-gray-300 border-2 border-gray-300 p-0.5 rounded-sm text-sm'>
                                                    +18
                                                </li>
                                            }
                                        </ul>
                                        {/* Link Details */}
                                        <Link
                                            href={`/${media_type === 'movie' ? `movie/${id}` : `series/${id}`}`}
                                            className='text-primary-color bg-white hover:bg-primary-color hover:text-white transition py-2 px-4 rounded-md'
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default SliderLanding;