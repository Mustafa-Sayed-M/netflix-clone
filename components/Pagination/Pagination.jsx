'use client';

import React from 'react';

function Pagination({ handlePrevPage, handleNextPage, currentPage, totalPages }) {
    return (
        <div className='pagination flex items-center justify-center gap-5'>
            <button
                type='button'
                onClick={handlePrevPage}
                className={`py-2 px-4 bg-white text-primary-color sm:hover:bg-primary-color sm:hover:text-white transition rounded-md ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
            >
                Prev Page
            </button>
            <div className='page-number w-10 h-10 leading-10 text-center bg-white text-primary-color rounded-full'>{currentPage}</div>
            <button
                type='button'
                onClick={handleNextPage}
                className={`py-2 px-4 bg-white text-primary-color sm:hover:bg-primary-color sm:hover:text-white transition rounded-md ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
            >
                Next Page
            </button>
        </div>
    )
}

export default Pagination;