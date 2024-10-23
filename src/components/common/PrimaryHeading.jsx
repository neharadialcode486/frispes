const PrimaryHeading = ({
    text,
    reduceBelow = 1024,
    maxFontSize = 40,
    minFontSize = 25,
    className = '',
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <h2 {...props} style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }} className={`${className} font-lora font-bold md:leading-10 lg:leading-custom-base`}>
            {text}
        </h2>
    );
};

export default PrimaryHeading;