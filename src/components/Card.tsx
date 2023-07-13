import * as React from "react"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import {
    renderRichText,
    RenderRichTextData,
    ContentfulRichTextGatsbyReference,
} from "gatsby-source-contentful/rich-text"

// components & ui
import { designTokens } from "./designTokens"
import styled from "styled-components"
import { ButtonCTA, Heading, PageLink } from "./ui"

interface CardProps {
    cardData: {
        breedPhoto?: ImageDataLike | undefined
        animalPhoto?: ImageDataLike | undefined
        breedName: string
        animalName: string
        breedSummary: RenderRichTextData<ContentfulRichTextGatsbyReference>
        animalDescription: RenderRichTextData<ContentfulRichTextGatsbyReference>
    }
    url: string
}

const CardWrapper = styled.div`
    background-color: ${designTokens.colors.brandLight};
    border: 1px solid ${designTokens.colors.brandBorder};
    border-radius: 6px;
    flex: 1 0 80vw;
    padding: ${designTokens.spacing.small};

    @media screen and (min-width: 800px) {
        flex: 0 1 calc(50% - 1em);
    }

    @media screen and (min-width: 1600px) {
        flex: 0 1 calc(25% - 1em);
    }

    img {
        border-radius: ${designTokens.borderRadius.default};
    }
`

const CardImageContainer = styled.div`
    margin-bottom: ${designTokens.spacing.small};
`

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: self-start;
`

const Card = ({ cardData, url }: CardProps) => {
    const cardImage = cardData.breedPhoto || cardData.animalPhoto
    const cardTitle = cardData.breedName || cardData.animalName
    const cardText = cardData.breedSummary || cardData.animalDescription

    return (
        <CardWrapper>
            <CardImageContainer>
                <PageLink to={url}>
                    {cardImage && (
                        <GatsbyImage
                            image={getImage(cardImage)}
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
        </CardWrapper>
    )
}

export default Card
