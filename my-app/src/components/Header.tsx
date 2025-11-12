import { useState } from "react";
import classes from "./Header.module.css";
import Start from "./Start";
import Infos from "./Infos";
import LineUp from "./LineUp";
import Anreise from "./Anreise";

function Header() {

    const [activeMenu, setActiveMenu] = useState<string>("");


    const handleMenuClick = (menuName: string) => {
        // Wenn das Menü bereits aktiv ist, wieder schließen
        if (activeMenu === menuName) {
            setActiveMenu("");
        } else {
            setActiveMenu(menuName);
        }
    };

    return (<>
        <header className={classes.container}>
            <ul>
                <li>
                    <a onClick={() => handleMenuClick("menu1")}>Start</a>
                </li>
                <li>
                    <a onClick={() => handleMenuClick("menu2")}>Infos</a>
                </li>
                <li>
                    <a onClick={() => handleMenuClick("menu3")}>Line-Up</a>
                </li>
                <li>
                    <a onClick={() => handleMenuClick("menu4")}>Anreise</a>
                </li>
            </ul>
        </header>

        <main className="content">
            {activeMenu === "menu1" && <Start />}
            {activeMenu === "menu2" && <Infos />}
            {activeMenu === "menu3" && <LineUp />}
            {activeMenu === "menu4" && <Anreise />}
        </main>
    </>)
}

export default Header