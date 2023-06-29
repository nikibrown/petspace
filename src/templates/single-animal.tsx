import * as React from "react"
import { graphql } from "gatsby"
import { Link as TextPageLink } from "gatsby"
import type { PageProps } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// components
import ButtonCTA from "../components/ButtonCTA"
import Layout from "../components/Layout"
import Section from "../components/utilities/Section"

// types
import type { SingleAnimal } from "../types/types"

// styles
import styled from "styled-components"
import { designTokens } from "../components/designTokens"

type GraphQLResult = {
    contentfulAnimals: SingleAnimal
    pageContext: {
        slug: string
        parentBreedSlug: string
        parentBreed: string
        parentSpecies: string
        parentSpeciesSlug: string
    }
}

export const Head = ({ data, pageContext }) => (
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

const AnimalSinglePage = ({ data, pageContext }: PageProps<GraphQLResult>) => {
    return (
        <Layout>
            <Section>
                <p>
                    <PageLink
                        to={`/${pageContext.parentSpeciesSlug}s/${pageContext.parentBreedSlug}`}
                    >
                        &larr; Back to {pageContext.parentBreed}{" "}
                        {pageContext.parentSpecies}s
                    </PageLink>
                </p>

                <h1>{data.contentfulAnimals.animalName}</h1>

                {data.contentfulAnimals.animalPhoto && (
                    <ImageContainer>
                        <GatsbyImage
                            image={getImage(data.contentfulAnimals.animalPhoto)}
                            alt={data.contentfulAnimals.animalName}
                        />
                    </ImageContainer>
                )}

                <div className="desc">
                    {renderRichText(data.contentfulAnimals.animalDescription)}
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

const ImageContainer = styled.div`
    margin-bottom: ${designTokens.spacing.small};
`
