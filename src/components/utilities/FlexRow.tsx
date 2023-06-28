import * as React from "react"
import styled from "styled-components"

interface FlexRowProps {
    children: React.ReactNode
}

const PageFlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const FlexRow: React.FC<FlexRowProps> = ({ children }) => {
    return <PageFlexRow>{children}</PageFlexRow>
}

export default FlexRow
