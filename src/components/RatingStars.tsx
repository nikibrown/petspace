import * as React from "react"
import { designTokens } from "./designTokens"
import styled from "styled-components"

interface RatingStarsProps {
    ratingNum: number
}

const FilledStar = styled.span`
    color: ${designTokens.colors.brandEmphasis};
`

const EmptyStar = styled.span`
    color: ${designTokens.colors.brandEmphasis};
`

const RatingStars = ({ ratingNum }: RatingStarsProps) => {
    const filledStars = Array.from({ length: ratingNum }, (_, i) => "★")

    const emptyStarsNum = 5 - ratingNum

    const emptyStars = Array.from({ length: emptyStarsNum }, (_, i) => "☆")

    return (
        <span className="rating">
            {filledStars.map((star, index) => (
                <FilledStar key={index}>{star}</FilledStar>
            ))}

            {emptyStars.map((star, index) => (
                <EmptyStar key={index}>{star}</EmptyStar>
            ))}
        </span>
    )
}

export default RatingStars
