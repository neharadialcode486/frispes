import Icon from '../common/Icons'
import { WORKSPACE_DATA } from '../common/Helper'
import PrimaryHeading from './../common/PrimaryHeading';
import PrimaryParagraph from '../common/PrimaryParagraph';

const Workspace = () => {
    return (
        <div className='py-4'>
            <div className="container">
                <div className="flex justify-between items-center gap-8 lg:flex-row flex-col">
                    <div className="w-full flex justify-between max-w-[499px]">
                        {WORKSPACE_DATA.map((items, index) => (
                            <div key={index} className="flex flex-col gap-12 sm:gap-16">
                                {items.data.map((obj, idx) => (
                                    <div key={idx} className="flex gap-3 sm:gap-6">
                                        <Icon iconName={obj.icon} />
                                        <div className="flex flex-col">
                                            <p className='text-deep-blue font-lora font-normal text-2xl sm:text-custom-sm sm:leading-10'>{obj.title}</p>
                                            <p className='mt-2 text-light-gray font-lato font-normal text-sm sm:text-base'>{obj.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="max-w-[540px] w-full bg-deep-blue p-7 sm:p-[53px]">
                        <p className='font-lato font-medium text-xl text-white flex items-center w-fit mx-auto lg:mx-0 gap-4'>
                            Why Frispes <span className='bg-white flex h-0.5 w-10 sm:w-[73px] mt-1.5'></span>
                        </p>
                        <PrimaryHeading className='text-white mt-2 text-center lg:text-left' text='We revolutionize your workspace' />
                        <PrimaryParagraph className='text-white mt-6 text-center lg:text-left' data="With a decade of insights and expertise, we're decided to reimagine co-working space, designed to help a new startup grow up and realize their ideas so they can give a positive impacts on many people" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workspace