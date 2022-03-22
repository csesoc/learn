<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal TypeScript starter
</h1>

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
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

## CSESoc Dev
Right now we are using Gatsby to render mdx articles. You can find all the articles in `/src/assets/pubs_data`. All of the frontmatter (things in between `---`) must be included for the page to render. All components are in `/src/components`, and we are using modular styles which are put in `/src/styles`. Take a look in any component or page to see how styles are loaded in. Note that every page/component has their own styles. Please follow naming conventino `<Page/Component name>.module.css`

### MDX pages
Things to note
- THe frontmatter field `description` is what goes both in the prview card on the home page and in a `<meta>` taag to help with SEOE
- Tags in the frontmatter field need to be comma separated values, avoid putting spaces before or aftereach tag i.e follow `tags: "Something,Something2"` not `tags: "Something , Something2"`
- Image is the cover photo of the card/article, ensure that the path to the image is relative to the `{mdx.slug}.tsx` file
- Any images should be put in the `/src/assets/pubs_images` folder. If they are a cover photo, please name them the same as the slug for the mdx article but with [jpg|png] extension