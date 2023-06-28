import React from "react"

interface RatingStarsProps {
    ratingNum: number
}

const RatingStars: React.FC<RatingStarsProps> = ({ ratingNum }) => {
    const filledStars = Array.from({ length: ratingNum }, (_, i) => "★")

    const emptyStarsNum = 5 - ratingNum

    const emptyStars = Array.from({ length: emptyStarsNum }, (_, i) => "☆")

    return (
        <span className="rating">
            {filledStars.map((star, index) => (
                <span key={index}>{star}</span>
            ))}

            {emptyStars.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </span>
    )
}

export default RatingStars
