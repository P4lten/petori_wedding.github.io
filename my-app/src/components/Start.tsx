import { useEffect, useState } from "react";
import classes from "./Start.module.css"

function Start() {

    const targetDate: string = "2026-03-14T13:00:00";

    const calculateTimeLeft = () => {

        const difference = +new Date(targetDate) - +new Date();


        if (difference <= 0) return null; // countdown finished

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // cleanup on unmount
    }, [targetDate]);

    if (!timeLeft) return <p>🎉 Time's up!</p>;

    return (
        <>
            <div className={classes.marquee}>
                <span>Zu- oder Absagen bis Ende Dezember bitte!!!</span>
            </div>
            <h2>Nur noch</h2>
            <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
            <h2>bis zum Petori Festival</h2>
        </>
    )
}

export default Start