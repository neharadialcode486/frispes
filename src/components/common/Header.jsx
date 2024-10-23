import React, { useEffect, useState } from 'react';
import { HEADER_DATA } from './Helper';
import PrimaryButton from './PrimaryButton';

const Header = () => {
    const [open, setOpen] = useState(false);
    const ToggleOpen = () => {
        if (window.innerWidth < 640) {
            setOpen((prevOpen) => !prevOpen);
        }
    };
    useEffect(() => {
        const handleOverflow = () => {
            document.body.style.overflow = open && window.innerWidth < 640 ? "hidden" : "";
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);
    return (
        <div className="py-10">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <a href="/" className="w-fit relative z-10 text-deep-blue font-playFair font-bold text-2xl">Frispes.</a>
                    <div className={`${open ? "left-0 bg-white" : "-left-full"} flex items-center z-10 sm:bg-transparent absolute flex-col w-full h-screen top-0 sm:relative sm:bg-none sm:flex-row gap-10 sm:h-fit sm:w-fit sm:left-auto transition_slow`}>
                        {HEADER_DATA.map((i, index) => (
                            <a key={index} href={i.url} aria-label={i.heading} onClick={ToggleOpen} className="text-off-black font-lato font-bold text-base leading-7 hover:text-off-orange transition_slow w-fit relative after:absolute after:duration-300 after:ease-linear after:-bottom-[3px] after:left-1/2 after:-translate-x-1/2 after:bg-off-orange after:w-0 after:h-[3px] after:rounded-xl hover:after:w-full">
                                {i.heading}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <PrimaryButton className='py-3 text-base leading-5 px-6' text="Sign Up" />
                    </div>
                    <div role="button" aria-label="menu icon" aria-expanded={open} onClick={ToggleOpen} className={`${open ? "shadow-5xl h-6" : ""} w-6 h-4 rounded-full relative sm:hidden flex z-20 cursor-pointer transition_slow`}>

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;