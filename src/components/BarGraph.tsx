import * as React from "react"
import { designTokens } from "./designTokens"
import styled from "styled-components"

interface BarGraphProps {
    min: number
    max: number
}

const BarBg = styled.div`
    background-color: ${designTokens.colors.brandBorder};
    border: 1px solid ${designTokens.colors.brandBorder};
    flex: 0 1 calc(70% - 1em);
`

const Bar = styled.div`
    background-color: ${designTokens.colors.brandLight};
    font-size: 12px;
    padding: 5px 10px;
    text-align: right;
    height: 100%;
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
