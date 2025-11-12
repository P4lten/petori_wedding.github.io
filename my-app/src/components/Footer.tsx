import classes from "./Footer.module.css";

function Footer() {

    return (
        <footer className={classes.container}>
            <ul>
                <li>
                    <a>Kontakt</a>
                </li>
                <li>
                    <a>Impressum</a>
                </li>

            </ul>
        </footer>
    )
}

export default Footer;

