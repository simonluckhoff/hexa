import { useState, useEffect } from 'react';

const Carousel = ({ slides, children }) => {
    // slides holds the info of the background of each slide
    const [currentIndex, setCurrentIndex] = useState(0);
    // currentIndex is the beginning state (0) and setCurrentIndex is func to change state

    useEffect(() => {
        const interval = setInterval(() => {
            // while interval playing (5secs), it does the below maths (to see if end of slides).
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
            // this is the maths. takes current form of prevIndex and modulus's by the length of it. 
        }, 3000);

        return () => clearInterval(interval);
        // this is the clean up state. 
    }, [slides.length]);

    return (
        <div className="carousel">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'carousel-item-visible' : ''}`}
                    style={{ background: slide.background }}
                />
            ))}
            {children}
        </div>
    );

};

export default Carousel;