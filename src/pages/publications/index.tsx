import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";

type Node = {
    frontmatter: {
        date: Date;
        title: string;
    };
    slug: string;
    id: string;
};

type PropTypes = {
    data: {
        allMdx: {
            nodes: Node[];
        };
    };
};

const Publications = ({ data }: PropTypes) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {data &&
                data.allMdx &&
                data.allMdx.nodes &&
                data.allMdx.nodes.map((node: Node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/publications/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>
                ))}
        </Layout>
    );
};

/*
 * Pages make graphql queries using "page queries" like so.
 * This queried data is fed into the page component on initial render.
 */
export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                slug
            }
        }
    }
`;

export default Publications;
