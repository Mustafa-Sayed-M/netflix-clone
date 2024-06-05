'use client';

import HeadTitle from '@/components/Atoms/HeadTitle';
import ListOfGenres from '@/components/ListOfGenres';
import Rating from '@/components/Atoms/Rating';
import SliderImages from '@/components/Sliders/SliderImages';
import SliderMedia from '@/components/Sliders/SliderMedia';
import { endpoints } from '@/services/api';
import { getMediaImages, getMediaInfo, getMediaSimilar } from '@/utils/apiRequests';
import { handleRuntime } from '@/utils/handlers';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function MoviePage({ params }) {

    // Movie Id
    const { movieId } = params;

    // Movies Information
    const [movieInfo, setMovieInfo] = useState({
        backdrop_path: '',
        status: '',
        homepage: '',
        tagline: '',
        original_language: '',
        overview: '',
        release_date: '',
        title: '',
        original_title: '',
        imdb_id: '',
        vote_average: 0,
        runtime: 0,
        budget: 0,
        popularity: 0,
        revenue: 0,
        spoken_languages: [],
        production_countries: [],
        production_companies: [],
        genres: [],
    });

    // Movies Images
    const [moviesImages, setMoviesImages] = useState({
        id: 0,
        backdrops: [],
        logos: [],
        poster: []
    });

    // Movies Similar
    const [moviesSimilar, setMoviesSimilar] = useState({
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0,
    });

    // Effect Hook
    useEffect(() => {
        // Function to get movie data from tmdb api
        const getMovieData = async () => {
            try {
                setMovieInfo(await getMediaInfo("MOVIES", movieId));
                setMoviesImages(await getMediaImages("MOVIES", movieId));
                setMoviesSimilar(await getMediaSimilar("MOVIES", movieId));
            } catch (err) {
                console.log(err);
            }
        }

        // Trigger The Function
        getMovieData();
    }, [movieId]);

    return (
        <div className='movie-page'>
            {/* Backdrop Image */}
            <div className='backdrop-image h-[80vh] relative'>
                <LazyLoadImage
                    src={`${endpoints.IMAGE}${endpoints.BACKDROP}${movieInfo.backdrop_path}`}
                    alt={movieInfo.original_title}
                    className='w-full h-full object-cover'
                />
                <div className='overlay bg-black/50 absolute top-0 start-0 w-full h-full'>
                    <div className='container mx-auto h-full flex items-center justify-center'>
                        <div className='movie-info text-center'>
                            <h1 className='mb-1 font-semibold text-xl sm:text-2xl md:text-4xl'>{movieInfo.title}</h1>
                            {
                                movieInfo.tagline &&
                                <p className='text-gray-300 text-lg'>{movieInfo.tagline}</p>
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
                    <p className='font-medium leading-7 text-gray-300'>{movieInfo.overview}</p>
                </div>
                {/* More Details */}
                <div className='more-details mb-10'>
                    {/* Head Title */}
                    <HeadTitle textContent={'More Details'} />
                    {/* List of Movie Information */}
                    <ul className='list-of-info space-y-4'>
                        {/* ## Language ## */}
                        {
                            movieInfo.original_language &&
                            <li>
                                <span>Language: </span>
                                <span className='capitalize'>{movieInfo.original_language} </span>
                            </li>
                        }
                        {/* ## Release Date ## */}
                        {
                            movieInfo.release_date &&
                            <li>
                                <span>Release Date: </span>
                                <span>{movieInfo.release_date} </span>
                            </li>
                        }
                        {/* ## Rating ## */}
                        {
                            movieInfo.vote_average &&
                            <li className='flex items-center gap-2 flex-wrap'>
                                <span>Rating: </span>
                                <Rating rate={movieInfo.vote_average} />
                            </li>
                        }
                        {/* ## Revenue ## */}
                        {
                            movieInfo.revenue &&
                            <li>
                                <span>Revenue: </span>
                                <span>{movieInfo.revenue}$</span>
                            </li>
                        }
                        {/* ## Budget ## */}
                        {
                            movieInfo.budget &&
                            <li>
                                <span>Budget: </span>
                                <span>{movieInfo.budget}$</span>
                            </li>
                        }
                        {/* ## Popularity ## */}
                        {
                            movieInfo.popularity &&
                            <li>
                                <span>Popularity: </span>
                                <span>{movieInfo.popularity}</span>
                            </li>
                        }
                        {/* ## Runtime ## */}
                        {
                            movieInfo.runtime &&
                            <li>
                                <span>Runtime: </span>
                                <span>{handleRuntime(movieInfo.runtime)} </span>
                            </li>
                        }
                        {/* ## Genres or Type ##s */}
                        {
                            movieInfo.genres.length > 0 &&
                            <li className='flex md:items-center gap-2 flex-col md:flex-row'>
                                <span>Type: </span>
                                <ListOfGenres listGenres={movieInfo.genres} />
                            </li>
                        }
                    </ul>
                </div>
                {/* Movie Images */}
                {
                    moviesImages.backdrops.length > 0 &&
                    <div className='movie-images mb-10'>
                        {/* Head Title */}
                        <HeadTitle textContent={`Images ( ${moviesImages.backdrops.length} )`} />
                        <SliderImages sliderList={moviesImages.backdrops} />
                    </div>
                }
                {/* Movie Similar */}
                {
                    moviesSimilar.results.length > 0 &&
                    <div className='movie-similar'>
                        {/* Head Title */}
                        <HeadTitle textContent={`Similar ( ${moviesSimilar.results.length} )`} />
                        <SliderMedia sliderList={moviesSimilar.results} />
                    </div>
                }
            </div>
        </div>
    )
}

export default MoviePage;