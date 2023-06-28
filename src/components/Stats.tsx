import * as React from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"
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

const BreedStats = styled.div`
    background-color: lightgray;
    border-radius: 6px;
    flex: 0 1 calc(50% - 1em);
    padding: 10px 20px;
`

const BreedStatsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const BreedStatsListItem = styled.li`
    margin: 5px 0;
    padding: 0;
`

const Stats: React.FC<StatsProps> = ({ statData }) => {
    const {
        breedLifeExpectancyMin,
        breedLifeExpectancyMax,
        breedFriendliness,
        breedShedding,
    } = statData

    return (
        <BreedStats>
            <h3>Breed Characteristics</h3>
            <BreedStatsList>
                <BreedStatsListItem>
                    Life Expectancy:{" "}
                    <BarGraph
                        min={breedLifeExpectancyMin}
                        max={breedLifeExpectancyMax}
                    />
                </BreedStatsListItem>
                <BreedStatsListItem>
                    Breed Friendliness:{" "}
                    <RatingStars ratingNum={breedFriendliness} />
                </BreedStatsListItem>
                <BreedStatsListItem>
                    Breed Shedding: <RatingStars ratingNum={breedShedding} />
                </BreedStatsListItem>
            </BreedStatsList>
        </BreedStats>
    )
}

export default Stats
