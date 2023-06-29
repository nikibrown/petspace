import * as React from "react"
import styled from "styled-components"

interface FlexRowProps {
    children: React.ReactNode
}

const FlexRow = ({ children }: FlexRowProps) => {
    return <Wrapper>{children}</Wrapper>
}

/*
 * Default FlexRow styles
 */

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

/*
 * Variant FlexRow with space-between
 */

export const FlexRowSpaced = styled(Wrapper)`
    && {
        justify-content: space-between;
    }
`

/*
 * Variant FlexRow with flex-start
 */

export const FlexRowStart = styled(Wrapper)`
    && {
        justify-content: flex-start;
    }
`

export default FlexRow
