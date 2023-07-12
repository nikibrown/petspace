import * as React from "react"
import { graphql } from "gatsby"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import {
    renderRichText,
    RenderRichTextData,
    ContentfulRichTextGatsbyReference,
} from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// components
import { ButtonCTA, Section, Container } from "../components/ui"
import Layout from "../components/Layout"
import PageLink from "../components/PageLink"

// styles
import styled from "styled-components"
import { designTokens } from "../components/designTokens"

interface SingleAnimalProps {
    data: {
        contentfulAnimals: {
            id: string
            animalName: string
            animalPhoto: {
                gatsbyImageData: IGatsbyImageData
            }
            animalDescription: RenderRichTextData<ContentfulRichTextGatsbyReference>
            adoptionLink: string
        }
    }
    pageContext: {
        slug: string
        parentBreedSlug: string
        parentBreed: string
        parentSpecies: string
        parentSpeciesSlug: string
    }
}

export const Head = ({ data, pageContext }: SingleAnimalProps) => (
    <>
        <title>
            {pageContext.parentSpecies}s - {pageContext.parentBreed} -{" "}
            {data.contentfulAnimals.animalName}
        </title>
        <meta
            name="description"
            content={`Your place to learn about ${data.contentfulAnimals.animalName}, the ${pageContext.parentBreed} ${pageContext.parentSpecies}`}
        />
    </>
)

const AnimalSinglePage = ({ data, pageContext }: SingleAnimalProps) => {
    return (
        <Layout>
            <Section>
                <Container>
                    <p>
                        <PageLink
                            url={`/${pageContext.parentSpeciesSlug}s/${pageContext.parentBreedSlug}`}
                        >
                            &larr; Back to {pageContext.parentBreed}{" "}
                            {pageContext.parentSpecies}s
                        </PageLink>
                    </p>

                    <h1>{data.contentfulAnimals.animalName}</h1>

                    {data.contentfulAnimals.animalPhoto && (
                        <ImageContainer>
                            <GatsbyImage
                                image={getImage(
                                    data.contentfulAnimals.animalPhoto
                                        .gatsbyImageData
                                )}
                                alt={data.contentfulAnimals.animalName}
                            />
                        </ImageContainer>
                    )}

                    <div className="desc">
                        {renderRichText(
                            data.contentfulAnimals.animalDescription
                        )}
                    </div>

                    {data.contentfulAnimals.adoptionLink && (
                        <ButtonCTA
                            variant="primary"
                            to={data.contentfulAnimals.adoptionLink}
                        >
                            Adopt {data.contentfulAnimals.animalName} &rarr;
                        </ButtonCTA>
                    )}
                </Container>
            </Section>
        </Layout>
    )
}

export default AnimalSinglePage

export const query = graphql`
    query ($slug: String) {
        contentfulAnimals(slug: { eq: $slug }) {
            id
            animalName
            animalPhoto {
                gatsbyImageData
            }
            animalDescription {
                raw
            }
            adoptionLink
        }
    }
`

const ImageContainer = styled.div`
    margin-bottom: ${designTokens.spacing.small};
`
