'use client';

import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { endpoints } from '@/services/api';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function SliderImages({ sliderList }) {
    const [imagePreviewer, setImagePreviewer] = useState({
        file_path: null
    });

    const handleImagePreviewer = (image) => {
        setImagePreviewer(image);
    };

    const handleImagePreviewerClose = () => {
        setImagePreviewer({
            file_path: null
        });
    };

    return (
        <div className='slider-images h-full'>
            <div className={`fixed top-0 start-0 w-full h-screen flex items-center justify-center bg-black/50 backdrop-blur-md transition ${imagePreviewer.file_path ? "z-10 translate-y-0 opacity-100" : "z-[-10] translate-y-10 opacity-0"}`}>
                <div className='content md:w-3/4 p-3'>
                    <button
                        onClick={handleImagePreviewerClose}
                        type='button'
                        className='block ms-auto mb-4 text-3xl hover:text-primary-color transition'
                    >
                        <i className="fa-regular fa-circle-xmark"></i>
                    </button>
                    <LazyLoadImage
                        effect='blur'
                        src={`${endpoints.IMAGE}${endpoints.BACKDROP}${imagePreviewer.file_path}`}
                        alt='Image Preview'
                        className='rounded-md'
                    />
                </div>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                navigation
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                className='h-full mb-5'
            >
                {
                    (sliderList || []).map((sliderItem, idx) => {
                        const { file_path, vote_average } = sliderItem;

                        return ( // the select none class to avoid selecting the image when user click quickly on slider
                            <SwiperSlide key={idx} className='select-none cursor-pointer'>
                                <LazyLoadImage
                                    effect='blur'
                                    alt={vote_average}
                                    className='rounded-md'
                                    onClick={() => handleImagePreviewer(sliderItem)}
                                    src={`${endpoints.IMAGE}${endpoints.BACKDROP}${file_path}`}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default SliderImages;