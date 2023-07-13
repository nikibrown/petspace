import * as React from "react"
import { graphql } from "gatsby"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import {
    renderRichText,
    RenderRichTextData,
    ContentfulRichTextGatsbyReference,
} from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// components & ui
import {
    ButtonCTA,
    Section,
    Container,
    Heading,
    PageLink,
    Text,
} from "../components/ui"
import Layout from "../components/Layout"

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
                    <Text>
                        <PageLink
                            to={`/${pageContext.parentSpeciesSlug}s/${pageContext.parentBreedSlug}`}
                        >
                            &larr; Back to {pageContext.parentBreed}{" "}
                            {pageContext.parentSpecies}s
                        </PageLink>
                    </Text>

                    <Heading variant="heading1" as="h1">
                        {data.contentfulAnimals.animalName}
                    </Heading>
                </Container>
            </Section>
            <Section>
                <Container>
                    {data.contentfulAnimals.animalPhoto && (
                        <GatsbyImage
                            image={getImage(
                                data.contentfulAnimals.animalPhoto
                                    .gatsbyImageData
                            )}
                            alt={data.contentfulAnimals.animalName}
                        />
                    )}
                </Container>
            </Section>

            <Section>
                <Container>
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
