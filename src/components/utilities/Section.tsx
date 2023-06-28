import * as React from "react"
import styled from "styled-components"
import Container from "./Container"

interface SectionProps {
    children: React.ReactNode
}

const PageSection = styled.section`
    padding: 20px 0;
`

const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <PageSection>
            <Container>{children}</Container>
        </PageSection>
    )
}

export default Section
