import * as React from "react"
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
        <div className="card">
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
        </div>
    )
}

export default Card
