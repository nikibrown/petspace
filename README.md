# Calendly Frontend Engineer Interview Exercise

## 🐱 🐶 🐸 PetSpace

```
🧑‍💻 Niki Brown
📧 hi@nikibrown.com
```

## Install dependencies

```bash
cd ~/location-of-project
npm install
```

## Run the development server:

```bash
npm run dev
```

Site should run locally at [http://localhost:8000](http://localhost:8000)

1.  **Design file / wireframe**

First step after reading the exercise description was to quickly generate a high-fidelity wireframe 🎨
[View Figma File](https://www.figma.com/file/VBTEyz2KlkpuLCz5GX38Ly/PetSpace?type=design&node-id=1%3A2&mode=design&t=TtCf1lqRhzqHMvId-1)

2. \*\* Create Content Model in Contentful

Keeping scaling in mind I created three content types in relation to the initial information offered.

-   Species - since this will scale beyond dog breeds. Species currently include cats, dogs and reptiles.
-   Breeds - Breeds are a subset of species.
-   Individual Animals - These are individual animals that are available for adoption.

When adding new animals and breeds, I created reference fields to help aid with URL creation and querying related content.

-   Species reference Breeds
-   Breeds reference individual animals

3. **Development**

-   Used the Gatsby CLI to create a site and set things up with Contentful, Styled Components, Typescript
-   Still working through some typescript errors

4. **🚀 Deploy**

-   Deployed to Gatsby Cloud: [https://petspace.gatsbyjs.io/](petspace.gatsbyjs.io)
