import classes from "./Infos.module.css"
import Accodion from "./Accordion"
import whisky from "../../assets/images/whisky.jpeg"
import trichterverbot from "../../assets/images/trichterverbot2.png"
import pflanzenverbot from "../../assets/images/pflanzenverbot2.png"
import prost from "../../assets/images/prost.png"
import whisky_schlafen from "../../assets/images/whisky_schlafen.png"

function Infos() {



    return (
        <>
            <div className={classes.side}>
                <h1>Allgemeines</h1>
                <div className={classes.container}>

                    <Accodion title="Beginn"
                        text="Auf der Einladung steht zwar das man schon um 11:30 kommen kann, das heißt aber nicht das ihr zu der Zeit auch kommen müsst.
                                Das ist nur für die Leute die sich dort in ihrere Unterkunft zurechtmachen, offizieller start des Fesivals ist um 13:00Uhr!"
                        imageSrc={prost}
                        imgAlt="zwei menschen beim anstoßen mit bier" />

                    <Accodion title="Unterkunft"
                        text="Wer noch keine Unterkunft hat hier eine Liste von Unterkünften die es in der Nähe sind:

                        Gallien
                        Gallien 1
                        3753 Pernegg
                        (664) 530-3441 oder (664) 441-4923
                        info@gallien.at

                        campus Horn
                        Canisiusgasse 1, 
                        A-3580 Horn
                        +43 2982 50 325
                        https://campus-horn.at/home.html
                        office@campus-horn.at

                        Hotel Blie Bed & Breakfast
                        Hamerlingstraße 17
                        3580 Horn
                        02982/2257 
                        https://www.hotelblie.at/
                        hotel@blie.at
                        
                        Oder sonst was in Horn, wir schreiben euch ja nicht vor, wo ihr buchen sollt ;)
                        "
                        imageSrc={whisky_schlafen}
                        imgAlt="schläfrige katze" />

                    <Accodion title="Geschenke"
                        text="Bitte keine Pflanzen, davon haben wir genug daheim!!!
                                Über was wir uns immer freuen ist eine aufstockung unserer Urlaubskassa, da wir sehr gerne verreisen."
                        imageSrc={pflanzenverbot}
                        imgAlt="pflanzenverbot schild" />

                    <Accodion title="Ablauf"
                        text="Siehe Time-Table im Menü oben"
                        imageSrc=""
                        imgAlt="" />

                    <Accodion title="Trichter"
                        text="Auch wenn wir ein Festival Thema haben, herrscht am ganzen Gelände Trichterverbot, da es dadurch sehr leicht zu Ausschreitungen kommen kann!"
                        imageSrc={trichterverbot}
                        imgAlt="trichterverbotsschild" />

                    <Accodion title="Ticket Verkauf"
                        text=" Diese Tickets kann man nicht verkaufen, was glaubst du eigentlich?!"
                        imageSrc={whisky}
                        imgAlt="katze namens whisky" />


                </div>
            </div>
        </>)
}

export default Infos