'use client';

import React, { useEffect, useState } from 'react';
import { endpoints } from '@/services/api';
import SliderMedia from '../Sliders/SliderMedia';

function MediaCollection() {

    const [activeMedia, setActiveMedia] = useState('movie');

    const [mediaList, setMediaList] = useState([]);

    useEffect(() => {
        const getMediaData = async () => {
            try {
                // API BASIC
                let apiLink = `${endpoints.BASE_URL}`;

                // Handle API requests
                if (activeMedia === "trending") {
                    apiLink += `/${activeMedia}/all/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
                } else {
                    apiLink += `${endpoints.DISCOVER}/${activeMedia}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
                }

                const res = await fetch(apiLink);
                const data = await res.json();

                // ## Set movies list
                const mediaList = data.results;
                setMediaList(mediaList);
            } catch (err) {
                console.log(err);
            }
        };

        // Trigger Function
        getMediaData();
    }, [activeMedia]);

    const handleActiveMediaChange = (e) => {
        const media = e.target.dataset.media;
        setActiveMedia(media);
    };

    return (
        <div className='media-collection py-10'>
            <main>
                <div className='container mx-auto'>
                    {/* Nav Collection */}
                    <nav className='nav-collection group mb-7 flex items-center flex-wrap' data-active-media={activeMedia}>
                        <button
                            type='button'
                            data-media="movie"
                            onClick={handleActiveMediaChange}
                            className='w-1/2 sm:w-1/3 text-center p-3 bg-black/20 group-data-[active-media="movie"]:bg-black/40 border-t border-gray-600 group-data-[active-media="movie"]:border-primary-color group-data-[active-media="movie"]:text-primary-color transition'
                        >
                            <i className="fa-solid fa-clapperboard fa-fw me-2"></i>
                            MOVIES
                        </button>
                        <button
                            type='button'
                            data-media="tv"
                            onClick={handleActiveMediaChange}
                            className='w-1/2 sm:w-1/3 text-center p-3 bg-black/20 group-data-[active-media="tv"]:bg-black/40 border-t border-gray-600 group-data-[active-media="tv"]:border-primary-color group-data-[active-media="tv"]:text-primary-color transition'
                        >
                            <i className="fa-solid fa-film fa-fw me-2"></i>
                            Tv
                        </button>
                        <button
                            type='button'
                            data-media="trending"
                            onClick={handleActiveMediaChange}
                            className='w-full sm:w-1/3 text-center p-3 bg-black/20 group-data-[active-media="trending"]:bg-black/40 border-t border-gray-600 group-data-[active-media="trending"]:border-primary-color group-data-[active-media="trending"]:text-primary-color transition'
                        >
                            <i className="fa-solid fa-arrow-trend-up fa-fw me-2"></i>
                            Trend Now
                        </button>
                    </nav>
                    {/* Media List */}
                    <div className='media-list'>
                        <SliderMedia sliderList={mediaList} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MediaCollection;