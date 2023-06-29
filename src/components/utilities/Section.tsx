import * as React from "react"
import Container from "./Container"
import { designTokens } from "../designTokens"
import styled from "styled-components"

interface SectionProps {
    children: React.ReactNode
}

const Wrapper = styled.section`
    padding: ${designTokens.spacing.small} 0;
`

const Section = ({ children }: SectionProps) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    )
}

export default Section
