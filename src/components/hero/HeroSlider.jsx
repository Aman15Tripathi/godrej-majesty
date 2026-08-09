import { useEffect, useState } from "react";
import heroSlides from "../../assets/data/heroSlides";
import "../../styles/HeroSlider.css"

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${
                        index === currentSlide ? "active" : ""
                    }`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                    }}
                />
            ))}

            <div className="hero-overlay"></div>

            <div className="hero-dots">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-dot ${
                            currentSlide === index ? "active" : ""
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default HeroSlider;