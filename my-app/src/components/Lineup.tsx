import lineup_essen from "../../assets/images/lineup_essen.jpg"
import lineup_getränke from "../../assets/images/lineup_getränke.jpg"
import classes from "./LineUp.module.css"

function Lineup() {
    return (<>
        <div className={classes.page}>
            <div className={classes.container}>
                {<img src={lineup_essen} className={classes.image} alt="essens lineup (menü)"></img>}
                {<img src={lineup_getränke} className={classes.image} alt="essens lineup (menü)"></img>}
            </div>
        </div>
    </>)
}

export default Lineup