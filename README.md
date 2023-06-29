# Calendly Frontend Engineer Interview Exercise

## 🐱 🐶 🐸 🐦 PetSpace

```
🧑‍💻 Niki Brown
📧 hi@nikibrown.com
```

# View site

I've deployed this site to Gatsby Cloud: [https://bit.ly/petspace-nb](https://bit.ly/petspace-nb)

# Local setup

-   Github repository: [https://github.com/nikibrown/petspace](https://github.com/nikibrown/petspace)

```bash
git clone git@github.com:nikibrown/petspace.git
cd ~/location-of-project
npm install
```

-   Create `.env.development` and `.env.production` files in the root of the project and import Contentful API keys

# Build and run the project

```bash
npm run build && npm run serve
```

This builds and serves the site at [http://localhost:9000](http://localhost:9000)

# Process

## Design file / wireframe

---

First step after reading the exercise description was to quickly generate a high-fidelity wireframe 🎨

-   [Figma list page wireframe](https://www.figma.com/file/VBTEyz2KlkpuLCz5GX38Ly/PetSpace?type=design&node-id=1%3A2&mode=design&t=TtCf1lqRhzqHMvId-1)
-   [Figma breed page wireframe](https://www.figma.com/file/VBTEyz2KlkpuLCz5GX38Ly/PetSpace?type=design&node-id=0-1&mode=design)

## Content Model in Contentful

---

With scaling in mind I created three content types

-   **Species**: since this will scale beyond dog breeds. Species currently include cats, dogs and reptiles and birds.
-   **Breeds**: Breeds are a subset of species.
-   **Individual Animals**: Animals are a subset of breeds

-   When adding new animals and breeds, I created reference fields to associate content for list pages as well as to provide page context for URL creation with the structure of `/{species}/{breed}/{individual-animal}`

    -   Species reference Breeds
    -   Breeds reference individual animals

-   I also added help text to most fields to explain the purpose and aid in usability for content creators. Surprisingly this help text is lacking in other headless CMS solutions I have used (Prismic)

## Development

---

-   Set up `designTokens` for use with styled components to enable consistent and reusable brand colors, spacing, type sizes and typefaces
-   Set up reusable utility components for layout: `<Container>`, `<FlexRow>`, `<Section>` with variations for layouts etc.
-   Moved reusable chunks of code to components for future scalability
-   For content scalability, I used Gatsby `createPages` function to dynamically generate pages. The Gatsby File System Route API allows for dynamic slug naming for individual content would not work with the URL structure `/{species}/{breed}/{individual-animal}` I had in mind.

## Issues

---

-   I ran into some issues initially with my reference fields creating circular dependencies causing build errors. I updated the fields to only have references from parent => children content.
-   I also decided to rename some contentful fields to make things less confusing. There are still a few fields that have confusing API names.
-   There are still a few TypeScript warnings when I run the typecheck. I'm admittedly a bit newer to TypeScript but actively working on learning more.

## Further Development

---

-   Overall this was a fun exercise that helped me refresh my knowledge of Contentful, Gatsby and TypeScript.
-   If allowed more time I would flesh out the design more. I initially spend 10 minutes making a high-ish fidelity wireframe.
-   With more time I would obviously fix TypeScript errors and probably spend more time working on the content model before developing.
-   I Would also take another look at how pages are generated in `gatsby-node.ts` I know having nested `forEach` loops might cause a performance issue. This is the only way I could think of generating the pages while providing `pageContext` to help generate the URL structure of: `/{species}/{breed}/{individual-animal}`
-   I would consider adding an image slider to the single breed and single animal pages.
-   I would also consider adding pagination to the list view page.
-   SEO: I would add individual fields for SEO metadata to the content model. For the sake of time, I generated titles and meta descriptions from the content model to keep things simple. I would also add OpenGraph data so pages could be shared on social networks.
