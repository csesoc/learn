import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Navbar = () => {
    const otherLinks: string[] = ["Publications", "Creators", "About"];

    return (
        <nav
            style={{
                width: "100%",
                position: "fixed",
                backgroundColor: "rgb(61,61,61)",
                zIndex: 1,
            }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    maxWidth: 1000,
                    margin: "auto",
                    padding: 30,
                }}>
                <div
                    style={{
                        flexGrow: 2,
                    }}>
                    <Link to="/">
                        <StaticImage
                            src="../assets/csesocwhiteblue.png"
                            alt={"csesoc"}
                            width={150}
                        />
                    </Link>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-evenly",
                        flexGrow: 1,
                    }}>
                    {otherLinks &&
                        otherLinks.map((item, index) => {
                            return (
                                <Link
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        textAlign: "right",
                                        textDecoration: "none",
                                        color: "white",
                                        fontWeight: 100,
                                    }}
                                    to={`/${item.toLowerCase()}`}>
                                    {item}
                                </Link>
                            );
                        })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
