import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import * as styles from "../styles/publicationPage.module.css";

const BlogPost = ({ data }: any) => {
    const image = getImage(data.mdx.frontmatter.hero_image);

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <Helmet>
                <meta
                    name="description"
                    content={data.mdx.frontmatter.description}
                />
                <meta name="title" content={data.mdx.frontmatter.title} />
            </Helmet>
            {image && (
                <GatsbyImage
                    image={image}
                    alt={data.mdx.frontmatter.hero_image_alt}
                />
            )}
            <div className={styles.container}>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            id
            frontmatter {
                date
                title
                description
                coverImage
                tags
                author
            }
            body
            slug
        }
    }
`;

export default BlogPost;
