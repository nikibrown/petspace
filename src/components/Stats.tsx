import * as React from "react"
import BarGraph from "./BarGraph"
import { designTokens } from "./designTokens"
import RatingStars from "./RatingStars"
import styled from "styled-components"
import { Heading } from "./ui"

interface StatProps {
    statData: {
        breedLifeExpectancyMin: number
        breedLifeExpectancyMax: number
        breedFriendliness: number
        breedShedding: number
    }
}

const BreedStats = styled.div`
    background-color: #eee;
    border: 1px solid ${designTokens.colors.brandBorder};
    border-radius: ${designTokens.borderRadius.default};
    padding: ${designTokens.spacing.small};
`

const BreedStatsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const BreedStatsListItem = styled.li`
    border-bottom: 1px solid ${designTokens.colors.brandBorder};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${designTokens.spacing.small} 0;
    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
`

const Stats = ({ statData }: StatProps) => {
    const {
        breedLifeExpectancyMin,
        breedLifeExpectancyMax,
        breedFriendliness,
        breedShedding,
    } = statData

    return (
        <BreedStats>
            <Heading variant="heading3" as="h3">
                Breed Characteristics
            </Heading>
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
