import * as React from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"

interface BarGraphProps {
    min: number
    max: number
}

const BarBg = styled.div`
    background-color: ${designTokens.colors.brandDark};
    border: 1px solid ${designTokens.colors.brandDark};
`

const Bar = styled.div`
    background-color: ${designTokens.colors.brandLight};
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
