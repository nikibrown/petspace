import * as React from "react"
import RatingStars from "./RatingStars"
import BarGraph from "./BarGraph"

interface StatsProps {
    statData: {
        breedLifeExpectancyMin: number
        breedLifeExpectancyMax: number
        breedFriendliness: number
        breedShedding: number
    }
}

const Stats: React.FC<StatsProps> = ({ statData }) => {
    const {
        breedLifeExpectancyMin,
        breedLifeExpectancyMax,
        breedFriendliness,
        breedShedding,
    } = statData

    return (
        <div className="breed-stats">
            <ul>
                <li>
                    Life Expectancy:{" "}
                    <BarGraph
                        min={breedLifeExpectancyMin}
                        max={breedLifeExpectancyMax}
                    />
                </li>
                <li>
                    Breed Friendliness:{" "}
                    <RatingStars ratingNum={breedFriendliness} />
                </li>
                <li>
                    Breed Shedding: <RatingStars ratingNum={breedShedding} />
                </li>
            </ul>
        </div>
    )
}

export default Stats
