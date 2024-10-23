const Icon = (props) => {
    const IconList = {
        downArrowIcon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.005 15.4C11.785 15.4 11.585 15.32 11.425 15.16L6.42501 9.95999C6.12501 9.63999 6.125 9.14 6.445 8.82C6.765 8.52 7.26502 8.52 7.58502 8.84L12.005 13.44L16.425 8.84C16.725 8.52 17.245 8.52 17.565 8.82C17.885 9.12 17.885 9.63999 17.585 9.95999L12.585 15.16C12.425 15.32 12.225 15.4 12.005 15.4Z" fill="white" />
            </svg>
        ),
        leftArrowIcon: (
            <svg width="53" height="27" viewBox="0 0 53 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.448429 14.7981L9.6525 25.9884C9.94822 26.3465 10.3179 26.5255 10.6875 26.5255C11.0572 26.5255 11.4268 26.3465 11.7225 25.9884C12.3139 25.2722 12.3139 24.1532 11.7225 23.437L5.03198 15.2905H26.6191C27.4323 15.2905 28.0977 14.4848 28.0977 13.5001C28.0977 12.5153 27.4323 11.7096 26.6191 11.7096H5.03198L11.7225 3.56312C12.3139 2.84695 12.3139 1.72792 11.7225 1.01174C11.1311 0.295565 10.207 0.295565 9.61555 1.01174L0.411451 12.202C-0.143013 12.9629 -0.142998 14.1267 0.448429 14.7981Z" fill="#9A9A9A" />
                <rect width="50" height="4.00159" rx="2.00079" transform="matrix(-1 0 0 1 52.6855 11.5194)" fill="#9A9A9A" />
            </svg>
        ),
        rightArrowIcon: (
            <svg width="92" height="27" viewBox="0 0 92 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M91.2372 14.7981L82.0332 25.9884C81.7375 26.3465 81.3678 26.5255 80.9981 26.5255C80.6285 26.5255 80.2589 26.3465 79.9632 25.9884C79.3717 25.2722 79.3717 24.1532 79.9632 23.437L86.6537 15.2905H65.0666C64.2534 15.2905 63.588 14.4848 63.588 13.5001C63.588 12.5153 64.2534 11.7096 65.0666 11.7096H86.6537L79.9632 3.56312C79.3717 2.84695 79.3717 1.72792 79.9632 1.01174C80.5546 0.295565 81.4787 0.295565 82.0701 1.01174L91.2742 12.202C91.8287 12.9629 91.8287 14.1267 91.2372 14.7981Z" fill="#FF5722" />
                <rect y="11.307" width="88.7142" height="4.47534" rx="2.23767" fill="#FF5722" />
            </svg>
        ),
        lineIcon: (
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2">
                    <mask id="mask0_63_81" maskUnits="userSpaceOnUse" x="0" y="0" width="90" height="90">
                        <rect x="0.5" y="0.5" width="89" height="89" fill="#C4C4C4" stroke="white" />
                    </mask>
                    <g mask="url(#mask0_63_81)">
                        <path d="M-47.5009 37.6896L36.3829 137.658" stroke="white" stroke-width="2" />
                        <path d="M-38.3083 29.9762L45.5754 129.945" stroke="white" stroke-width="2" />
                        <path d="M-29.1158 22.2628L54.7679 122.232" stroke="white" stroke-width="2" />
                        <path d="M-19.9232 14.5493L63.9606 114.518" stroke="white" stroke-width="2" />
                        <path d="M-10.7307 6.83582L73.1531 106.805" stroke="white" stroke-width="2" />
                        <path d="M-1.53821 -0.877625L82.3456 99.0912" stroke="white" stroke-width="2" />
                        <path d="M7.6543 -8.59106L91.5381 91.3777" stroke="white" stroke-width="2" />
                        <path d="M16.8469 -16.3045L100.731 83.6643" stroke="white" stroke-width="2" />
                        <path d="M26.0394 -24.0179L109.923 75.9509" stroke="white" stroke-width="2" />
                        <path d="M35.2319 -31.7314L119.116 68.2374" stroke="white" stroke-width="2" />
                        <path d="M44.4244 -39.4449L128.308 60.5239" stroke="white" stroke-width="2" />
                        <path d="M53.6171 -47.1583L137.501 52.8105" stroke="white" stroke-width="2" />
                    </g>
                </g>
            </svg>
        ),
    };

    return (
        <span className={`flex ${props.className}`}>
            {props.iconName && IconList[props.iconName]}
        </span>
    );
};

export default Icon;