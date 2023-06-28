import * as React from "react"
import styled from "styled-components"

import {
    GatsbyImage,
    getImage,
    ImageDataLike,
    IGatsbyImageData,
} from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Link } from "gatsby"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"

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
    padding: 20px;

    @media screen and (min-width: 600px) {
        flex: 0 1 calc(50% - 1em);
    }

    @media screen and (min-width: 1200px) {
        flex: 0 1 calc(25% - 1em);
    }
`

const Card: React.FC<CardProps> = ({ cardData, url }) => {
    const cardImage = cardData.breedPhoto || cardData.animalPhoto
    const cardTitle = cardData.breedName || cardData.animalName
    const cardText = cardData.breedSummary || cardData.animalDescription

    const options = {
        renderMark: {
            [MARKS.BOLD]: (text: React.ReactNode) => (
                <b className="font-bold">{text}</b>
            ),
        },
        renderNode: {
            [INLINES.HYPERLINK]: (node: any, children: any) => {
                const { uri } = node.data
                return (
                    <a href={uri} className="underline">
                        {children}
                    </a>
                )
            },
            [BLOCKS.HEADING_2]: (children: any) => {
                return <h2>{children}</h2>
            },
        },
    }

    return (
        <PageCard>
            <div className="card-image">
                <Link to={url}>
                    {cardImage && (
                        <GatsbyImage
                            image={getImage(cardImage)}
                            alt={cardTitle}
                        />
                    )}
                </Link>
            </div>
            <div className="card-body">
                <h3>
                    <Link to={url}>{cardTitle}</Link>
                </h3>
                {cardText && renderRichText(cardText, options)}
                <Link to={url}>Learn More</Link>
            </div>
        </PageCard>
    )
}

export default Card
