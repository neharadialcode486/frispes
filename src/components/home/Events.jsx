import PrimaryHeading from '../common/PrimaryHeading'
import Icon from '../common/Icons'
import { CARD_DATA } from '../common/Helper';

const Events = () => {
    return (
        <div className='py-14 bg-deep-gray'>
            <div className="container pb-1">
                <div className="flex sm:items-end flex-col items-center sm:flex-row justify-between">
                    <PrimaryHeading className='text-deep-blue text-center sm:text-left' text='News, events and insights for you' />
                    <button className='flex gap-5 items-center w-fit font-lato font-normal text-base text-off-orange group hover:text-deep-blue'>See more <Icon iconName='orangeArrowIcon' /></button>
                </div>
                <div className="flex justify-center flex-row flex-wrap -mx-3 md:-mx-[15px] sm:mt-6 pt-0.5">
                    {CARD_DATA.map((items, index) => (
                        <div key={index} className="lg:w-4/12 sm:w-1/2 w-full px-3 md:px-[15px] min-h-[320px] mt-6 md:mt-[30px]">
                            <div className="card">
                                <div className="card-content relative transition-transform duration-1000">
                                    <div className="card-front min-h-[320px] absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-white">
                                        <img src={items.img} alt={items.img} className='w-full h-full max-h-[204px]' />
                                        <div className="px-4 py-3.5">
                                            <p className='font-lora font-normal text-off-black text-xl md:text-custom-ss md:leading-7'>{items.title}</p>
                                            <p className='mt-1 mb-0.5 font-lato font-medium text-base leading-custom-sm text-light-gray'>{items.text}</p>
                                        </div>
                                    </div>
                                    <div className="card-back min-h-[320px] absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-white p-4 md:p-8">
                                        <p className='text-off-black font-bold font-lora text-3xl sm:text-2xl xl:text-custom-sm xl:leading-10'>{items.heading}</p>
                                        <p className='mt-6 text-light-gray text-base leading-custom-sm font-lato font-normal'>{items.data}</p>
                                        <div className="flex gap-6 mt-4">
                                            <img src={items.icon} alt={items.icon} className='w-14 h-14' />
                                            <div className="flex flex-col">
                                                <p className='text-deep-blue font-lato font-medium text-lg'>{items.name}</p>
                                                <p className='text-light-gray text-base leading-custom-sm font-lato font-normal'>{items.work}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Events