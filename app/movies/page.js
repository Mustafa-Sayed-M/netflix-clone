'use client';

import React, { useEffect, useRef, useState } from 'react';
import MediaList from '@/components/Media/MediaList';
import TopBarFilter from '@/components/TopBarFilter';
import { endpoints } from '@/services/api';
import { handleChangeInputSearch, handleChangeStar, handleChangeYear } from '@/utils/handlers';
import Pagination from '@/components/Pagination/Pagination';

function MoviesPage() {

    // Movies list
    const [moviesList, setMoviesList] = useState([]);

    // Search State
    const [searchValue, setSearchValue] = useState('');

    // Star State
    const [starValue, setStarValue] = useState(1);

    // Year State
    const [yearValue, setYearValue] = useState(null);

    // ## Pages State
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const getMoviesData = async () => {
            try {
                // API BASIC
                let apiLink = `${endpoints.BASE_URL}`;

                // Handle API requests
                if (searchValue) {
                    apiLink += `${endpoints.SEARCH}${endpoints.MOVIES}?year=${yearValue}&page=${currentPage}&query=${searchValue}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
                } else {
                    apiLink += `${endpoints.DISCOVER}${endpoints.MOVIES}?vote_average.gte=${starValue}&vote_average.lte=${10}&year=${yearValue}&page=${currentPage}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
                }

                const res = await fetch(apiLink);
                const data = await res.json();

                // ## Set movies list
                const moviesList = data.results;
                setMoviesList(moviesList);

                // ## Set total pages
                const totalPages = data.total_pages;
                setTotalPages(totalPages);
            } catch (err) {
                console.log(err);
            }
        };

        // Trigger Function
        getMoviesData();
    }, [currentPage, searchValue, yearValue, starValue]);

    // ## Input Search Element
    const inputSearchElementRef = useRef();

    // ## Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputSearchElementRef.current.value;
        setSearchValue(value);
    };

    // ## Function to scroll to top after loading movies page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        scrollToTop();
    }, [currentPage]);

    // ## Prev Page Handler
    const handlePrevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // ## Next Page Handler
    const handleNextPage = () => {
        if (currentPage !== totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='movies-page'>
            <main>
                <div className='container mx-auto py-10 space-y-10'>
                    {/* ## Top Bar ## */}
                    <TopBarFilter
                        handlers={{
                            handleSubmit,
                            handleChangeInputSearch: (e) => handleChangeInputSearch(e, setSearchValue),
                            handleChangeYear: (e) => handleChangeYear(e, setYearValue),
                            handleChangeStar: (e) => handleChangeStar(e, setStarValue),
                        }}
                        inputSearchElementRef={inputSearchElementRef}
                        findYour={'Movie'}
                    />
                    {/* ## Media List ## */}
                    <MediaList mediaList={moviesList} />
                    {/* Pagination */}
                    <Pagination
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                </div>
            </main>
        </div>
    )
}

export default MoviesPage;