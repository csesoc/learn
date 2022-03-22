# CSESoc Learning Platform
Written in Gatsby, using GraphQL to collect mdx articles from local filesystem and render them as individual pages.
## Quick start

1.  **Start developing.**

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
This page is what renders each article. The page slug (url) will be whatever you name the mdx file, i.e. `mango-smoothie.mdx` can be found at 

Things to note
- THe frontmatter field `description` is what goes both in the prview card on the home page and in a `<meta>` taag to help with SEOE
- Tags in the frontmatter field need to be comma separated values, avoid putting spaces before or aftereach tag i.e follow `tags: "Something,Something2"` not `tags: "Something , Something2"`
- Image is the cover photo of the card/article, ensure that the path to the image is relative to the `{mdx.slug}.tsx` file
- Any images should be put in the `/src/assets/pubs_images` folder. If they are a cover photo, please name them the same as the slug for the mdx article but with [jpg|png] extension