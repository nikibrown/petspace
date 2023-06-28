import * as React from "react"
import { HeadFC, Link, graphql } from "gatsby"
import Card from "../components/Card"
import Layout from "../components/Layout"

interface ListPageProps {
    data: {
        allContentfulSpecies: {
            nodes: {
                speciesType: string
                slug: string
                id: string
                breeds: {
                    slug: string
                    breedName: string
                    breedSummary: {
                        raw: string
                    }
                    breedPhoto: {
                        description: string
                        gatsbyImageData: {
                            layout: string
                        }
                    }
                }[]
            }[]
        }
    }
}

export const query = graphql`
    query MyQuery {
        allContentfulSpecies(sort: { speciesType: ASC }) {
            nodes {
                speciesType
                slug
                id
                breeds {
                    slug
                    breedName
                    breedSummary {
                        raw
                    }
                    breedPhoto {
                        description
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`

export const Head: HeadFC = () => (
    <title>PetSpace - your place to learn about pet species and breeds</title>
)

const ListPage: React.FC<ListPageProps> = ({ data }) => {
    return (
        <Layout>
            <h1>Pet Species</h1>

            <ul>
                {data.allContentfulSpecies.nodes.map((speciesData) => (
                    <li key={speciesData.id}>
                        <Link to={`/#${speciesData.slug}s`}>
                            {speciesData.speciesType}s
                        </Link>
                    </li>
                ))}
            </ul>

            {data.allContentfulSpecies.nodes.map((speciesData) => (
                <div key={speciesData.slug}>
                    <h2 id={`${speciesData.slug}s`}>
                        {speciesData.speciesType} Breeds:{" "}
                    </h2>

                    <div className="cards">
                        {speciesData.breeds.map((breedData) => (
                            <Card
                                cardData={breedData}
                                url={`/${speciesData.slug}/breed/${breedData.slug}`}
                                key={breedData.slug}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </Layout>
    )
}

export default ListPage
