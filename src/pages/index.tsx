import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PostCard from "../components/PostCard";
import "../styles/globals.css";
import { Item } from "@radix-ui/react-dropdown-menu";

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
            edges: {
                node: Node;
            }[];
        };
    };
};

const Publications = ({ data }: PropTypes) => {
    const [articles, setArticles] = useState<ArticlePreview[]>([]);
    const [filteredArticles, setFilteredArticles] =
        useState<ArticlePreview[]>();

    return (
        <Layout pageTitle="Home page">
            {data &&
                data.allMdx &&
                data.allMdx.edges &&
                data.allMdx.edges.map(
                    ({ node }: { node: Node }, index: number) => {
                        console.log(data, node);
                        return (
                            <PostCard
                                title={node.frontmatter.title}
                                description={node.frontmatter.description}
                                tags={node.frontmatter.tags.split("")}
                                image={node.frontmatter.image}
                                headingCard={false}
                                date={node.frontmatter.date}
                                slug={node.slug}
                            />
                        );
                    }
                )}
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
                    slug
                }
            }
        }
    }
`;

export default Publications;
