import * as React from "react"
import { graphql } from "gatsby"
import type { IGatsbyImageData } from "gatsby-plugin-image"

// components
import Card from "../components/Card"
import Layout from "../components/Layout"
import PageLink from "../components/PageLink"
// import Section from "../components/utilities/Section"

// styles
import styled from "styled-components"
import { designTokens } from "../components/designTokens"

import { Section, Container, Flex } from "../components/ui"

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
                        gatsbyImageData: IGatsbyImageData
                    }
                }[]
            }[]
        }
    }
}

export const Head = () => (
    <>
        <title>PetSpace</title>
        <meta
            name="description"
            content="Your place to learn about various pet species and breeds"
        />
    </>
)

const ListPage = ({ data }: ListPageProps) => {
    return (
        <Layout>
            <Section>
                <Container>
                    <Intro>
                        Welcome to PetSpace, your social network for pets. Here
                        you can learn about pet species, breeds and adoptable
                        pets.
                    </Intro>

                    <SpeciesList>
                        <SpeciesListItem>Jump to: </SpeciesListItem>
                        {data.allContentfulSpecies.nodes.map((speciesData) => (
                            <SpeciesListItem key={speciesData.id}>
                                <PageLink url={`/#${speciesData.slug}s`}>
                                    {speciesData.speciesType}s
                                </PageLink>
                            </SpeciesListItem>
                        ))}
                    </SpeciesList>
                </Container>
            </Section>

            {data.allContentfulSpecies.nodes.map((speciesData) => (
                <Section key={speciesData.slug}>
                    <Container>
                        <h2 id={`${speciesData.slug}s`}>
                            {speciesData.speciesType} Breeds:{" "}
                        </h2>

                        <Flex variant="justifyFlexStart">
                            {speciesData.breeds?.map((breedData) => (
                                <Card
                                    cardData={breedData}
                                    url={`/${speciesData.slug}s/${breedData.slug}`}
                                    key={breedData.slug}
                                />
                            ))}
                        </Flex>
                    </Container>
                </Section>
            ))}
        </Layout>
    )
}

export default ListPage

export const query = graphql`
    query {
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

const Intro = styled.p`
    font-size: ${designTokens.fontSizes.medium};
    font-weight: ${designTokens.fontWeights.normal};
`
const SpeciesList = styled.ul`
    margin: 0;
    padding: 0;
`

const SpeciesListItem = styled.li`
    display: inline;
    margin-right: 20px;
`
