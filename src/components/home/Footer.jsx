import React from 'react'
import { FOOTER_DATA } from '../common/Helper'

const Footer = () => {
    return (
        <div className='bg-off-blue py-14 -mt-1'>
            <div className="container mb-11 pb-0.5">
                <div className="flex justify-between">
                    <div className="max-w-[255px] w-full">
                        <a href="/" className='font-lora font-bold text-white text-custom-xl leading-custom-2xl'>Frispes</a>
                        <p className='font-lato text-base mt-4 opacity-85 text-deep-gray leading-custom-sm'>We offer comfortable spaces, cozy cafe, high-speed internet, spacious parking area and many more for your best workspaces and meetings</p>
                    </div>
                    <div className="max-w-[730px] w-full justify-between mt-7 pt-0.5 flex">
                        {FOOTER_DATA.map((items, index) => (
                            <div key={index} className={index === 3 ? "max-w-[212px] w-full" : "w-fit"}>
                                <h2 className='font-lato text-xl font-medium text-white opacity-50'>{items.heading}</h2>
                                <div className="flex flex-col gap-[9px] mt-6">
                                    {items.data.map((obj, idx) => (
                                        <a key={idx} href={obj.url} className='w-fit font-lato font-normal text-white text-base leading-custom-sm'>{obj.subHeading}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer