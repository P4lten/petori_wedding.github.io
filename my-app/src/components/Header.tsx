import classes from "./Header.module.css";

function Header() {

    return (
        <header className={classes.container}>
            <ul>
                <li>
                    <a>Start</a>
                </li>
                <li>
                    <a>Infos</a>
                </li>
                <li>
                    <a>Line-Up</a>
                </li>
                <li>
                    <a>Anreise</a>
                </li>
            </ul>
        </header>
    )
}

export default Header