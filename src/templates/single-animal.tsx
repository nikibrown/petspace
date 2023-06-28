import * as React from "react"
import { HeadFC, graphql } from "gatsby"
import { Link as TextPageLink } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
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
    <>
        <title>
            {data.contentfulAnimals.speciesType.speciesType}s -{" "}
            {data.contentfulAnimals.breedType.breedName} -{" "}
            {data.contentfulAnimals.animalName}
        </title>
        <meta
            name="description"
            content={`Your place to learn about ${data.contentfulAnimals.animalName}, the ${data.contentfulAnimals.breedType.breedName} ${data.contentfulAnimals.speciesType.speciesType}`}
        />
    </>
)

const AnimalSinglePage: React.FC<AnimalSinglePageProps> = ({ data }) => {
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
