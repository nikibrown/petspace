import * as React from "react"
import { graphql } from "gatsby"
import { Link as TextPageLink } from "gatsby"
import type { PageProps } from "gatsby"

// components
import Card from "../components/Card"
import { FlexRowStart } from "../components/utilities/FlexRow"
import Layout from "../components/Layout"
import Section from "../components/utilities/Section"

// types
import type { Species } from "../types/types"

// styles
import styled from "styled-components"
import { designTokens } from "../components/designTokens"

type GraphQLResult = {
    allContentfulSpecies: {
        nodes: Species[]
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

const ListPage = ({ data }: PageProps<GraphQLResult>) => {
    return (
        <Layout>
            <Section>
                <Intro>
                    Welcome to PetSpace, your social network for pets. Here you
                    can learn about pet species, breeds and adoptable pets.
                </Intro>

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

                    <FlexRowStart>
                        {speciesData.breeds?.map((breedData) => (
                            <Card
                                cardData={breedData}
                                url={`/${speciesData.slug}s/${breedData.slug}`}
                                key={breedData.slug}
                            />
                        ))}
                    </FlexRowStart>
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

const PageLink = styled(TextPageLink)`
    color: ${designTokens.colors.brandPrimary};
    text-decoration: none;
    &:hover {
        text-decoraton: underline;
    }
`
