import path from "path"
import { GatsbyNode, Actions, CreatePagesArgs } from "gatsby"

type GraphQLResult = {
    allContentfulSpecies: {
        nodes: {
            slug: string
            id: string
            speciesType: string
            breeds: {
                breedName: string
                slug: string
                id: string
                animalsForAdoption: {
                    slug: string
                    id: string
                }[]
            }[]
        }[]
    }
}

export const createPages: GatsbyNode["createPages"] = async ({
    graphql,
    actions,
    reporter,
}: CreatePagesArgs) => {
    const { createPage } = actions as Actions

    const result = await graphql<GraphQLResult>(`
        {
            allContentfulSpecies {
                nodes {
                    slug
                    id
                    speciesType
                    breeds {
                        breedName
                        slug
                        id
                        animalsForAdoption {
                            slug
                            id
                        }
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

    if (!result.data) {
        throw new Error("Failed to get pages.")
    }

    const queryResult = result.data.allContentfulSpecies.nodes

    const singleBreed = path.resolve("./src/templates/single-breed.tsx")
    const singleAnimal = path.resolve("./src/templates/single-animal.tsx")

    // loop through data rsults so we can use createPage to make paths and associate with components
    // loop through each species so have have access to the slub
    queryResult.forEach((singularSpecies) => {
        // loop through breeds for each species so we have access to breeds slug
        singularSpecies.breeds?.forEach((singularBreed) => {
            createPage({
                path: `/${singularSpecies.slug}s/${singularBreed.slug}/`,
                component: singleBreed,
                context: {
                    slug: singularBreed.slug,
                    parentSlug: singularSpecies.slug,
                    parentSpecies: singularSpecies.speciesType,
                },
            })

            // loop through each animal for each breed so we have access to animal slug
            singularBreed.animalsForAdoption?.forEach((singularAnimal) => {
                createPage({
                    path: `/${singularSpecies.slug}s/${singularBreed.slug}/${singularAnimal.slug}`,
                    component: singleAnimal,
                    context: {
                        slug: singularAnimal.slug,
                        parentBreedSlug: singularBreed.slug,
                        parentBreed: singularBreed.breedName,
                        parentSpecies: singularSpecies.speciesType,
                        parentSpeciesSlug: singularSpecies.slug,
                    },
                })
            })
        })
    })
}

// import path from "path"
// import { GatsbyNode, Actions, CreatePagesArgs } from "gatsby"

// interface AnimalForAdoption {
//     slug: string
//     id: string
// }

// interface Breed {
//     slug: string
//     id: string
//     breedName: string
//     animalsForAdoption: AnimalForAdoption[]
// }

// interface Node {
//     slug: string
//     id: string
//     speciesType: string
//     breeds: Breed[]
// }

// interface QueryResult {
//     errors?: any[]
//     allContentfulSpecies: {
//         nodes: Node[]
//     }
// }

// export const createPages: GatsbyNode["createPages"] = async ({
//     graphql,
//     actions,
//     reporter,
// }: CreatePagesArgs) => {
//     const { createPage } = actions as Actions

//     const result = await graphql<QueryResult>(`
//         query PageQuery {
//             allContentfulSpecies {
//                 nodes {
//                     slug
//                     id
//                     speciesType
//                     breeds {
//                         breedName
//                         slug
//                         id
//                         animalsForAdoption {
//                             slug
//                             id
//                         }
//                     }
//                 }
//             }
//         }
//     `)

//     if (result.errors) {
//         reporter.panicOnBuild(
//             `There was an error loading your Contentful posts`,
//             result.errors
//         )
//         return
//     }

//     const queryResult = result.data.allContentfulSpecies.nodes || []

//     const singleBreed = path.resolve("./src/templates/single-breed.tsx")
//     const singleAnimal = path.resolve("./src/templates/single-animal.tsx")

//     // loop through data rsults so we can use createPage to make paths and associate with components
//     // loop through each species so have have access to the slub
//     queryResult.forEach((singularSpecies) => {
//         // loop through breeds for each species so we have access to breeds slug
//         singularSpecies.breeds?.forEach((singularBreed) => {
//             createPage({
//                 path: `/${singularSpecies.slug}s/${singularBreed.slug}/`,
//                 component: singleBreed,
//                 context: {
//                     slug: singularBreed.slug,
//                     parentSlug: singularSpecies.slug,
//                     parentSpecies: singularSpecies.speciesType,
//                 },
//             })

//             // loop through each animal for each breed so we have access to animal slug
//             singularBreed.animalsForAdoption?.forEach((singularAnimal) => {
//                 createPage({
//                     path: `/${singularSpecies.slug}s/${singularBreed.slug}/${singularAnimal.slug}`,
//                     component: singleAnimal,
//                     context: {
//                         slug: singularAnimal.slug,
//                         parentBreedSlug: singularBreed.slug,
//                         parentBreed: singularBreed.breedName,
//                         parentSpecies: singularSpecies.speciesType,
//                         parentSpeciesSlug: singularSpecies.slug,
//                     },
//                 })
//             })
//         })
//     })
// }
