import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { debounce, throttle } from "../utils/delays";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as styles from "../styles/navbar.module.css";
import MenuStack from "./MenuStack";

const Navbar = () => {
    const otherLinks: string[] = ["Creators", "About"];
    const [width, setWidth] = useState(window.innerWidth);
    const [showExtras, setShowExtras] = useState(true);
    let prevScroll = window.scrollY;

    useEffect(() => {
        const throttled = () =>
            throttle(() => {
                setWidth(window.innerWidth);
            }, 200);

        window.addEventListener("resize", throttled);
        return () => {
            window.removeEventListener("resize", throttled);
        };
    });

    useEffect(() => {
        const throttled = () =>
            throttle(() => {
                setShowExtras(window.scrollY > prevScroll ? false : true);
                prevScroll = window.scrollY;
                console.log(prevScroll);
            }, 200);
        window.addEventListener("scroll", throttled);
        return () => {
            window.removeEventListener("scroll", throttled);
        };
    });

    return (
        <nav className={styles.nav}>
            <div
                className={styles.navContainer}
                style={{ padding: showExtras ? 30 : 10 }}>
                {width > 400 && (
                    <div className={styles.leftContainer}>
                        <MenuStack />
                    </div>
                )}
                <div className={styles.middleContainer}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className={styles.middleStack}>
                            <StaticImage
                                src="../assets/csesocwhiteblue.png"
                                alt={"csesoc"}
                                width={150}
                            />
                            <div
                                className={styles.learningPlatform}
                                style={{
                                    display: showExtras ? "block" : "none",
                                }}>
                                Learning Platform
                            </div>
                        </div>
                    </Link>
                </div>

                <div
                    className={styles.rightContainer}
                    style={{ visibility: showExtras ? "visible" : "hidden" }}>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger
                            className={styles.dropdownTrigger}>
                            <MenuStack />
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content
                            align="end"
                            className={styles.dropdownContent}>
                            {otherLinks.map((item, index) => {
                                return (
                                    <DropdownMenu.Item
                                        className={styles.dropdownItem}
                                        key={index}
                                        onSelect={() =>
                                            navigate(`/${item.toLowerCase()}`)
                                        }>
                                        {item}
                                    </DropdownMenu.Item>
                                );
                            })}
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
