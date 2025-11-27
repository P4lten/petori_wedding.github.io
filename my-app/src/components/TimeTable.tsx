import timeTable from "../../assets/images/Time-Table.jpeg"
import classes from "./TimeTable.module.css"

function TimeTable() {
    return (<>
        <div className={classes.page}>
            <h1>Time-Table</h1>
            <div className={classes.container}>
                <img src={timeTable} className={classes.image}></img>
            </div>
        </div>
    </>)
}

export default TimeTable