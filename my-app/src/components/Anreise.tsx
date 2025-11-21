import { useEffect, useState } from "react";
import classes from "./Anreise.module.css"

function Anreise() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (<>
        {isMobile ? (<div className={classes.container}>
            <h2>Standort Gallien</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.6220916511293!2d15.65511477686553!3d48.712703710947274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4772bb686383acc5%3A0x94a9152bba320b9b!2sGallien%20-%20Gallien%20Br%C3%A4u!5e0!3m2!1sde!2sat!4v1763710736799!5m2!1sde!2sat"
                width="300"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <h2>Reise von St. Gilgen</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d679761.5487631097!2d13.880872608689895!3d48.27748716508934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x4776bad9e17271d1%3A0xa99c6ddadae57c7a!2sSt.%20Gilgen!3m2!1d47.7669996!2d13.3640748!4m5!1s0x4772bb686383acc5%3A0x94a9152bba320b9b!2sGallien%20-%20Gallien%20Br%C3%A4u%2C%20Gallien%201%2C%203753%20Pernegg!3m2!1d48.712731299999994!2d15.657666899999999!5e0!3m2!1sde!2sat!4v1763711689957!5m2!1sde!2sat"
                width="300"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <h2>Reise von Brunn am Gebierge</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d338996.1941931107!2d15.71511002336712!3d48.41031539881816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x476daf41c8714b0d%3A0x4bcf0b66f85bc0f9!2sBrunn%20am%20Gebirge!3m2!1d48.108956!2d16.2853875!4m5!1s0x4772bb686383acc5%3A0x94a9152bba320b9b!2sGallien%20-%20Gallien%20Br%C3%A4u%2C%20Gallien%201%2C%203753%20Pernegg!3m2!1d48.712731299999994!2d15.657666899999999!5e0!3m2!1sde!2sat!4v1763711987268!5m2!1sde!2sat"
                width="300"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>) : (

            <div className={classes.container}>
                <h2>Standort Gallien</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.6220916511293!2d15.65511477686553!3d48.712703710947274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4772bb686383acc5%3A0x94a9152bba320b9b!2sGallien%20-%20Gallien%20Br%C3%A4u!5e0!3m2!1sde!2sat!4v1763710736799!5m2!1sde!2sat"
                    width="800"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                <h2>Reise von St. Gilgen</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d679761.5487631097!2d13.880872608689895!3d48.27748716508934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x4776bad9e17271d1%3A0xa99c6ddadae57c7a!2sSt.%20Gilgen!3m2!1d47.7669996!2d13.3640748!4m5!1s0x4772bb686383acc5%3A0x94a9152bba320b9b!2sGallien%20-%20Gallien%20Br%C3%A4u%2C%20Gallien%201%2C%203753%20Pernegg!3m2!1d48.712731299999994!2d15.657666899999999!5e0!3m2!1sde!2sat!4v1763711689957!5m2!1sde!2sat"
                    width="950"
                    height="750"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                <h2>Reise von Brunn am Gebierge</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d338996.1941931107!2d15.71511002336712!3d48.41031539881816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x476daf41c8714b0d%3A0x4bcf0b66f85bc0f9!2sBrunn%20am%20Gebirge!3m2!1d48.108956!2d16.2853875!4m5!1s0x4772bb686383acc5%3A0x94a9152bba320b9b!2sGallien%20-%20Gallien%20Br%C3%A4u%2C%20Gallien%201%2C%203753%20Pernegg!3m2!1d48.712731299999994!2d15.657666899999999!5e0!3m2!1sde!2sat!4v1763711987268!5m2!1sde!2sat"
                    width="950"
                    height="750"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        )}
    </>
    )
}

export default Anreise