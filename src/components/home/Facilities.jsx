import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Heading from '../common/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Keyboard, Scrollbar, Pagination, Mousewheel } from 'swiper/modules';
import { FACILITIES_DATA, TABS_DATA } from "../common/Helper";
const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

const Facilities = () => {
    const { tabName } = useParams();
    const [activeTab, setActiveTab] = useState(0);
    useEffect(() => {
        if (typeof tabName === 'string') {
            const tabIndex = TABS_DATA.findIndex(tab => slugify(tab.text) === tabName);
            setActiveTab(tabIndex !== -1 ? tabIndex : 0);
        } else {
            setActiveTab(0);
        }
    }, [tabName]);
    const handleClick = (idx, text) => {
        setActiveTab(idx);
        window.history.pushState(null, '', `/${slugify(text)}`);
    };

    return (
        <div className='py-4'>
            <div className="container mt-20">
                <p className='font-lato font-medium text-xl text-off-black flex items-center w-fit mx-auto lg:mx-0 gap-4'>
                    Our Facilities <span className='bg-off-black flex h-0.5 w-10 sm:w-[73px] mt-1.5'></span>
                </p>
                <Heading className='max-w-[570px] text-center lg:text-left mx-auto lg:mx-0 w-full text-deep-blue mt-2'>All facilities are designed to meet all your needs</Heading>
                <div className="flex justify-between gap-5 lg:flex-row flex-col mt-12 pt-1">
                    <div className="lg:max-w-[343px] block w-full facilities">
                        <Swiper
                            slidesPerView={1.5}
                            spaceBetween={10}
                            pagination={{ type: 'fraction' }}
                            loop={true}
                            mousewheel={true}
                            modules={[Keyboard, Scrollbar, Mousewheel, Pagination]}
                            scrollbar={true}
                            className="mySwiper !pb-12 lg:!pb-0 lg:!pl-[50px] lg:!-ml-3.5 max-h-[360px]"
                            breakpoints={{
                                640: {
                                    slidesPerView: 2.5,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    direction: 'vertical',
                                    spaceBetween: 0,
                                    slidesPerView: 5,
                                }
                            }}
                        >
                            {TABS_DATA.map((tab, idx) => (
                                <SwiperSlide key={idx}>
                                    <a href={`/${slugify(tab.text)}`}
                                        className={`font-lato text-xl w-full text-nowrap flex justify-center lg:justify-start p-6 h-full leading-6 ${activeTab === idx ? "text-white bg-off-orange" : "text-off-black"}`}
                                        onClick={(e) => { e.preventDefault(); handleClick(idx, tab.text); }}>
                                        {tab.text}
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="max-w-[729px] w-full">
                        {FACILITIES_DATA[activeTab] && (
                            <img
                                src={FACILITIES_DATA[activeTab].image}
                                alt={FACILITIES_DATA[activeTab].image}
                                className='max-w-[729px] w-full h-full max-h-[453px] object-cover'
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;