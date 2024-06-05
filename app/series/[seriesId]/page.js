'use client';

import HeadTitle from '@/components/Atoms/HeadTitle';
import ListOfGenres from '@/components/ListOfGenres';
import Rating from '@/components/Atoms/Rating';
import SliderImages from '@/components/Sliders/SliderImages';
import SliderMedia from '@/components/Sliders/SliderMedia';
import SliderSeasons from '@/components/Sliders/SliderSeasons';
import { endpoints } from '@/services/api';
import { getMediaImages, getMediaInfo, getMediaSimilar } from '@/utils/apiRequests';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function SeriesPage({ params }) {

    const { seriesId } = params;

    // Series Information
    const [seriesInfo, setSeriesInfo] = useState({
        backdrop_path: '',
        status: '',
        homepage: '',
        tagline: '',
        original_language: '',
        overview: '',
        first_air_date: '',
        title: '',
        original_name: '',
        imdb_id: '',
        vote_average: 0,
        runtime: 0,
        budget: 0,
        popularity: 0,
        revenue: 0,
        number_of_episodes: 0,
        number_of_seasons: 0,
        spoken_languages: [],
        production_countries: [],
        production_companies: [],
        genres: [],
        seasons: [],
        spoken_languages: [],
        networks: [],
        created_by: [],
    });

    console.log(seriesInfo);

    // Series Images
    const [seriesImages, setSeriesImages] = useState({
        id: 0,
        backdrops: [],
        logos: [],
        poster: []
    });

    // Series Similar
    const [seriesSimilar, setSeriesSimilar] = useState({
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0,
    });

    // Effect Hook
    useEffect(() => {
        // Function to get series data from tmdb api
        const getSeriesData = async () => {
            try {
                setSeriesInfo(await getMediaInfo("TV", seriesId));
                setSeriesImages(await getMediaImages("TV", seriesId));
                setSeriesSimilar(await getMediaSimilar("TV", seriesId));
            } catch (err) {
                console.log(err);
            }
        }

        // Trigger The Function
        getSeriesData();
    }, [seriesId]);

    return (
        <div className='series-page'>
            {/* Backdrop Image */}
            <div className='backdrop-image h-[80vh] relative'>
                <LazyLoadImage
                    src={`${endpoints.IMAGE}${endpoints.BACKDROP}${seriesInfo.backdrop_path}`}
                    alt={seriesInfo.original_title}
                    className='w-full h-full object-cover'
                />
                <div className='overlay bg-black/50 absolute top-0 start-0 w-full h-full'>
                    <div className='container mx-auto h-full flex items-center justify-center'>
                        <div className='movie-info text-center'>
                            <h1 className='mb-1 font-semibold text-xl sm:text-2xl md:text-4xl'>{seriesInfo.name}</h1>
                            {
                                seriesInfo.tagline &&
                                <p className='text-gray-300 text-lg'>{seriesInfo.tagline}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* Content Container */}
            <div className='container mx-auto py-10'>
                {/* Overview */}
                <div className='overview mb-10'>
                    {/* Head Title */}
                    <h2 className='mb-2 text-lg md:text-2xl'>Overview: </h2>
                    {/* Overview Content */}
                    <p className='font-medium leading-7 text-gray-300'>{seriesInfo.overview}</p>
                </div>
                {/* More Details */}
                <div className='more-details mb-10'>
                    {/* Head Title */}
                    <HeadTitle textContent={'More Details'} />
                    {/* List of Movie Information */}
                    <ul className='list-of-info space-y-4'>
                        {/* ## Language ## */}
                        {
                            seriesInfo.original_language &&
                            <li>
                                <span>Language: </span>
                                <span className='capitalize'>{seriesInfo.original_language}</span>
                            </li>
                        }
                        {/* ## Release Date ## */}
                        {
                            seriesInfo.first_air_date &&
                            <li>
                                <span>Release Date: </span>
                                <span>{seriesInfo.first_air_date} </span>
                            </li>
                        }
                        {/* ## Rating ## */}
                        {
                            seriesInfo.vote_average &&
                            <li className='flex items-center gap-2 flex-wrap'>
                                <span>Rating: </span>
                                <Rating rate={seriesInfo.vote_average} />
                            </li>
                        }
                        {/* ## Revenue ## */}
                        {
                            seriesInfo.revenue &&
                            <li>
                                <span>Revenue: </span>
                                <span>{seriesInfo.revenue}$</span>
                            </li>
                        }
                        {/* ## Budget ## */}
                        {
                            seriesInfo.budget &&
                            <li>
                                <span>Budget: </span>
                                <span>{seriesInfo.budget}$</span>
                            </li>
                        }
                        {/* ## Popularity ## */}
                        {
                            seriesInfo.popularity &&
                            <li>
                                <span>Popularity: </span>
                                <span>{seriesInfo.popularity}</span>
                            </li>
                        }
                        {/* ## Genres or Type ## */}
                        {
                            seriesInfo.genres.length > 0 &&
                            <li className='flex md:items-center gap-2 flex-col md:flex-row'>
                                <span>Type: </span>
                                <ListOfGenres listGenres={seriesInfo.genres} />
                            </li>
                        }
                    </ul>
                </div>
                {/* Series Images */}
                {
                    seriesImages.backdrops.length > 0 &&
                    <div className='movie-images mb-10'>
                        {/* Head Title */}
                        <HeadTitle textContent={`Images ( ${seriesImages.backdrops.length} )`} />
                        <SliderImages sliderList={seriesImages.backdrops} />
                    </div>
                }
                {/* Series Similar */}
                {
                    seriesSimilar.results.length > 0 &&
                    <div className='movie-similar'>
                        {/* Head Title */}
                        <HeadTitle textContent={`Similar ( ${seriesSimilar.results.length} )`} />
                        <SliderMedia sliderList={seriesSimilar.results} />
                    </div>
                }
                {/* Series Seasons */}
                {
                    seriesInfo.seasons.length > 0 &&
                    <div className='movie-similar'>
                        {/* Head Title */}
                        <HeadTitle textContent={`Seasons ( ${seriesInfo.seasons.length} )`} />
                        <SliderSeasons sliderList={seriesInfo.seasons} />
                    </div>
                }
            </div>
        </div>
    )
}

export default SeriesPage;