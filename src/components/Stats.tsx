import * as React from "react"
import BarGraph from "./BarGraph"
import { designTokens } from "./designTokens"
import RatingStars from "./RatingStars"
import styled from "styled-components"

interface StatsProps {
    statData: {
        breedLifeExpectancyMin: number
        breedLifeExpectancyMax: number
        breedFriendliness: number
        breedShedding: number
    }
}

const BreedStats = styled.div`
    flex: 1 0 100%;

    @media screen and (min-width: 1200px) {
        flex: 0 1 calc(50% - 1em);
    }
`

const BreedStatsInner = styled.div`
    background-color: #eee;
    border: 1px solid #bbb;
    border-radius: ${designTokens.borderRadius.default};
    padding: ${designTokens.spacing.small};
`

const BreedStatsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const BreedStatsListItem = styled.li`
    border-bottom: 1px solid #bbb;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${designTokens.spacing.small} 0;
    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
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
            <BreedStatsInner>
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
                        Breed Shedding:{" "}
                        <RatingStars ratingNum={breedShedding} />
                    </BreedStatsListItem>
                </BreedStatsList>
            </BreedStatsInner>
        </BreedStats>
    )
}

export default Stats
