'use client';

import EpisodesList from '@/components/Episodes/EpisodesList';
import HeadTitle from '@/components/Atoms/HeadTitle';
import { endpoints } from '@/services/api';
import React, { useEffect, useState } from 'react';

function SeasonPage({ params }) {

    const { seriesId, seasonNumber } = params;

    // Seasons Data State
    const [seasonData, setSeasonsData] = useState({
        air_date: '',
        poster_path: '',
        overview: '',
        _id: '',
        name: '',
        id: 0,
        vote_average: 0,
        season_number: 0,
        episodes: [],
    });

    useEffect(() => {
        const getTvData = async () => {
            try {
                // API BASIC
                let apiLink = `${endpoints.BASE_URL}${endpoints.TV}/${seriesId}${endpoints.SEASONS}/${seasonNumber}?&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;

                const res = await fetch(apiLink);
                const data = await res.json();
                setSeasonsData(data);

            } catch (err) {
                console.log(err);
            }
        };

        // Trigger Function
        getTvData();
    }, [seriesId, seasonNumber]);

    return (
        <div className='season-page'>
            <main>
                <div className='container mx-auto py-10'>
                    <HeadTitle textContent={seasonData.name} />
                    <EpisodesList episodesList={seasonData.episodes} />
                </div>
            </main>
        </div>
    )
}

export default SeasonPage;