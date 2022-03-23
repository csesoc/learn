/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    siteMetadata: {
        title: `CSESoc Learning Platform`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-image",
        `gatsby-transformer-sharp`,
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `pubs_data`,
                path: `${__dirname}/src/assets/pubs_data`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `publication_images`,
                path: `${__dirname}/src/assets/pubs_images`,
            },
        },
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: ["Raleway", "Inter"],
                // plugins: [
                //     {
                //         resolve: `gatsby-remark-prismjs`,
                //         options: {},
                //     },
                // ],
            },
        },
        "gatsby-plugin-react-helmet",
    ],
};
