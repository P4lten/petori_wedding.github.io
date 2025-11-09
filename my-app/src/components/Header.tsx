import classes from "./Header.module.css";

function Header() {

    return (
        <header className={classes.container}>
            <ul>
                <li>
                    <a>Menu 1</a>
                </li>
                <li>
                    <a>Menu 2</a>
                </li>
                <li>
                    <a>Menu 3</a>
                </li>
                <li>
                    <a>Menu 4</a>
                </li>
            </ul>
        </header>
    )
}

export default Header