import classes from "./Footer.module.css";

function Footer() {

    return (
        <footer className={classes.container}>
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
        </footer>
    )
}

export default Footer;

