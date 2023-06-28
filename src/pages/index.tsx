import * as React from "react"
import styled from "styled-components"
import { HeadFC, Link, graphql } from "gatsby"
import Card from "../components/Card"
import FlexRow from "../components/utilities/FlexRow"
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

const SpeciesList = styled.ul`
    margin: 0;
    padding: 0;
`

const SpeciesListItem = styled.li`
    display: inline;
    margin-right: 20px;
`

export const Head: HeadFC = () => (
    <title>PetSpace - your place to learn about pet species and breeds</title>
)

const ListPage: React.FC<ListPageProps> = ({ data }) => {
    return (
        <Layout>
            <h1>Pet Species</h1>

            <SpeciesList>
                {data.allContentfulSpecies.nodes.map((speciesData) => (
                    <SpeciesListItem key={speciesData.id}>
                        <Link to={`/#${speciesData.slug}s`}>
                            {speciesData.speciesType}s
                        </Link>
                    </SpeciesListItem>
                ))}
            </SpeciesList>

            {data.allContentfulSpecies.nodes.map((speciesData) => (
                <div key={speciesData.slug}>
                    <h2 id={`${speciesData.slug}s`}>
                        {speciesData.speciesType} Breeds:{" "}
                    </h2>

                    <FlexRow>
                        {speciesData.breeds.map((breedData) => (
                            <Card
                                cardData={breedData}
                                url={`/${speciesData.slug}/breed/${breedData.slug}`}
                                key={breedData.slug}
                            />
                        ))}
                    </FlexRow>
                </div>
            ))}
        </Layout>
    )
}

export default ListPage
