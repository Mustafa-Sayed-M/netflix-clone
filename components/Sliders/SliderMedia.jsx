'use client';

import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import MediaItem from '../Media/MediaItem';

function SliderMedia({ sliderList }) {
    return (
        <div className='slider-media h-full'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                navigation
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                }}
                className='h-full mb-5'
            >
                {
                    (sliderList || []).map((sliderItem, idx) => {
                        return ( // the select none class to avoid selecting the image when user click quickly on slider
                            <SwiperSlide key={idx} className='select-none'>
                                <MediaItem item={sliderItem} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default SliderMedia;