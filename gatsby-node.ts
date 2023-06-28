import path from "path"
import { GatsbyNode } from "gatsby"

interface ContentfulBreed {
    slug: string
    species?: {
        slug: string
    }
}

interface ContentfulAnimal {
    slug: string
    speciesType?: {
        slug: string
    }
    breedType?: {
        slug: string
    }
}

interface QueryResult {
    errors?: any[]
    data: {
        allContentfulBreed?: {
            nodes: ContentfulBreed[]
        }
        allContentfulAnimals?: {
            nodes: ContentfulAnimal[]
        }
    }
}

export const createPages: GatsbyNode["createPages"] = async ({
    graphql,
    actions,
    reporter,
}) => {
    const { createPage } = actions

    // Define a template for blog post
    const singleBreed = path.resolve("./src/templates/single-breed.tsx")
    const singleAnimal = path.resolve("./src/templates/single-animal.tsx")

    const result = await graphql<QueryResult>(`
        query PageQuery {
            allContentfulBreed {
                nodes {
                    slug
                    species {
                        slug
                    }
                }
            }
            allContentfulAnimals {
                nodes {
                    slug
                    speciesType {
                        slug
                    }
                    breedType {
                        slug
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your Contentful posts`,
            result.errors
        )
        return
    }

    const breeds = result?.data?.allContentfulBreed?.nodes
    const animals = result?.data?.allContentfulAnimals?.nodes

    // Create single breed detail pages
    // But only if there's at least one breed page found in Contentful
    // `context` is available in the template as a prop and as a variable in GraphQL

    breeds?.forEach((breed) => {
        createPage({
            path: `/${breed?.species?.slug}/breed/${breed.slug}/`,
            component: singleBreed,
            context: {
                slug: breed.slug,
                id: breed.id,
            },
        })
    })

    animals?.forEach((animal) => {
        createPage({
            path: `/${animal?.speciesType?.slug}/breed/${animal?.breedType?.slug}/${animal.slug}/`,
            component: singleAnimal,
            context: {
                slug: animal.slug,
                id: animal.id,
            },
        })
    })
}
