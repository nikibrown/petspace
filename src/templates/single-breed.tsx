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
            slug: string
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
            animalsForAdoption: {
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
export const Head: HeadFC = ({ data, pageContext }) => (
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

const BreedSinglePage: React.FC<BreedSinglePageProps> = ({
    data,
    pageContext,
}) => {
    const {
        breedName,
        breedLifeExpectancyMin,
        breedLifeExpectancyMax,
        breedFriendliness,
        breedShedding,
        breedDescription,
        breedPhoto,
        animalsForAdoption,
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
            {/* <Section>
                <h1>{data.contentfulBreed.slug}</h1>
                <h1>{JSON.stringify(pageContext)}</h1>
                <ul>
                    {data.contentfulBreed.animalsForAdoption?.map((animal) => (
                        <li key={animal.slug}>{animal.animalName}</li>
                    ))}
                </ul>
            </Section> */}
            <Section>
                <p>
                    <PageLink to={`/`}>&larr; Back to Species List</PageLink>
                </p>

                <h1>
                    {pageContext.parentSpecies}: {breedName}
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
                            Adopt a {breedName} {pageContext.parentSpecies}{" "}
                            today!
                        </h2>
                        <FlexRow>
                            {animalsForAdoption.map((animalData) => (
                                <Card
                                    cardData={animalData}
                                    url={`/${pageContext.parentSlug}s/${slug}/${animalData.slug}`}
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
