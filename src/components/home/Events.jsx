import React from 'react'
import PrimaryHeading from '../common/PrimaryHeading'
import Icon from '../common/Icons'

const Events = () => {
    return (
        <div className='py-14 bg-deep-gray'>
            <div className="container">
                <div className="flex items-end justify-between">
                    <PrimaryHeading className='text-deep-blue' text='News, events and insights for you' />
                    <button className='flex gap-5 items-center w-fit font-lato font-normal text-base text-off-orange group hover:text-deep-blue'>See more <Icon iconName='orangeArrowIcon' /></button>
                </div>
            </div>
        </div>
    )
}

export default Events