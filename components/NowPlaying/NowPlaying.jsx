'use client';

import { endpoints } from '@/services/api';
import React, { useEffect, useState } from 'react';
import HeadTitle from '../Atoms/HeadTitle';
import SliderMedia from '../Sliders/SliderMedia';

function NowPlaying() {

    // Media List
    const [mediaList, setMediaList] = useState([]);

    // Effect Hook
    useEffect(() => {
        // Function to get movie data from tmdb api
        const getData = async () => {
            try {
                const res = await fetch(`${endpoints.BASE_URL}${endpoints.MOVIES}${endpoints.NOW_PLAYING}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
                const data = await res.json();
                const mediaList = data.results;
                setMediaList(mediaList);
            } catch (err) {
                console.log(err);
            }
        }

        // Trigger The Function
        getData();
    }, []);

    return (
        <div className='now-playing'>
            <div className='container mx-auto py-10'>
                <HeadTitle textContent={'Now Playing'} icon={<i className="fa-regular fa-circle-play"></i>} />
                <SliderMedia sliderList={mediaList} />
            </div>
        </div>
    )
}

export default NowPlaying;