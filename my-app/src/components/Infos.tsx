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
                        text="Bitte beachtet, dass *ab* 11:30 am Time-Table steht. Es bedeutet nicht, dass ihr zu der Zeit schon da sein müsst. 
                                Aber ihr könnt.
                                Offizieller Start des Fesivals ist
                                *um* 13:00 Uhr! - 
                                Das aber pünktlich!"
                        imageSrc={prost}
                        imgAlt="zwei menschen beim anstoßen mit bier" />

                    <Accodion title="Unterkunft"
                        text="Wer noch keine Unterkunft hat, hier eine Liste von Unterkünften, die es in der Nähe gibt:

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
                        
                        Oder sonst was in Horn, wir schreiben euch ja nicht vor, wo ihr schlafen sollt. ;)
                        "
                        imageSrc={whisky_schlafen}
                        imgAlt="schläfrige katze" />

                    <Accodion title="Geschenke"
                        text="Bitte keine Pflanzen, davon haben wir genug im Garten - wo sie hingehören!!!
                                Worüber wir uns immer freuen, ist eine Aufstockung unserer Urlaubskassa."
                        imageSrc={pflanzenverbot}
                        imgAlt="pflanzenverbot schild" />

                    <Accodion title="Ablauf"
                        text="Siehe Time-Table im Menü oben."
                        imageSrc=""
                        imgAlt="" />

                    <Accodion title="Trichter"
                        text="Auch wenn wir ein (Hochzeits-)Festival feiern, herrscht am ganzen Gelände Trichterverbot, da es dadurch sehr leicht zu Ausschreitungen kommen kann!"
                        imageSrc={trichterverbot}
                        imgAlt="trichterverbotsschild" />

                    <Accodion title="Ticket Verkauf"
                        text="§ 1 Verbot des Erwerbs und der Veräußerung von Karten
                                (1) Der Erwerb, die entgeltliche oder unentgeltliche Weitergabe sowie jede sonstige Form des Handels mit den bezeichneten Karten sind untersagt.
                                (2) Zuwiderhandlungen gegen Absatz 1 stellen eine unzulässige Umgehung der vorgesehenen Nutzungsbestimmungen dar und sind nach PETORI-Gesetz rechtswidrig.
                                § 2 Rechtsfolgen bei Verstößen
                                (1) Verstöße gegen dieses Verbot können PETORI-rechtlich geahndet werden. 
                                (2) Sollte der Verstoß unter Alkoholeinfluss erfolgt sein, wird dies zusätzlich als „alkoholisch bedenkliches Fehlverhalten“ gewertet. Dies kann zu weiteren Maßnahmen führen, darunter: böse Blicke, erhobene Zeigefinger und Shots zur Bestrafung.
                                (3) Betroffene haben sich alle belehrenden Hinweise ohne Augenrollen anzuhören.
                                § 3 Sofortige Geltung
                                Dieses Verbot tritt sofort nach Erhalt der Karte in Kraft. Jeder Versuch, es zu umgehen, gilt automatisch als gescheitert."
                        imageSrc={whisky}
                        imgAlt="katze namens whisky" />


                </div>
            </div>
        </>)
}

export default Infos