import React, { useState } from 'react';
import Header from '../common/Header';
import Paragraph from '../common/Paragraph';
import heroImage from "../../assets/images/webp/hero.webp";
import Icon from '../common/Icons';
import { FIND_YOUR_SPACE_LIST } from '../common/Helper';
import Button from '../common/Button';

const Hero = () => {
    const [active, setActive] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState({
        0: "Malang, Indonesia",
        1: "Private Office",
        2: "9 Aug 2020"
    });
    const toggleDropdown = (index) => {
        setActive(active === index ? null : index);
    };
    const handleLocationChange = (index, locationText) => {
        setSelectedLocation((prev) => ({
            ...prev,
            [index]: locationText
        }));
        setTimeout(() => setActive(null), 100);
    };
    const handleDateChange = (e) => {
        setSelectedLocation((prev) => ({
            ...prev,
            2: e.target.value
        }));
        setActive(null);
    };

    return (
        <section className='sm:py-5 py-3 relative max-w-[1920px] mx-auto'>
            <Header />
            <div className="container mt-4 mb-14 relative z-10">
                <p className='font-lato font-medium text-xl text-off-black flex items-center w-fit mx-auto lg:mx-0 gap-4'>
                    Introducing <span className='bg-off-black flex h-0.5 w-10 sm:w-[73px] mt-1.5'></span>
                </p>
                <div className="flex justify-between lg:flex-row items-center lg:items-start flex-col gap-3 sm:gap-4 mt-1 sm:mt-2">
                    <p className='max-w-[667px] w-full font-lora font-bold text-center lg:text-left text-3xl sm:text-4xl md:text-5xl xl:text-custom-5xl md:leading-custom-4xl xl:leading-custom-5xl text-deep-blue'>
                        <span className='text-off-red'>Revolutionary</span> co-working space to realize your innovation
                    </p>
                    <Paragraph className='max-w-[382px] text-center lg:text-left w-full lg:w-7/12 xl:w-full text-off-gray'>In frispes, we spearhead new initiatives and provide mentorship to a new startup, and help grow their opportunities in key local, regional and global markets</Paragraph>
                </div>
                <div className="bg-deep-blue max-w-[445px] md:mt-16 sm:mt-12 mt-10 w-full sm:min-h-[459px] mx-auto lg:mx-0 px-4 sm:px-10 py-5 sm:py-8">
                    <p className='font-lora font-bold text-white text-3xl sm:text-custom-4xl sm:mt-2.5 sm:leading-[43.52px]'>Find your space now</p>
                    {FIND_YOUR_SPACE_LIST.map((items, index) => (
                        <div key={index} className={`relative pt-px ${index === 0 ? "mt-7" : "mt-4"}`}>
                            <button onClick={() => {
                                toggleDropdown(index);
                            }}
                                className="bg-off-blue px-4 py-2 w-full flex items-center justify-between cursor-pointer dropdown"
                            >
                                <div className="flex items-start flex-col">
                                    <p className='font-lato font-medium text-base leading-custom-xl text-white opacity-35'>{items.title}</p>
                                    <p className='font-lato font-medium text-base leading-custom-xl text-white'>
                                        {selectedLocation[index]}
                                    </p>
                                </div>
                                <Icon className={`${active === index ? "rotate-180" : ""} relative transition-slow`} iconName='downArrow' />
                            </button>
                            {active === index && index < 2 && (
                                <div className='bg-off-blue absolute z-20 top-full border border-white flex flex-col items-start w-full py-4 left-0'>
                                    {items.location.map((location, locIndex) => (
                                        <p
                                            key={locIndex}
                                            onClick={() => handleLocationChange(index, location.text)}
                                            className='text-white transition-slow font-lato font-medium text-base leading-custom-xl hover:text-off-red cursor-pointer w-full px-4 hover:bg-white py-2'
                                        >
                                            {location.text}
                                        </p>
                                    ))}
                                </div>
                            )}
                            {active === index && index === 2 && (
                                <div className='bg-off-blue absolute z-20 top-full border border-white w-full p-4 left-0'>
                                    <input
                                        type='date'
                                        value={selectedLocation[2]}
                                        onChange={handleDateChange}
                                        className='text-deep-blue rounded outline-none bg-white w-full px-2 py-1'
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                    <Button className='uppercase w-full py-3 mt-[22px] hover:!shadow-5xl'>FIND MY SPACE</Button>
                </div>
            </div>
            <img src={heroImage} alt="heroImage" className='max-w-[960px] w-full absolute bottom-0 right-0' />
        </section>
    );
};

export default Hero;