# Learning Platform

![GitHub header](https://user-images.githubusercontent.com/33971845/168602873-3746dc75-1271-4f26-8c55-54e68916a90e.png)



A place for the CSESoc community to learn and share their knowledge and expertise.

> 🌈 **Status update:**<br> Creating a generic system for publishing course revision exercises

> 🎨 **Design system**:<br> CSESoc Learn has its own design system with components + tokens. The Figma file is [here](https://www.figma.com/file/l5z96D2EHE5VNz3nayZ9Ht/Design-System?node-id=11%3A4381).

## Features
> For more details, see the relevant [wiki page](https://github.com/csesoc/learning-platform/wiki/Architecture).
- Support for a wide variety of content types via Contentlayer
- Beautiful UI/UX inspired by Medium and technical sites
- Spotlight-style search via Stork
- Ergonomic content creation workflow powered by MDX
- Convenient content sorting and filtering options

## Getting Started
> For detailed instructions, see [here](https://github.com/csesoc/learning-platform/wiki/Getting-started).  


1. Clone this repo
2. `yarn install` to install all dependencies
3. `yarn build` to generate an optimised version of the application for production
4. `yarn start` to start the local server

## Vision ⚡️

CSESoc is where students gather to socialise and extend their technical knowledge outside the classroom. Educational content has previously been delivered via workshops. However, this limits people who're uncomfortable with holding workshops, or want to contribute in other formats, from contributing.

CSESoc Learn empowers students from various backgrounds to contribute to the wider CSE community by:
- opening up new formats of contributing such as articles, tutorials and videos
- providing an ergonomic content creation experience, allowing creators to focus on what they do best

CSESoc Learn also focuses strongly on delightful UI/UX, driving engagement and raising the bar for learning experiences at CSESoc.

## Code style

[Prettier](https://prettier.io/) and [StandardJS](https://standardjs.com/) are used together for formatting and linting. They're configured in the repo.

## Tech stack
> For more details, see the relevant [wiki page](https://github.com/csesoc/learning-platform/wiki/Architecture).
- Framework: [Next.js](https://nextjs.org/) 
- Content: [MDX](https://mdxjs.com/) + [Contentlayer](https://www.contentlayer.dev/) 
- Language: [TypeScript](https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript/35048303#35048303)
- Styling: [Stitches](https://stitches.dev/)
- Markdown plugins (see [contentlayer.config.js](contentlayer.config.js)`)
  - rehypeCodeTitles,
  - rehypeHighlight,
  - rehypePrismPlus,
  - rehypeAutolinkHeadings,
  - rehypeSlug

## Documentation

See the [wiki](https://github.com/csesoc/learning-platform/wiki).

## Our team

We're CSESoc Education! Development is currently led by:

- [Max Xue](https://github.com/M-Xue)
- [Liam Smith](https://github.com/BinaryGamer)
- [Simon Nguyen](https://github.com/Allynixtor)
- [Maxwell Phillips](https://github.com/maxphillipsdev)
- [Jeffrey Yao](https://github.com/jeffreydyao)
- [Gordon Huang](https://github.com/dqna64)
- [Jasper Di Francesco](https://github.com/jasperdifran)

## Putting Course Revision Resources onto the Learning Platform

The Learning Platform has a standard format for publishing course revision materials. It assumes that a course revision campaign consists of a set of exercises that can be written in markdown.


In this *course-revision* folder observe that there are folders likes *1511-23T3* with mdx files inside. There is also a corresponding *1511-23T3.mdx* file next to the folder of the same name.

When you create a new course revision campaign, you **must** provide the following:

- An mdx file *course-revision/<course-offering>.mdx* which contains some info about this course revision campaign and how to get set up for the exercises (e.g. downloading some starter code). The <course-offering> should be replaced with the name of the course offering that this revision session is made for e.g. *1511-23T3* The fields you must provide in the yaml are:
  - title: Title of the course revision campaign (e.g. CSESoc COMP1511 Revision Practice Problems)
  - desc: Brief descriptoin of this course revision campaign (e.g. Practical coding exercises to help you prepare for your COMP1511 23T3 final exam)
  - course: (e.g. COMP1511) (Currently not used in the code)
  - offering: (e.g. 23T3) (Currently not used in the code)
- A folder *course-revision/<course-offering>* which contains mdx files for each exercise. The fields you must provide in the yaml are:
  - title: Title of the exercise (e.g. BST Difference)
  - desc: Brief description of exercise (e.g. Find the mininum distance between any two numbers in a binary search tree)
  - class: Which course this exercise is for (eg. COMP2521)
  - difficulty: Difficult rating (1=easy, 2=medium, 3=hard) (e.g. 2)

Note: Both the <course-offering>.mdx and <course-offering> folder **MUST** share the exact same name in order to work (e.g. file `1511-23T3.mdx` and folder `1511-23T3`)

Once you have uploaded these files you can navigate to them at the url */course-revision* (e.g. *learn.csesoc.org.au/course-revision* or *localhost:3000/course-revision*)
