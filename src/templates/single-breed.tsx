import * as React from "react"
import Card from "../components/Card"
import { designTokens } from "../components/designTokens"
import FlexRow from "../components/utilities/FlexRow"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { HeadFC, graphql } from "gatsby"
import Layout from "../components/Layout"
import { Link as TextPageLink } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Section from "../components/utilities/Section"
import Stats from "../components/Stats"

import styled from "styled-components"

interface BreedSinglePageProps {
    data: {
        contentfulBreed: {
            id: string
            breedFriendliness: number
            breedDescription: {
                raw: string
            }
            breedLifeExpectancyMax: number
            breedLifeExpectancyMin: number
            breedName: string
            species: {
                speciesType: string
            }
            breedPhoto: {
                gatsbyImageData: IGatsbyImageData
            }
            breedShedding: number
            slug: string
            animalsForAdoption: {
                id: string
                slug: string
                animalName: string
                speciesType: {
                    slug: string
                }
                breedType: {
                    breedName: string
                }
                animalPhoto: {
                    gatsbyImageData: IGatsbyImageData
                }
                animalDescription: {
                    raw: string
                }
            }[]
        }
    }
}

export const query = graphql`
    query ($slug: String) {
        contentfulBreed(slug: { eq: $slug }) {
            id
            breedFriendliness
            breedDescription {
                raw
            }
            breedLifeExpectancyMax
            breedLifeExpectancyMin
            breedName
            species {
                speciesType
            }
            breedPhoto {
                gatsbyImageData(layout: FULL_WIDTH)
            }
            breedShedding
            slug
            animalsForAdoption {
                id
                slug
                animalName
                speciesType {
                    slug
                }
                breedType {
                    breedName
                }
                animalPhoto {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
                animalDescription {
                    raw
                }
            }
            species {
                slug
            }
        }
    }
`
export const Head: HeadFC = ({ data }) => (
    <>
        <title>
            {data.contentfulBreed.species.speciesType}s -{" "}
            {data.contentfulBreed.breedName}
        </title>
        <meta
            name="description"
            content={`Your place to learn about ${data.contentfulBreed.breedName} ${data.contentfulBreed.species.speciesType}s`}
        />
    </>
)

const PageLink = styled(TextPageLink)`
    color: ${designTokens.colors.brandPrimary};
    text-decoration: none;
    &:hover {
        text-decoraton: underline;
    }
`

const TextColumn = styled.div`
    flex: 1 0 100%;
    @media screen and (min-width: 1200px) {
        flex: 0 1 calc(50% - 1em);
    }
`

const BreedSinglePage: React.FC<BreedSinglePageProps> = ({ data }) => {
    const {
        breedName,
        breedLifeExpectancyMin,
        breedLifeExpectancyMax,
        breedFriendliness,
        breedShedding,
        breedDescription,
        breedPhoto,
        animalsForAdoption,
        species,
        slug,
    } = data.contentfulBreed

    const statData = {
        breedLifeExpectancyMin: breedLifeExpectancyMin,
        breedLifeExpectancyMax: breedLifeExpectancyMax,
        breedFriendliness: breedFriendliness,
        breedShedding: breedShedding,
    }

    return (
        <Layout>
            <Section>
                <p>
                    <PageLink to={`/`}>&larr; Back to Species List</PageLink>
                </p>

                <h1>
                    {species.speciesType}: {breedName}
                </h1>
            </Section>

            <Section>
                {breedPhoto && (
                    <GatsbyImage image={getImage(breedPhoto)} alt={breedName} />
                )}
            </Section>

            <Section>
                <FlexRow>
                    <TextColumn>{renderRichText(breedDescription)}</TextColumn>

                    <Stats statData={statData} />
                </FlexRow>
            </Section>

            <Section>
                {animalsForAdoption && (
                    <div className="animals-for-adoption">
                        <h2>
                            Adopt a {breedName} {species.speciesType} today!
                        </h2>
                        <FlexRow>
                            {animalsForAdoption.map((animalData) => (
                                <Card
                                    cardData={animalData}
                                    url={`/${animalData.speciesType.slug}/breed/${slug}/${animalData.slug}`}
                                    key={animalData.slug}
                                />
                            ))}
                        </FlexRow>
                    </div>
                )}
            </Section>
        </Layout>
    )
}

export default BreedSinglePage
