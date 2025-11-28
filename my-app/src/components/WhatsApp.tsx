import qrCode from "../../assets/images/Whatsapp.jpeg"
import classes from "./Lageplan.module.css"

function WhatsApp() {
    return (<>
        <div className={classes.page}>
            <h1>WhatsApp Gruppe</h1>
            <h3>um immer auf den neuesten stand zu bleiben</h3>
            <div className={classes.container}>
                <img src={qrCode} className={classes.image} alt="Time table des Festivals"></img>
            </div>
        </div>
    </>)
}

export default WhatsApp