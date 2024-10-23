import React from 'react'
import PrimaryHeading from '../common/PrimaryHeading'
import Icon from '../common/Icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { SWIPER_DATA } from '../common/Helper';

const Space = () => {
    return (
        <div className='py-24'>
            <div className="container mt-4 pt-0.5 pb-24">
                <div className="flex justify-between items-end">
                    <PrimaryHeading className='text-deep-blue mb-2' text='Our Spaces' />
                    <p className='font-medium font-lato text-lg text-light-gray max-w-[452px]'>Our space is designed to give you a different experience when working with your team or personally</p>
                    <div className="flex gap-6">
                        <Icon className='cursor-pointer customPrev transition_slow hover:scale-95' iconName='leftArrowIcon' />
                        <Icon className='cursor-pointer customNext transition_slow hover:scale-95' iconName='rightArrowIcon' />
                    </div>
                </div>
                <div className="mt-12 pt-1">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={{
                            prevEl: '.customPrev',
                            nextEl: '.customNext',
                        }}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        scrollbar={true}
                        className="mySwiper !pb-20"
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = '.customPrev';
                            swiper.params.navigation.nextEl = '.customNext';
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                    >
                        {SWIPER_DATA.map((items, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full group overflow-hidden">
                                    <img src={items.img} alt={items.img} className='w-full' />
                                    <p className='mt-6 text-center text-off-black font-lato font-bold text-xl leading-6'>{items.text}</p>
                                    <button className='bg-off-orange z-10 max-w-[255px] transition_slow w-full justify-end items-center flex h-[72px] gap-7 group-hover:gap-5 font-lato font-bold text-lg leading-5 text-white absolute -left-[183px] p-5 group-hover:left-0 group-hover:bottom-0 bottom-12'>Check avaibility <Icon className='-rotate-90 relative w-8 h-8 justify-center items-center' iconName='downArrowIcon' /></button>
                                    <div className="bg-deep-blue absolute top-0 left-0 group-hover:px-2 overflow-hidden w-0 h-0 group-hover:w-full group-hover:h-full group-hover:z-[1] transition_slow flex flex-col justify-center items-center">
                                        <p className='font-lora font-normal text-white text-center text-custom-sm leading-10'>{items.text}</p>
                                        <p className='mt-3.5 text-white text-center font-medium font-lato text-lg max-w-[253px]'>Comfortable space, Full speed wifi, Free coffe & Snack and many more</p>
                                        <Icon iconName='lineIcon' className='absolute top-4 right-4' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default Space