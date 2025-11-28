import lagePlan from "../../assets/images/Lageplan_Gallien.jpg"
import classes from "./Lageplan.module.css"

function Lageplan() {
    return (<>
        <div className={classes.page}>
            <h1>Lageplan</h1>
            <div className={classes.container}>
                <img src={lagePlan} className={classes.image} alt="Time table des Festivals"></img>
            </div>
        </div>
    </>)
}

export default Lageplan