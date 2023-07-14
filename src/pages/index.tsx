import * as React from "react"
import { graphql } from "gatsby"
import type { IGatsbyImageData } from "gatsby-plugin-image"

// components & ui
import Card from "../components/Card"
import Layout from "../components/Layout"
import {
    Section,
    Container,
    FlexContainer,
    Heading,
    Text,
    PageLink,
    List,
    ListItem,
} from "../components/ui"

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
                    featuredBreed?: "Featured" | "Standard"
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
                    <Text variant="lead">
                        Welcome to PetSpace, your social network for pets. Here
                        you can learn about pet species, breeds and adoptable
                        pets.
                    </Text>

                    <List>
                        <ListItem variant="inline">Jump to: </ListItem>
                        {data.allContentfulSpecies.nodes.map((speciesData) => (
                            <ListItem variant="inline" key={speciesData.id}>
                                <PageLink to={`/#${speciesData.slug}s`}>
                                    {speciesData.speciesType}s
                                </PageLink>
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Section>

            {data.allContentfulSpecies.nodes.map((speciesData) => (
                <Section key={speciesData.slug}>
                    <Container>
                        <Heading variant="heading2" as="h2">
                            <span id={`${speciesData.slug}s`}>
                                {speciesData.speciesType} Breeds:{" "}
                            </span>
                        </Heading>

                        <FlexContainer variant="spacebetween">
                            {speciesData.breeds?.map((breedData) => (
                                <Card
                                    cardData={breedData}
                                    url={`/${speciesData.slug}s/${breedData.slug}`}
                                    key={breedData.slug}
                                    featured={breedData.featuredBreed}
                                />
                            ))}
                        </FlexContainer>
                    </Container>
                </Section>
            ))}
        </Layout>
    )
}

export default ListPage

export const query = graphql`
    query {
        allContentfulSpecies(sort: { speciesType: DESC }) {
            nodes {
                speciesType
                slug
                id
                breeds {
                    featuredBreed
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
