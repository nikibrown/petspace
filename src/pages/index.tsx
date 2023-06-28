import * as React from "react"
import styled from "styled-components"
import { HeadFC, graphql } from "gatsby"
import { Link as TextPageLink } from "gatsby"
import Card from "../components/Card"
import FlexRow from "../components/utilities/FlexRow"
import Layout from "../components/Layout"
import Section from "../components/utilities/Section"
import { designTokens } from "../components/designTokens"

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

const PageLink = styled(TextPageLink)`
    color: ${designTokens.colors.brandPrimary};
    text-decoration: none;
    &:hover {
        text-decoraton: underline;
    }
`

export const Head: HeadFC = () => (
    <>
        <title>PetSpace</title>
        <meta
            name="description"
            content="Your place to learn about various pet species and breeds"
        />
    </>
)

const ListPage: React.FC<ListPageProps> = ({ data }) => {
    return (
        <Layout>
            <Section>
                <h1>Pet Species</h1>

                <SpeciesList>
                    <SpeciesListItem>Jump to: </SpeciesListItem>
                    {data.allContentfulSpecies.nodes.map((speciesData) => (
                        <SpeciesListItem key={speciesData.id}>
                            <PageLink to={`/#${speciesData.slug}s`}>
                                {speciesData.speciesType}s
                            </PageLink>
                        </SpeciesListItem>
                    ))}
                </SpeciesList>
            </Section>

            {data.allContentfulSpecies.nodes.map((speciesData) => (
                <Section key={speciesData.slug}>
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
                </Section>
            ))}
        </Layout>
    )
}

export default ListPage
