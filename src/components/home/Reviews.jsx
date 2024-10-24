import Icon from '../common/Icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';
import { REVIEWS_DATA } from '../common/Helper';
import PrimaryHeading from '../common/PrimaryHeading';

const Reviews = () => {
    return (
        <div className='lg:py-24 md:py-20 sm:py-16 py-14 overflow-hidden relative max-w-[1920px] mx-auto'>
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center lg:items-end w-full">
                    <div className="flex flex-col max-w-[399px] w-full">
                        <p className='font-lato font-medium text-xl text-off-black flex items-center w-fit mx-auto md:mx-0 gap-4'>
                            Reviews <span className='bg-off-black flex h-0.5 w-10 sm:w-[73px] mt-1.5'></span>
                        </p>
                        <PrimaryHeading className='text-deep-blue mt-2 text-center md:text-left' text="What our customers are saying" />
                    </div>
                    <div className="flex gap-6 w-full justify-center md:mt-9 mt-4 pt-0.5 lg:w-fit">
                        <Icon className='cursor-pointer prevButton transition-slow hover:scale-95' iconName='leftArrowIcon' />
                        <Icon className='cursor-pointer nextButton transition-slow hover:scale-95' iconName='rightArrowIcon' />
                    </div>
                </div>
            </div>
            <div className="lg:mt-14 mt-8 !ml-4 lg:!ml-5 xl:!ml-[calc((100vw-1110px)/2)] custom-ml !mr-0">
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={15}
                    navigation={{
                        prevEl: '.prevButton',
                        nextEl: '.nextButton',
                    }}
                    loop={true}
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
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2.8,
                            spaceBetween: 30,
                        },
                        1536: {
                            slidesPerView: 3.8,
                        },
                    }}
                >
                    {REVIEWS_DATA.map((items, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative min-h-[393px] w-full bg-deep-blue overflow-hidden flex justify-center px-4 pb-9 pt-12">
                                <div className="max-w-[365px] w-full flex flex-col justify-between">
                                    <p className='font-lato font-normal text-base leading-custom-sm text-white xl:pr-2'>{items.text}</p>
                                    <div className="flex gap-4">
                                        <img src={items.img} alt={items.img} className='w-14 h-14' />
                                        <div className="flex flex-col">
                                            <p className='font-lato text-white font-bold text-lg'>{items.title}</p>
                                            <p className='font-lato text-white font-normal text-base leading-custom-sm mt-1'>{items.data}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    )
}

export default Reviews