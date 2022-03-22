import { Link } from "gatsby";
import React from "react";
import Tag from "./Tag";

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
    slug,
}: Params) => {
    return (
        <article>
            <Link to={`/${slug}`}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div>
                    <div>{date}</div>
                    {tags &&
                        tags.map((tag, index) => {
                            <Tag title={tag} key={index} />;
                        })}
                </div>
            </Link>
        </article>
    );
};

export default PostCard;
