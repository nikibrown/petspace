import * as React from "react"
import styled from "styled-components"

interface FlexRowProps {
    children: React.ReactNode
}

const PageFlexRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
`

const FlexRow: React.FC<FlexRowProps> = ({ children }) => {
    return <PageFlexRow>{children}</PageFlexRow>
}

export default FlexRow
