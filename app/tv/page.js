'use client';

import MediaList from '@/components/Media/MediaList';
import Pagination from '@/components/Pagination/Pagination';
import TopBarFilter from '@/components/TopBarFilter';
import { endpoints } from '@/services/api';
import { handleChangeInputSearch, handleChangeStar, handleChangeYear } from '@/utils/handlers';
import React, { useEffect, useRef, useState } from 'react';

function TvPage() {

    // Tv State
    const [tvList, setTvList] = useState([]);

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
        const getTvData = async () => {
            try {
                // API BASIC
                let apiLink = `${endpoints.BASE_URL}`;

                // Handle API requests
                if (searchValue) {
                    apiLink += `${endpoints.SEARCH}${endpoints.TV}?first_air_date_year=${yearValue}&query=${searchValue}&page=${currentPage}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
                } else {
                    apiLink += `${endpoints.DISCOVER}${endpoints.TV}?vote_average.gte=${starValue}&vote_average.lte=${10}&first_air_date_year=${yearValue}&page=${currentPage}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
                }

                const res = await fetch(apiLink);
                const data = await res.json();

                // ## Set tv list
                const tvList = data.results;
                setTvList(tvList);

                // ## Set total pages
                const totalPages = data.total_pages;
                setTotalPages(totalPages);
            } catch (err) {
                console.log(err);
            }
        };

        // Trigger Function
        getTvData();
    }, [currentPage, searchValue, yearValue, starValue]);


    // ## Input Search Element
    const inputSearchElementRef = useRef();

    // ## Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputSearchElementRef.current.value;
        if (value) {
            setSearchValue(value);
        } else {
            setSearchValue('');
        }
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
        <div className='tv-page'>
            <main>
                <div className='container mx-auto py-10'>
                    {/* ## Top Bar ## */}
                    <TopBarFilter
                        handlers={{
                            handleSubmit,
                            handleChangeInputSearch: (e) => handleChangeInputSearch(e, setSearchValue),
                            handleChangeYear: (e) => handleChangeYear(e, setYearValue),
                            handleChangeStar: (e) => handleChangeStar(e, setStarValue),
                        }}
                        inputSearchElementRef={inputSearchElementRef}
                        findYour={'Series'}
                    />
                    {/* Media List */}
                    <MediaList mediaList={tvList} />
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

export default TvPage;