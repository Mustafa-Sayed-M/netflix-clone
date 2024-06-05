'use client';

import React from 'react';

function TopBarFilter({ handlers, inputSearchElementRef, findYour }) {
    return (
        <div className='top-bar mb-7 flex flex-col lg:flex-row items-end justify-between gap-5'>
            {/* Filter */}
            <div className='filter flex flex-col sm:flex-row items-center gap-4 w-full lg:w-[450px]'>
                {/* Filter with year */}
                <div className='filter-year w-full'>
                    <p className='mb-2 font-medium'>Filter By Year</p>

                    {/* Select */}
                    <select
                        id={`filter-year-${findYour}`}
                        onChange={handlers.handleChangeYear}
                        className='text-black w-full p-2 focus:outline-none rounded-md cursor-pointer'
                    >
                        <option value={''}>No</option>
                        <option value={2024}>2024</option>
                        <option value={2023}>2023</option>
                        <option value={2022}>2022</option>
                        <option value={2021}>2021</option>
                        <option value={2020}>2020</option>
                        <option value={2019}>2019</option>
                        <option value={2018}>2018</option>
                        <option value={2017}>2017</option>
                        <option value={2016}>2016</option>
                        <option value={2015}>2015</option>
                        <option value={2014}>2014</option>
                        <option value={2013}>2013</option>
                        <option value={2012}>2012</option>
                        <option value={2011}>2011</option>
                        <option value={2010}>2010</option>
                    </select>
                </div>
                {/* Filter with Star */}
                <div className='filter-star w-full'>
                    <p className='mb-2 font-medium'>Filter By Star</p>
                    {/* Select */}
                    <select
                        id={`filter-star-${findYour}`}
                        onChange={handlers.handleChangeStar}
                        className='text-yellow-600 text-lg w-full p-2 focus:outline-none rounded-md cursor-pointer'
                    >
                        <option value={1}>1 - 10 &#9733; &#9734; &#9734; &#9734; &#9734;</option>
                        <option value={2}>2 - 10 &#9733; &#9733; &#9734; &#9734; &#9734;</option>
                        <option value={3}>3 - 10 &#9733; &#9733; &#9733; &#9734; &#9734;</option>
                        <option value={4}>4 - 10 &#9733; &#9733; &#9733; &#9733; &#9734;</option>
                        <option value={5}>5 - 10 &#9733; &#9733; &#9733; &#9733; &#9733;</option>
                        <option value={6}>6 - 10 &#9733; &#9733; &#9733; &#9733; &#9733;</option>
                        <option value={7}>7 - 10 &#9733; &#9733; &#9733; &#9733; &#9733;</option>
                        <option value={8}>8 - 10 &#9733; &#9733; &#9733; &#9733; &#9733;</option>
                        <option value={9}>9 - 10 &#9733; &#9733; &#9733; &#9733; &#9733;</option>
                    </select>
                </div>
            </div>
            {/* Form Search */}
            <form onSubmit={handlers.handleSubmit} className='flex items-end gap-3 w-full lg:w-[450px]'>
                {/* Input */}
                <div className='input-group w-full'>
                    <p className='mb-2 font-medium'>Find Your {findYour}</p>
                    <input
                        required
                        type='search'
                        id={`search-input-${findYour}`}
                        placeholder='Search...'
                        ref={inputSearchElementRef}
                        onChange={handlers.handleChangeInputSearch}
                        className='focus:outline-none py-2 px-4 rounded-md w-full text-black'
                    />
                </div>
                {/* Button Submit */}
                <button type='submit' className='py-2 px-4 bg-white rounded-md text-primary-color hover:bg-primary-color hover:text-white transition'>
                    Search
                </button>
            </form>
        </div>
    )
}

export default TopBarFilter;