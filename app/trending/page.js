'use client';

import MediaList from '@/components/Media/MediaList';
import Pagination from '@/components/Pagination/Pagination';
import { endpoints } from '@/services/api';
import React, { useEffect, useState } from 'react';

function TrendingPage() {

    // Movies list
    const [mediaList, setMediaList] = useState([]);

    // ## Pages State
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [trendTime, setTrendTime] = useState('day');
    const [trendType, setTrendType] = useState('all');

    useEffect(() => {
        const getMediaData = async () => {
            try {
                // API BASIC
                let apiLink = `${endpoints.BASE_URL}`;

                // ** Handle API requests **
                apiLink += `${endpoints.TRENDING}/${trendType}/${trendTime}?&page=${currentPage}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;

                const res = await fetch(apiLink);
                const data = await res.json();

                // ## Set movies list
                const mediaList = data.results;
                setMediaList(mediaList);

                // ## Set total pages
                const totalPages = data.total_pages;
                setTotalPages(totalPages);
            } catch (err) {
                console.log(err);
            }
        };

        // Trigger Function
        getMediaData();
    }, [currentPage, trendTime, trendType]);

    const handleTrendTime = (e) => {
        const value = e.target.value;
        setTrendTime(value);
    };

    const handleTrendType = (e) => {
        const value = e.target.value;
        setTrendType(value);
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
        <div className='trending-page'>
            <main>
                <div className='container mx-auto py-10 space-y-10'>
                    {/* ## Top Bar ## */}
                    <div className='top-bar mb-10 flex items-center justify-center gap-5'>
                        {/* Filter By Time */}
                        <div className='filter-time w-full'>
                            <p className='mb-2 font-medium'>Filter By Time</p>

                            <select onChange={handleTrendTime} className='text-black w-full p-2 focus:outline-none rounded-md cursor-pointer'>
                                <option value={'day'}>Day</option>
                                <option value={'week'}>Week</option>
                            </select>
                        </div>
                        {/* Filter By Media Type */}
                        <div className='filter-type w-full'>
                            <p className='mb-2 font-medium'>Filter By Type</p>

                            <select onChange={handleTrendType} className='text-black w-full p-2 focus:outline-none rounded-md cursor-pointer'>
                                <option value={'all'}>All</option>
                                <option value={'movie'}>Movies</option>
                                <option value={'tv'}>Tv</option>
                            </select>
                        </div>
                    </div>
                    {/* ## Media List ## */}
                    <MediaList mediaList={mediaList} />
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

export default TrendingPage;