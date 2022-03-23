import React from "react";
import * as styles from "../styles/Tag.module.css";

const Tag = ({ title }: { title: String }) => {
    return <div className={styles.container}>{title}</div>;
};

export default Tag;
