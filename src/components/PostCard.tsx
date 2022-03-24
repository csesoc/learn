import { Link } from "gatsby";
import React from "react";
import Tag from "./Tag";
import * as styles from "../styles/PostCard.module.css";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

type Params = {
    title: string;
    description: string;
    tags: string[];
    headingCard: boolean;
    date: Date;
    image: string;
    slug: string;
};

const PostCard = ({
    title,
    description,
    tags,
    headingCard,
    date,
    image,
    slug,
}: Params) => {
    console.log(date.toString());
    return (
        <article>
            <Link to={`/${slug}`} className={styles.linkContainer}>
                <section className={styles.leftContainer}>
                    <header className={styles.cardTitle}>{title}</header>
                    <p className={styles.description}>{description}</p>
                    <footer className={styles.footerContainer}>
                        <div>
                            {date.getDate()}{" "}
                            {date.toLocaleDateString("default", {
                                month: "short",
                            })}{" "}
                            {date.getFullYear()}
                        </div>
                        |
                        {tags &&
                            tags.map((tag, index) => {
                                return <Tag title={tag} key={index} />;
                            })}
                    </footer>
                </section>
                <div
                    style={{
                        backgroundImage: `url("${image}")`,
                        backgroundSize: "cover",
                        backgroundColor: "#ccc",
                    }}
                    className={styles.imageContainer}></div>
            </Link>
        </article>
    );
};

export default PostCard;
