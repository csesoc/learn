import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

const BlogPost = ({ data }: any) => {
    const image = getImage(data.mdx.frontmatter.hero_image);

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            {image && (
                <GatsbyImage
                    image={image}
                    alt={data.mdx.frontmatter.hero_image_alt}
                />
            )}
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
            body
            slug
        }
    }
`;

export default BlogPost;
