import Icon from '../common/Icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';
import { SWIPER_DATA } from '../common/Helper';
import PrimaryHeading from '../common/PrimaryHeading';

const Reviews = () => {
    return (
        <div className='lg:py-24 md:py-20 sm:py-16 py-14 overflow-hidden relative max-w-[1920px] mx-auto'>
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center lg:items-end w-full">
                    <div className="flex flex-col max-w-[399px] w-full">
                        <p className='font-lato font-medium text-xl text-off-black flex items-center w-fit mx-auto lg:mx-0 gap-4'>
                            Introducing <span className='bg-off-black flex h-0.5 w-10 sm:w-[73px] mt-1.5'></span>
                        </p>
                        <PrimaryHeading className='text-deep-blue mt-2' text="What our customers are saying" />
                    </div>
                    <div className="flex gap-6 w-full justify-center md:mt-9 mt-4 pt-0.5 lg:w-fit">
                        <Icon className='cursor-pointer prevButton transition_slow hover:scale-95' iconName='leftArrowIcon' />
                        <Icon className='cursor-pointer nextButton transition_slow hover:scale-95' iconName='rightArrowIcon' />
                    </div>
                </div>
            </div>
            <div className="mt-14">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={{
                        prevEl: '.prevButton',
                        nextEl: '.nextButton',
                    }}
                    modules={[Keyboard, Scrollbar, Navigation]}
                    scrollbar={true}
                    className="mySwiper !pb-20"
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = '.prevButton';
                        swiper.params.navigation.nextEl = '.nextButton';
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
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
    )
}

export default Reviews