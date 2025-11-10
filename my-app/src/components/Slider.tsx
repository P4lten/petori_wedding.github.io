import { useEffect, useState } from "react";
import "./Slideshow.css"

import img1 from "../../assets/images/Hochzeit-1403-12.jpg";
import img2 from "../../assets/images/Hochzeit-1403-13.jpg";
import img3 from "../../assets/images/Hochzeit-1403-14.jpg";

const images = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
];


function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = (n: number) => {
        setSlideIndex((prev) => (prev + n + images.length) % images.length);
    };

    const currentSlide = (n: number) => {
        setSlideIndex(n);
    };

    useEffect(() => {
        const timer = setInterval(() => nextSlide(1), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div className="slideshow-container">
                {images.map((image, i) => (
                    <div
                        key={i}
                        className={`mySlides fade ${i === slideIndex ? "active" : ""}`}
                        style={{ display: i === slideIndex ? "block" : "none" }}
                    >
                        <img src={image.src} alt={`Slide ${i + 1}`} style={{ width: "100%" }} />
                    </div>
                ))}
            </div>

            <br />
            <div style={{ textAlign: "center" }}>
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === slideIndex ? "active" : ""}`}
                        onClick={() => currentSlide(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
};


export default Slider