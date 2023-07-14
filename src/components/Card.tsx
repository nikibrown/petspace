import * as React from "react"
import {
    renderRichText,
    RenderRichTextData,
    ContentfulRichTextGatsbyReference,
} from "gatsby-source-contentful/rich-text"

// components & ui
import styled from "styled-components"
import { variant } from "styled-system"
import { ButtonCTA, Heading, PageLink } from "./ui"
import { designTokens } from "./designTokens"

interface CardProps {
    cardData: {
        breedPhoto?: string
        animalPhoto?: string
        breedName: string
        animalName: string
        breedSummary: RenderRichTextData<ContentfulRichTextGatsbyReference>
        animalDescription: RenderRichTextData<ContentfulRichTextGatsbyReference>
        featured?: string
    }

    url: string
}

interface FeaturedCardProps {
    variant?: "Featured" | "Standard"
}

const CardWrapper = styled.div<FeaturedCardProps>`
    background-color: ${designTokens.colors.brandLight};
    border: 1px solid ${designTokens.colors.brandBorder};
    border-radius: 6px;
    flex: 1 0 80vw;
    padding: ${designTokens.spacing.small};

    &:last-child {
        margin-right: auto;
    }

    @media screen and (min-width: 800px) {
        flex: 0 1 calc(50% - 1em);
    }

    @media screen and (min-width: 1600px) {
        flex: 0 1 calc(25% - 1em);
    }

    img {
        border-radius: ${designTokens.borderRadius.default};
    }

    ${variant({
        variants: {
            Featured: {
                "@media(min-width: 0px)": {
                    borderColor: designTokens.colors.brandPrimary,
                    flex: "0 1 100vw",
                },
            },
        },
    })}
`

const CardWrapperInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .featured & {
        flex-direction: row;
    }
`

const CardImageContainer = styled.div`
    img {
        height: auto;
        max-width: 100%;
    }

    .featured & {
        max-width: 50%;
    }
`

const CardBody = styled.div`
    align-items: self-start;
    display: flex;
    flex-direction: column;
`

const Card = ({ cardData, url }: CardProps) => {
    const cardImage = cardData.breedPhoto || cardData.animalPhoto
    const cardTitle = cardData.breedName || cardData.animalName
    const cardText = cardData.breedSummary || cardData.animalDescription

    // pass featured to CardWrapper & CardWrapperInner as a variant
    return (
        <CardWrapper
            variant={cardData.featured}
            className={cardData.featured?.toLowerCase()}
        >
            <CardWrapperInner>
                <CardImageContainer>
                    <PageLink to={url}>
                        {cardImage && (
                            <img
                                srcSet={
                                    cardImage.gatsbyImageData.images.sources
                                        .srcSet
                                }
                                sizes={
                                    cardImage.gatsbyImageData.images.sources
                                        .sizes
                                }
                                src={
                                    cardImage.gatsbyImageData.images.fallback
                                        .src
                                }
                                alt={cardTitle}
                            />
                        )}
                    </PageLink>
                </CardImageContainer>
                <CardBody>
                    <Heading variant="heading3" as="h3">
                        <PageLink to={url}>{cardTitle}</PageLink>
                    </Heading>
                    {cardText && renderRichText(cardText)}

                    <ButtonCTA variant="primary" to={url}>
                        Learn More &rarr;
                    </ButtonCTA>
                </CardBody>
            </CardWrapperInner>
        </CardWrapper>
    )
}

export default Card
