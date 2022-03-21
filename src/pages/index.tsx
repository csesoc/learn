import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PostCard from "../components/PostCard";

type Node = {
    frontmatter: {
        date: Date;
        title: string;
        author: string;
        description: string;
        image: string;
        tags: string;
    };
    slug: string;
    id: string;
};

type ArticlePreview = {
    date: Date;
    title: string;
    author: string;
    description: string;
    image: string;
    tags: string[];
};

type PropTypes = {
    data: {
        allMdx: {
            nodes: Node[];
        };
    };
};

const Publications = ({ data }: PropTypes) => {
    const [articles, setArticles] = useState<ArticlePreview[]>([]);
    const [filteredArticles, setFilteredArticles] =
        useState<ArticlePreview[]>();

    useEffect(() => {
        setArticles(
            data &&
                data.allMdx &&
                data.allMdx.nodes &&
                data.allMdx.nodes.map((item, index): ArticlePreview => {
                    return {
                        date: item.frontmatter.date,
                        title: item.frontmatter.title,
                        author: item.frontmatter.author,
                        description: item.frontmatter.description,
                        image: item.frontmatter.image,
                        tags: item.frontmatter.tags.split(","),
                    };
                })
        );
    }, [data.allMdx.nodes]);

    return (
        <Layout pageTitle="Home page">
            {articles &&
                articles.map((item: ArticlePreview) => {
                    console.log(articles);
                    return (
                        <PostCard
                            title={item.title}
                            description={item.description}
                            tags={item.tags}
                            image={item.image}
                            headingCard={false}
                            date={item.date}
                        />
                    );
                })}
        </Layout>
    );
};

/*
 * Pages make graphql queries using "page queries" like so.
 * This queried data is fed into the page component on initial render.
 */
export const query = graphql`
    query {
        allMdx {
            edges {
                node {
                    frontmatter {
                        author
                        date
                        description
                        image
                        tags
                        title
                    }
                }
            }
        }
    }
`;

export default Publications;
