import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { debounce, throttle } from "../utils/delays";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as styles from "../styles/navbar.module.css";
import MenuStack from "./MenuStack";

const Navbar = () => {
    const otherLinks: string[] = ["Publications", "Creators", "About"];
    const [width, setWidth] = useState(window.innerWidth);

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

    return (
        <nav className={styles.nav}>
            <div className={styles.navContainer}>
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
                            <div className={styles.learningPlatform}>
                                Learning Platform
                            </div>
                        </div>
                    </Link>
                </div>

                <div className={styles.rightContainer}>
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
