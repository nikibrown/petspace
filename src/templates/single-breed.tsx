import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import {
    renderRichText,
    RenderRichTextData,
    ContentfulRichTextGatsbyReference,
} from "gatsby-source-contentful/rich-text"
import { graphql } from "gatsby"

// components & ui
import Card from "../components/Card"
import Layout from "../components/Layout"
import Stats from "../components/Stats"
import {
    Section,
    Container,
    FlexContainer,
    Heading,
    PageLink,
    Text,
    Column,
} from "../components/ui"

// styles
import styled from "styled-components"

interface SingleBreedProps {
    data: {
        contentfulBreed: {
            id: string
            slug: string
            breedFriendliness: number
            breedDescription: RenderRichTextData<ContentfulRichTextGatsbyReference>
            breedLifeExpectancyMax: number
            breedLifeExpectancyMin: number
            breedName: string
            species: {
                speciesType: string
            }
            breedPhoto?: {
                gatsbyImageData: IGatsbyImageData
            }
            breedShedding: number
            animalsForAdoption?: {
                id: string
                slug: string
                animalName: string
                animalPhoto: {
                    gatsbyImageData: IGatsbyImageData
                }
            }[]
        }
    }
    pageContext: {
        slug: string
        parentSlug: string
        parentSpecies: string
    }
}

export const Head = ({ data, pageContext }: SingleBreedProps) => (
    <>
        <title>
            {pageContext.parentSpecies}s - {data.contentfulBreed.breedName}
        </title>
        <meta
            name="description"
            content={`Your place to learn about ${data.contentfulBreed.breedName} ${pageContext.parentSpecies}s`}
        />
    </>
)

const BreedSinglePage = ({ data, pageContext }: SingleBreedProps) => {
    // object to pass to <Stats> component
    const statData = {
        breedLifeExpectancyMin: data.contentfulBreed.breedLifeExpectancyMin,
        breedLifeExpectancyMax: data.contentfulBreed.breedLifeExpectancyMax,
        breedFriendliness: data.contentfulBreed.breedFriendliness,
        breedShedding: data.contentfulBreed.breedShedding,
    }

    return (
        <Layout>
            <Section>
                <Container>
                    <Text>
                        <PageLink to={`/`}>
                            &larr; Back to Species List
                        </PageLink>
                    </Text>

                    <Heading variant="heading1" as="h1">
                        {pageContext.parentSpecies}:{" "}
                        {data.contentfulBreed.breedName}
                    </Heading>
                </Container>
            </Section>

            <Section>
                <Container>
                    {data.contentfulBreed.breedPhoto && (
                        <GatsbyImage
                            image={getImage(
                                data.contentfulBreed.breedPhoto.gatsbyImageData
                            )}
                            alt={data.contentfulBreed.breedName}
                        />
                    )}
                </Container>
            </Section>

            <Section>
                <Container>
                    <FlexContainer>
                        <Column>
                            {renderRichText(
                                data.contentfulBreed.breedDescription
                            )}
                        </Column>
                        <Column>
                            <Stats statData={statData} />
                        </Column>
                    </FlexContainer>
                </Container>
            </Section>

            {data.contentfulBreed.animalsForAdoption && (
                <Section variant="offWhite">
                    <Container>
                        <div className="animals-for-adoption">
                            <Heading variant="heading2" as="h2">
                                Adopt a {data.contentfulBreed.breedName}{" "}
                                {pageContext.parentSpecies} today!
                            </Heading>
                            <FlexContainer>
                                {data.contentfulBreed.animalsForAdoption.map(
                                    (animalData) => (
                                        <Card
                                            cardData={animalData}
                                            url={`/${pageContext.parentSlug}s/${data.contentfulBreed.slug}/${animalData.slug}`}
                                            key={animalData.slug}
                                        />
                                    )
                                )}
                            </FlexContainer>
                        </div>
                    </Container>
                </Section>
            )}
        </Layout>
    )
}

export default BreedSinglePage

export const query = graphql`
    query ($slug: String) {
        contentfulBreed(slug: { eq: $slug }) {
            id
            slug
            breedName
            breedPhoto {
                gatsbyImageData(layout: FULL_WIDTH)
            }
            breedShedding

            breedLifeExpectancyMin
            breedLifeExpectancyMax
            breedFriendliness
            breedDescription {
                raw
            }
            animalsForAdoption {
                featured
                id
                animalName
                slug
                animalPhoto {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
    }
`
