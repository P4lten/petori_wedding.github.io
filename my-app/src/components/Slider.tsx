import { useEffect, useState } from "react";
import "./Slideshow.css"

import img1 from "../../assets/images/Hochzeit-1403-web-12.jpg";
import img2 from "../../assets/images/Hochzeit-1403-web-13.jpg";
import img3 from "../../assets/images/Hochzeit-1403-web-14.jpg";
//import img4 from "../../assets/images/Konzert0.jpg";
import img5 from "../../assets/images/Konzert1.jpg";
import img6 from "../../assets/images/Konzert2.jpg";
import img7 from "../../assets/images/Konzert3.jpg";


const images = [
    { src: img1 },
    { src: img7 },
    { src: img2 },
    { src: img5 },
    { src: img3 },
    { src: img6 },
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
        <>
            <div className="slideshow-container">
                {images.map((image, i) => (
                    <div
                        key={i}
                        className={`mySlides fade ${i === slideIndex ? "active" : ""}`}
                        style={{ display: i === slideIndex ? "block" : "none" }}
                    >
                        <img src={image.src} alt={`Slide ${i + 1}`} style={{ width: "100%", height: "auto", maxWidth: "1280px" }} />
                    </div>
                ))}
            </div>
        </>
    );
};


export default Slider