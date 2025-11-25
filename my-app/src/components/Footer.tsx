import { useState } from "react";
import classes from "./Footer.module.css";
import Impressum from "./Impressum";
import Kontakt from "./Kontakt";

function Footer() {
    const [activeMenu, setActiveMenu] = useState<string>("");

    const handleMenuClick = (menuName: string) => {

        if (activeMenu === menuName) {
            setActiveMenu("")
        } else {
            setActiveMenu(menuName);
        }
    };


    return (
        <>
            <main className="content">
                {activeMenu === "menu1" && <Kontakt />}
                {activeMenu === "menu2" && <Impressum />}
            </main>

            <footer className={classes.container}>
                <ul>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu1"); }}>
                            Kontakt
                        </a>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu2"); }}>
                            Impressum
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;

