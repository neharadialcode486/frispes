import React from 'react'
import PrimaryHeading from '../common/PrimaryHeading'
import { IMAGES_DATA } from '../common/Helper'

const Brands = () => {
    return (
        <div className='py-4'>
            <div className="container">
                <PrimaryHeading className='text-deep-blue text-center' text='Who uses Frispes?' />
                <p className='md:mt-6 sm:mt-3 mt-2 font-lato text-light-gray font-medium text-lg text-center'>Big brands, small bussiness, new startuo and inividuals</p>
                <div className="md:mt-14 sm:mt-10 mt-7 xl:-mx-8 h-[67px] overflow-x-scroll xl:flex xl:items-center xl:overflow-x-visible">
                    <div className="w-[1175px] flex group justify-between items-center">
                        {IMAGES_DATA.map((items, index) => (
                            <a key={index} href={items.url} className='transition_slow group-hover:grayscale hover:!filter-none'><img src={items.img} alt={items.img} /></a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands