import React from 'react'
import { FOOTER_DATA_LIST, FOOTERCONTACT_DATA_LIST, SOCAL_MEDIA_DATA_LIST } from '../common/Helper'
import Icon from '../common/Icons'

const Footer = () => {
    return (
        <div className='bg-off-blue sm:py-14 py-8 relative z-10 -mt-1'>
            <div className="container lg:mb-11 pb-0.5">
                <div className="flex justify-between lg:flex-row flex-col lg:gap-16 xl:gap-5">
                    <div className="lg:max-w-[255px] w-full">
                        <a href="/" className='font-lora font-bold text-white text-custom-xl leading-custom-2xl'>Frispes</a>
                        <p className='font-lato text-base mt-4 opacity-85 text-deep-gray leading-custom-sm'>We offer comfortable spaces, cozy cafe, high-speed internet, spacious parking area and many more for your best workspaces and meetings</p>
                        <div className="flex items-center gap-4 mt-6">
                            {SOCAL_MEDIA_DATA_LIST.map((data, idx) => (
                                <a key={idx} href={data.URL} target='_blank' rel="noreferrer" className='group transition-slow'>
                                    <Icon iconName={data.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-[730px] w-full sm:flex-nowrap flex-wrap flex-row justify-between mt-7 pt-0.5 flex">
                        {FOOTER_DATA_LIST.map((items, index) => (
                            <div key={index} className="sm:w-fit mt-6 lg:mt-0 w-1/2">
                                <h2 className='font-lato text-xl font-medium text-white opacity-50'>{items.title}</h2>
                                <div className="flex flex-col gap-[9px] mt-3 sm:mt-6">
                                    {items.list.map((obj, idx) => (
                                        <a key={idx} target={idx === items.list.length - 2 ? "_blank" : undefined} rel={idx === items.list.length - 2 ? "noreferrer" : undefined} href={obj.URL} className='w-fit font-lato font-normal text-white text-base transition-slow hover:text-off-orange leading-custom-sm'>{obj.subTitle}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="sm:max-w-[212px] sm:w-full mt-6 lg:mt-0 w-1/2">
                            <h2 className='font-lato text-xl font-medium text-white opacity-50'>Contact Us</h2>
                            <div className="flex flex-col gap-[9px] mt-3 sm:mt-6">
                                {FOOTERCONTACT_DATA_LIST.map((obj, idx) => (
                                    <a key={idx} target={idx === 1 ? "_blank" : undefined} rel={idx === 1 ? "noreferrer" : undefined} href={obj.URL} className='w-fit font-lato font-normal text-white text-base transition-slow hover:text-off-orange leading-custom-sm flex gap-2'><span className='font-bold'>{obj.text}</span> {obj.subTitle}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer