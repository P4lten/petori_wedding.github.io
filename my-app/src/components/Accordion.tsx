import { useState } from "react";
import classes from "./Accordion.module.css"

interface AccodionProps {
    title: string, text: string, imageSrc: string, imgAlt: string
}

function Accodion({ title, text, imageSrc, imgAlt }: AccodionProps) {

    const [isActive, setIsActive] = useState(false)

    return (<>

        <div className={classes.accordionItem}>
            <div className={classes.accordionTitle}
                onClick={() => setIsActive(!isActive)}>
                <h2>{title}</h2>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <>
                <div className={classes.accordionText} style={{ whiteSpace: "pre-line" }}>
                    {text}
                </div>
                <img src={imageSrc} alt={imgAlt} />
            </>}
        </div>

    </>)
}

export default Accodion;