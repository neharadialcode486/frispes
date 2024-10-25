import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Heading from '../common/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Keyboard, Scrollbar, Pagination, Mousewheel } from 'swiper/modules';
import { OUR_FACILITIES_THUMNAIL_DATA_LIST, OUR_FACILITIES_DATA_LIST } from "../common/Helper";
const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

const OurFacilities = () => {

    const { tabName } = useParams();
    const [activeTab, setActiveTab] = useState(0);
    useEffect(() => {
        if (typeof tabName === 'string') {
            const tabIndex = OUR_FACILITIES_DATA_LIST.findIndex(tab => slugify(tab.description) === tabName);
            setActiveTab(tabIndex !== -1 ? tabIndex : 0);
        } else {
            setActiveTab(0);
        }
    }, [tabName]);
    const handleClick = (index, text) => {
        setActiveTab(index);
        window.history.pushState(null, '', `/${slugify(text)}`);
    };

    return (
        <section className='py-4' id='service'>
            <div className="container mt-12 lg:mt-20">
                <p className='font-lato font-medium text-xl lg:leading-custom-2xl text-off-black flex items-center w-fit mx-auto lg:mx-0 gap-4'>
                    Our Facilities <span className='bg-off-black flex h-0.5 w-10 sm:w-[73px] mt-1.5'></span>
                </p>
                <Heading className='max-w-[570px] text-center lg:text-left mx-auto lg:mx-0 w-full text-deep-blue mt-2'>All facilities are designed to meet all your needs</Heading>
                <div className="flex justify-between gap-5 lg:flex-row flex-col mt-5 sm:mt-8 lg:mt-12 pt-1">
                    <div className="lg:max-w-[347px] block w-full facilities">
                        <Swiper
                            slidesPerView={1.5}
                            spaceBetween={10}
                            loop={true}
                            mousewheel={true}
                            modules={[Keyboard, Scrollbar, Mousewheel, Pagination]}
                            scrollbar={true}
                            className="mySwiper lg:!pr-3.5 !pb-14 lg:!pb-0 lg:!pl-[50px] lg:!-ml-3.5 max-h-[360px]"
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
                            pagination={{
                                type: 'fraction',
                                renderFraction: (currentClass, totalClass) => {
                                    return `<span class="${currentClass}"></span><span> / </span><span class="${totalClass}"></span>`;
                                },
                                formatFractionCurrent: (number) => {
                                    return number < 10 ? `0${number}` : number;
                                },
                                formatFractionTotal: (number) => {
                                    return number < 10 ? `0${number}` : number;
                                },
                            }}
                        >
                            {OUR_FACILITIES_DATA_LIST.map((tab, index) => (
                                <SwiperSlide key={index}>
                                    <a href={`/${slugify(tab.description)}`}
                                        className={`font-lato text-xl font-medium w-full text-nowrap flex justify-center lg:justify-start py-3.5 px-5 md:p-6 h-full leading-6 ${activeTab === index ? "text-white bg-off-orange shadow-9xl" : "text-off-black"}`}
                                        onClick={(e) => { e.preventDefault(); handleClick(index, tab.description); }}>
                                        {tab.description}
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="max-w-[729px] w-full">
                        {OUR_FACILITIES_THUMNAIL_DATA_LIST[activeTab] && (
                            <img
                                src={OUR_FACILITIES_THUMNAIL_DATA_LIST[activeTab].image}
                                alt={OUR_FACILITIES_THUMNAIL_DATA_LIST[activeTab].image}
                                className='max-w-[729px] w-full h-full max-h-[208px] sm:max-h-[453px] object-cover'
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurFacilities;