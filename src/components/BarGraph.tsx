import * as React from "react"
import styled from "styled-components"

interface BarGraphProps {
    min: number
    max: number
}

const BarBg = styled.div`
    background-color: gray;
    border: 1px solid black;
`

const Bar = styled.div`
    background-color: white;
    text-align: right;
`

const BarGraph: React.FC<BarGraphProps> = ({ min, max }) => {
    const barLength = `${Math.floor((max / 18) * 100)}%`

    return (
        <BarBg>
            <Bar style={{ width: barLength }}>
                <span>
                    {min} - {max} years
                </span>
            </Bar>
        </BarBg>
    )
}

export default BarGraph
