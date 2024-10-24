import React from 'react'
import PrimaryHeading from '../common/PrimaryHeading'
import Icon from '../common/Icons'
import sunder from "../../assets/images/png/sunder-pichai.png";
import { CARD_DATA } from '../common/Helper';

const Events = () => {
    return (
        <div className='py-14 bg-deep-gray'>
            <div className="container pb-1">
                <div className="flex items-end justify-between">
                    <PrimaryHeading className='text-deep-blue' text='News, events and insights for you' />
                    <button className='flex gap-5 items-center w-fit font-lato font-normal text-base text-off-orange group hover:text-deep-blue'>See more <Icon iconName='orangeArrowIcon' /></button>
                </div>
                <div className="flex justify-center flex-row flex-wrap -mx-[15px] mt-6 pt-0.5">
                    {CARD_DATA.map((items, index) => (
                        <div key={index} className="w-4/12 px-[15px] min-h-[320px] mt-[30px]">
                            <div className="card">
                                <div className="card-content relative transition-transform duration-1000">
                                    <div className="card-front min-h-[320px] absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-white">
                                        <img src={sunder} alt="sunder" className='w-full h-full max-h-[204px]' />
                                        <div className="px-4 py-3.5">
                                            <p className='font-lora font-normal text-off-black text-custom-ss leading-7'>Minimal workspace for inspirations</p>
                                            <p className='mt-1 mb-0.5 font-lato font-medium text-base leading-custom-sm text-light-gray'>Anthony Masional</p>
                                        </div>
                                    </div>
                                    <div className="card-back min-h-[320px] absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-white p-8">
                                        <p className='text-off-black font-bold font-lora text-custom-sm leading-10'>Google I / O 2020 news update</p>
                                        <p className='mt-6 text-light-gray text-base leading-custom-sm font-lato font-normal'>Out of concern for the health and safety of our developers, employees, and local communities — and in line with recent ...</p>
                                        <div className="flex gap-6 mt-4">
                                            <img src="" alt="" className='w-14 h-14' />
                                            <div className="flex flex-col">
                                                <p className='text-deep-blue font-lato font-medium text-lg'></p>
                                                <p className='mt-6 text-light-gray text-base leading-custom-sm font-lato font-normal'></p>
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