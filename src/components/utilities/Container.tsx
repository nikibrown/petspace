import * as React from "react"
import styled from "styled-components"

interface ContainerProps {
    children: React.ReactNode
}

const PageContainer = styled.div`
    margin: 0 auto;
    max-width: 80vw;
`

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <PageContainer>{children}</PageContainer>
}

export default Container
