<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  CSESoc Learning Platform
</h1>

## Feature list


- *Article content

    - progress bar

    - table of contents / outline sidebar like docusaurus, digitalocean, gatsby, pyodide

- Content Management System (Headless) (Third party service)

    - Strapi, Ghost (recommended), ContentFul (generous free tier), Netlify CMS (generous free tier), ...

- Nav: Logo (Publication), Publication, Creators, About

- *Pages

    - Home page / Posts page (”Latest”, “Publication”, “Learn”, “Discover”)

        - Order options: latest, earliest, top rated

        - Filter options: by tags, by author

        - Pagination / “load more”

    - Post page

    - About page

    - Outreach page

- User interactions

    - Likes (third party e.g. disqus, or database and server)

    - Comments (third party e.g. disqus, or database and server)

- Social media sharing

    - Icons on post page, sticky icons

- Search

- *SEO best practices (title tag, meta tags, canonical URLs, static assets etc)

- Google Analytics

- RSS feed generation

*prioritise in initial MVP


## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd learning-platform/
    npm install
    npm start
    ```

2.  **Open the code and start customizing**

    Your site is now running at http://localhost:8000
    See a GraphQL playground at http://localhost:8000/__graphql

## CSESoc Dev
Right now we are using Gatsby to render mdx articles. You can find all the articles in `/src/assets/pubs_data`. All of the frontmatter (things in between `---`) must be included for the page to render. All components are in `/src/components`, and we are using modular styles which are put in `/src/styles`. Take a look in any component or page to see how styles are loaded in. Note that every page/component has their own styles. Please follow naming conventino `<Page/Component name>.module.css`.

Note that we are using typescript to ensure type safety, if you leave something as `any` type ur getting kicked.

By default, Gatsby uses GraphQL to collect api data. You will notice down the bottom of pages such as `index.tsx` and `{mdx.slug}` there is a GraphQL query. What this is collecting should be pretty self explanatory, but pretty much Gatsby executes that query and then injects it's data into the parameters for the corresponding page. After starting the dev server, go to `http://localhost:8000/__graphql` to test out building some queries yourself.

### `{mdx.slug}.tsx`
This page is what renders each article. The page slug (url) will be whatever you name the mdx file, i.e. `mango-smoothie.mdx` can be found at `http://localhost:8000/mango-smoothie`. You'll notice there's a Graphql query at the bottom of the `{mdx.slug}.tsx` page and this uses the `slug` param to find relevant article.

Things to note
- THe frontmatter field `description` is what goes both in the prview card on the home page and in a `<meta>` taag to help with SEO
- Tags in the frontmatter field need to be comma separated values, avoid putting spaces before or aftereach tag i.e follow `tags: "Something,Something2"` not `tags: "Something , Something2"`
- Images should be hosted on imgur and when needed, embed them using ![]() syntax for markdown
- Cover photos should also be hosted on imgur and their links should be put in the `coverImage` field of the mdx
  - Ensure that you don't use the `https://imgur.com/a/NAx7QmS` link, use the `https://i.imgur.com/xSjOIQ3.jpeg` link which you find by right clicking and selecting copy image address