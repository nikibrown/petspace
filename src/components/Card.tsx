import * as React from "react"
import ButtonCTA from "./ButtonCTA"
import { designTokens } from "./designTokens"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import { Link as CardLink } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styled from "styled-components"

interface CardProps {
    cardData: {
        breedPhoto?: ImageDataLike
        animalPhoto?: ImageDataLike
        breedName: string
        animalName: string
        breedSummary: string
        animalDescription: string
    }
    url: string
}

const CardWrapper = styled.div`
    border: 1px solid #bbb;
    border-radius: 6px;
    flex: 1 0 80vw;
    padding: ${designTokens.spacing.small};

    @media screen and (min-width: 600px) {
        flex: 0 1 calc(50% - 1em);
    }

    @media screen and (min-width: 1200px) {
        flex: 0 1 calc(25% - 1em);
    }

    img {
        border-radius: ${designTokens.borderRadius.default};
    }
`

const CardLinkHeadline = styled(CardLink)`
    color: ${designTokens.colors.brandPrimary};
    text-decoration: none;
`
const CardImage = styled.div`
    margin-bottom: ${designTokens.spacing.small};
`

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: self-start;
`

const Card: React.FC<CardProps> = ({ cardData, url }) => {
    const cardImage = cardData.breedPhoto || cardData.animalPhoto
    const cardTitle = cardData.breedName || cardData.animalName
    const cardText = cardData.breedSummary || cardData.animalDescription

    return (
        <CardWrapper>
            <CardImage>
                <CardLink to={url}>
                    {cardImage && (
                        <GatsbyImage
                            image={getImage(cardImage)}
                            alt={cardTitle}
                        />
                    )}
                </CardLink>
            </CardImage>
            <CardBody>
                <h3>
                    <CardLinkHeadline to={url}>{cardTitle}</CardLinkHeadline>
                </h3>
                {cardText && renderRichText(cardText)}

                <ButtonCTA url={url}>Learn More &rarr;</ButtonCTA>
            </CardBody>
        </CardWrapper>
    )
}

export default Card
