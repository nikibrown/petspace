import * as React from "react"
import { HeadFC, graphql } from "gatsby"
import { Link as TextPageLink } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import Layout from "../components/Layout"
import Section from "../components/utilities/Section"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import styled from "styled-components"
import ButtonCTA from "../components/ButtonCTA"
import { designTokens } from "../components/designTokens"

interface AnimalSinglePageProps {
    data: {
        contentfulAnimals: {
            id: string
            animalName: string
            animalPhoto: {
                gatsbyImageData: IGatsbyImageData
            }
            animalDescription: {
                raw: string
            }
            adoptionLink: string
            speciesType: {
                slug: string
                speciesType: string
            }
            breedType: {
                slug: string
                breedName: string
            }
        }
    }
}

export const query = graphql`
    query ($slug: String) {
        contentfulAnimals(slug: { eq: $slug }) {
            id
            animalName
            animalPhoto {
                gatsbyImageData(layout: FULL_WIDTH)
            }
            animalDescription {
                raw
            }
            adoptionLink
            speciesType {
                slug
                speciesType
            }
            breedType {
                slug
                breedName
            }
        }
    }
`
const PageLink = styled(TextPageLink)`
    color: ${designTokens.colors.brandPrimary};
    text-decoration: none;
    &:hover {
        text-decoraton: underline;
    }
`

export const Head: HeadFC = ({ data }) => (
    <title>
        {data.contentfulAnimals.speciesType.speciesType}s -{" "}
        {data.contentfulAnimals.breedType.breedName} -{" "}
        {data.contentfulAnimals.animalName}
    </title>
)

const AnimalSinglePage: React.FC<AnimalSinglePageProps> = ({ data }) => {
    const options = {
        renderMark: {
            [MARKS.BOLD]: (text: string) => <b className="font-bold">{text}</b>,
        },
        renderNode: {
            [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
                const { uri } = node.data
                return (
                    <a href={uri} className="underline">
                        {children}
                    </a>
                )
            },
            [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => {
                return <h2>{children}</h2>
            },
        },
    }

    return (
        <Layout>
            <Section>
                <p>
                    <PageLink
                        to={`/${data.contentfulAnimals.speciesType.slug}/breed/${data.contentfulAnimals.breedType.slug}`}
                    >
                        &larr; Back to{" "}
                        {data.contentfulAnimals.breedType.breedName}{" "}
                        {data.contentfulAnimals.speciesType.speciesType}s
                    </PageLink>
                </p>

                <h1>{data.contentfulAnimals.animalName}</h1>
                {data.contentfulAnimals.animalPhoto && (
                    <GatsbyImage
                        image={getImage(data.contentfulAnimals.animalPhoto)}
                        alt={data.contentfulAnimals.animalName}
                    />
                )}

                <div className="desc">
                    {renderRichText(
                        data.contentfulAnimals.animalDescription,
                        options
                    )}
                </div>

                {data.contentfulAnimals.adoptionLink && (
                    <ButtonCTA url={data.contentfulAnimals.adoptionLink}>
                        Adopt {data.contentfulAnimals.animalName} &rarr;
                    </ButtonCTA>
                )}
            </Section>
        </Layout>
    )
}

export default AnimalSinglePage
