import Icon from '../common/Icons'
import { GALLERY_DATA } from '../common/Helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import PrimaryHeading from '../common/PrimaryHeading';

const Gallery = () => {
    return (
        <div className='lg:py-24 md:py-20 sm:py-16 py-14 overflow-hidden relative max-w-[1920px] mx-auto'>
            <div className="container relative">
                <div className="lg:right-5 lg:absolute mx-auto lg:mx-0 flex flex-col items-center lg:items-start mb-7 md:mb-10 top-0 z-10 max-w-[496px] w-full">
                    <p className='font-lato font-medium text-xl text-off-black flex items-center w-fit mx-auto lg:mx-0 gap-4'>
                        Introducing <span className='bg-off-black flex h-0.5 w-10 sm:w-[73px] mt-1.5'></span>
                    </p>
                    <PrimaryHeading className='text-deep-blue mt-2' text="Immersive beautiful" />
                    <PrimaryHeading className='text-deep-blue' text="co-working space gallery" />
                    <div className="flex gap-6 w-full justify-center md:mt-9 mt-4 pt-0.5 lg:w-fit">
                        <Icon className='cursor-pointer prev transition_slow hover:scale-95' iconName='leftArrowIcon' />
                        <Icon className='cursor-pointer next transition_slow hover:scale-95' iconName='rightArrowIcon' />
                    </div>
                </div>
            </div>
            <div className="gallery w-full px-5 sm:px-0">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = '.prev';
                        swiper.params.navigation.nextEl = '.next';
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2.4,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3.8
                        },
                    }}
                >
                    {GALLERY_DATA.map((items, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full overflow-hidden">
                                <img src={items.img} alt={items.img} className='w-full h-full' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery