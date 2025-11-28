import { useEffect, useState } from "react";
import classes from "./Header.module.css";
import Start from "./Start";
import Infos from "./Infos";
import TimeTable from "./TimeTable";
import Anreise from "./Anreise";
import Lageplan from "./Lageplan";
import WhatsApp from "./WhatsApp";
import Lineup from "./Lineup";

interface HeaderProps {
    onToggleSlider: (menuName: string) => void;
}

function Header({ onToggleSlider }: HeaderProps) {

    const [activeMenu, setActiveMenu] = useState<string>("menu1");
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleMenuClick = (menuName: string) => {
        setActiveMenu(menuName);
    };


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const togglePanel = () => setIsOpen(!isOpen);

    return (<>
        {isMobile ? (<>

            <header className={classes.container}>
                {/* Hamburger Button */}
                <button className={classes.hamburger} onClick={togglePanel}>
                    ☰
                </button>
            </header>
            {/* Overlay (darkens background when menu is open) */}
            <div
                className={`${classes.overlay} ${isOpen ? classes.overlayShow : ""}`}
                onClick={togglePanel}
            ></div>

            {/* Sidebar Panel */}
            <div className={`${classes.sidepanel} ${isOpen ? classes.open : ""}`}>

                <ul>
                    <li>
                        <h2 className={classes.panelTitle} onClick={(e) => { e.preventDefault(); handleMenuClick("menu1"); togglePanel(); onToggleSlider("menu1"); }}>
                            Start
                        </h2>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu2"); togglePanel(); onToggleSlider(""); }}>
                            Infos & FAQ
                        </a>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu3"); togglePanel(); onToggleSlider(""); }}>
                            Time-Table
                        </a>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu3"); onToggleSlider(""); }}>
                            Time-Table
                        </a>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu5"); togglePanel(); onToggleSlider(""); }}>
                            Lageplan
                        </a>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu6"); togglePanel(); onToggleSlider(""); }}>
                            WhatsApp
                        </a>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu4"); togglePanel(); onToggleSlider(""); }}>
                            Anreise
                        </a>
                    </li>
                </ul>
            </div>
            <main className="content">
                {activeMenu === "menu1" && <Start />}
                {activeMenu === "menu2" && <Infos />}
                {activeMenu === "menu3" && <TimeTable />}
                {activeMenu === "menu4" && <Anreise />}
                {activeMenu === "menu5" && <Lageplan />}
                {activeMenu === "menu6" && <WhatsApp />}
                {activeMenu === "menu7" && <Lineup />}
            </main>

        </>
        ) : (<>
            <header className={classes.container}>
                <ul>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu1"); onToggleSlider("menu1"); }}>
                            Start
                        </a>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu2"); onToggleSlider(""); }}>
                            Infos & FAQ
                        </a>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu3"); onToggleSlider(""); }}>
                            Time-Table
                        </a>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu7"); onToggleSlider(""); }}>
                            Lineup
                        </a>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu5"); onToggleSlider(""); }}>
                            Lageplan
                        </a>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu6"); togglePanel(); onToggleSlider(""); }}>
                            WhatsApp
                        </a>
                    </li>
                    <li>
                        <a onClick={(e) => { e.preventDefault(); handleMenuClick("menu4"); onToggleSlider(""); }}>
                            Anreise
                        </a>
                    </li>
                </ul>
            </header>

            <main className="content">
                {activeMenu === "menu1" && <Start />}
                {activeMenu === "menu2" && <Infos />}
                {activeMenu === "menu3" && <TimeTable />}
                {activeMenu === "menu4" && <Anreise />}
                {activeMenu === "menu5" && <Lageplan />}
                {activeMenu === "menu6" && <WhatsApp />}
                {activeMenu === "menu7" && <Lineup />}
            </main> </>)}
    </>
    )
}


export default Header