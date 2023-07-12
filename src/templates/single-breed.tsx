import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image"

import {
    renderRichText,
    RenderRichTextData,
    ContentfulRichTextGatsbyReference,
} from "gatsby-source-contentful/rich-text"
import { graphql } from "gatsby"

// components
import Card from "../components/Card"
import Layout from "../components/Layout"
import PageLink from "../components/PageLink"
import { Section, Container, Flex } from "../components/ui"
import Stats from "../components/Stats"

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
                    <p>
                        <PageLink url={`/`}>
                            &larr; Back to Species List
                        </PageLink>
                    </p>

                    <h1>
                        {pageContext.parentSpecies}:{" "}
                        {data.contentfulBreed.breedName}
                    </h1>
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
                    <Flex>
                        <TextColumn>
                            {renderRichText(
                                data.contentfulBreed.breedDescription
                            )}
                        </TextColumn>
                        <Stats statData={statData} />
                    </Flex>
                </Container>
            </Section>

            <Section>
                <Container>
                    {data.contentfulBreed.animalsForAdoption && (
                        <div className="animals-for-adoption">
                            <h2>
                                Adopt a {data.contentfulBreed.breedName}{" "}
                                {pageContext.parentSpecies} today!
                            </h2>
                            <Flex>
                                {data.contentfulBreed.animalsForAdoption.map(
                                    (animalData) => (
                                        <Card
                                            cardData={animalData}
                                            url={`/${pageContext.parentSlug}s/${data.contentfulBreed.slug}/${animalData.slug}`}
                                            key={animalData.slug}
                                        />
                                    )
                                )}
                            </Flex>
                        </div>
                    )}
                </Container>
            </Section>
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

const TextColumn = styled.div`
    flex: 1 0 100%;
    @media screen and (min-width: 1200px) {
        flex: 0 1 calc(50% - 1em);
    }
`
