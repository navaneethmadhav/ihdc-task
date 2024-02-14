import React from 'react'
import '../Styles/FeatureSlider.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import interestRate from '../Assets/Images/img2.jpg'
import freePayments from '../Assets/Images/img3.jpg'
import discount from '../Assets/Images/img1.jpg'

const FeatureSlider = () => {
    return (
        <div className='feature-slider-wrapper'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slider-card-container">
                        <div className="slider-image-section">
                            <div className="slider-img-wrapper">
                                <img src={interestRate} alt="" />
                            </div>
                        </div>
                        <div className="slider-content-section">

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-card-container">
                        <div className="slider-image-section">
                            <div className="slider-img-wrapper">
                                <img src={freePayments} alt="" />
                            </div>
                        </div>
                        <div className="slider-content-section">

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-card-container">
                        <div className="slider-image-section">
                            <div className="slider-img-wrapper">
                                <img src={discount} alt="" />
                            </div>
                        </div>
                        <div className="slider-content-section">

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FeatureSlider