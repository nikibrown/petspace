import * as React from "react"
import styled from "styled-components"
import {
    GatsbyImage,
    getImage,
    ImageDataLike,
    IGatsbyImageData,
} from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Link as CardLink } from "gatsby"
import { designTokens } from "./designTokens"
import ButtonCTA from "./ButtonCTA"

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

const PageCard = styled.div`
    border: 1px solid gray;
    border-radius: 6px;
    flex: 1 0 80vw;
    padding: 15px;

    @media screen and (min-width: 600px) {
        flex: 0 1 calc(50% - 1em);
    }

    @media screen and (min-width: 1200px) {
        flex: 0 1 calc(25% - 1em);
    }

    img {
        border-radius: 6px;
    }
`

const CardLinkHeadline = styled(CardLink)`
    color: ${designTokens.colors.brandPrimary};
    text-decoration: none;
`

const Card: React.FC<CardProps> = ({ cardData, url }) => {
    const cardImage = cardData.breedPhoto || cardData.animalPhoto
    const cardTitle = cardData.breedName || cardData.animalName
    const cardText = cardData.breedSummary || cardData.animalDescription

    return (
        <PageCard>
            <div className="card-image">
                <CardLink to={url}>
                    {cardImage && (
                        <GatsbyImage
                            image={getImage(cardImage)}
                            alt={cardTitle}
                        />
                    )}
                </CardLink>
            </div>
            <div className="card-body">
                <h3>
                    <CardLinkHeadline to={url}>{cardTitle}</CardLinkHeadline>
                </h3>
                {cardText && renderRichText(cardText)}

                <ButtonCTA url={url}>Learn More &rarr;</ButtonCTA>
            </div>
        </PageCard>
    )
}

export default Card
