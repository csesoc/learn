/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    siteMetadata: {
        title: `CSESoc Learning Platform`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `publications_data`,
                path: `${__dirname}/src/assets/pubs_data`,
            },
        },
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: ["Raleway"],
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {},
                    },
                ],
            },
        },
        "gatsby-plugin-react-helmet",
    ],
};
