import React from 'react'
import PrimaryHeading from '../common/PrimaryHeading'
import Icon from '../common/Icons'

const Space = () => {
    return (
        <div className='py-24'>
            <div className="container mt-4 pt-0.5">
                <div className="flex justify-between items-end">
                    <PrimaryHeading className='text-deep-blue mb-2' text='Our Spaces' />
                    <p className='font-medium font-lato text-lg text-light-gray max-w-[452px]'>Our space is designed to give you a different experience when working with your team or personally</p>
                    <div className="flex gap-6">
                        <Icon className='cursor-pointer transition_slow hover:scale-95' iconName='leftArrowIcon' />
                        <Icon className='cursor-pointer transition_slow hover:scale-95' iconName='rightArrowIcon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Space