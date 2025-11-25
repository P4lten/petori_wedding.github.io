import classes from "./Infos.module.css"
import Accodion from "./Accordion"

function Infos() {




    return (
        <>
            <div className={classes.side}>
                <h1>Allgemeines</h1>
                <div className={classes.container}>

                    <Accodion title="Ticket Verkauf"
                        text=" Diese Tickets kann man nicht verkaufen, was glaubst du eigentlich?!" />

                    <Accodion title="Beginn"
                        text="Auf der Einladung steht zwar das man schon um 11:30 kommen kann, das heißt aber nicht das ihr zu der Zeit auch kommen müsst.
                                Das ist nur für die Leute die sich dort in ihrere Unterkunft zurechtmachen, offizieller start des Fesivals ist um 13:00Uhr!" />
                </div>
            </div>
        </>)
}

export default Infos