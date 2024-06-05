'use client';

import React, { useEffect, useState } from 'react';
import SliderLanding from '../Sliders/SliderLanding';
import { endpoints } from '@/services/api';

function Landing() {

    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
        const getSliderData = async () => {
            try {
                // API BASIC
                let apiLink = `${endpoints.BASE_URL}${endpoints.TRENDING}/all/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;

                const res = await fetch(apiLink);
                const data = await res.json();

                // ## Set slider list
                const sliderList = data.results;
                setSliderList(sliderList);

            } catch (err) {
                console.log(err);
            }
        };

        // Trigger Function
        getSliderData();
    }, []);

    return (
        <div className='landing h-[80vh]'>
            <SliderLanding sliderList={sliderList} />
        </div>
    )
}

export default Landing;