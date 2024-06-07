'use client';

import { endpoints } from '@/services/api';
import React, { useEffect, useState } from 'react';

function EpisodePage({ params }) {

    const { seriesId, seasonNumber, episodeNumber } = params;

    const [episodeData, setEpisodeData] = useState({
        air_date: '',
        name: '',
        still_path: '',
        overview: '',
        id: 0,
        runtime: 0,
        season_number: 0,
        vote_average: 0,
        episode_number: 0,
        crew: [],
        guest_stars: [],
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`${endpoints.BASE_URL}${endpoints.TV}/${seriesId}${endpoints.SEASONS}/${seasonNumber}${endpoints.EPISODE}/${episodeNumber}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
                const data = await res.json();
                setEpisodeData(data);
            } catch (e) {
                console.log(err);
            }
        }
        getData();
    }, [episodeNumber, seasonNumber, seriesId]);

    return (
        <div className='episode-page h-screen flex items-center justify-center'>
            
        </div>
    )
}

export default EpisodePage;